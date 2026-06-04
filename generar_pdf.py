#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Genera el PDF de entrega de la tarea, con datos personales, foto 2x2
y códigos QR (repositorio del código y video de YouTube).

Uso:
    python3 generar_pdf.py                 # sin video aún
    python3 generar_pdf.py "URL_DEL_VIDEO" # con el link de YouTube
"""
import sys
import os
import qrcode
from reportlab.lib.pagesizes import letter
from reportlab.lib.units import cm
from reportlab.lib.colors import HexColor
from reportlab.pdfgen import canvas
from reportlab.lib.utils import ImageReader
from io import BytesIO

# ─────────────────────────── DATOS ───────────────────────────
NOMBRE      = "José"
APELLIDO    = "Reyes"
MATRICULA   = "2024-1547"
CORREO      = "josereyesmartinez1304@gmail.com"
REPO_URL    = "https://github.com/Lampster1304/tarea-menu-app-rn"
VIDEO_URL   = sys.argv[1] if len(sys.argv) > 1 else ""   # link de YouTube

BASE = os.path.dirname(os.path.abspath(__file__))
FOTO = os.path.join(BASE, "assets", "foto.jpg")
SALIDA = os.path.join(BASE, "Entrega_Jose_Reyes_2024-1547.pdf")

AZUL      = HexColor("#4f46e5")
AZUL_OSC  = HexColor("#3730a3")
GRIS      = HexColor("#6b7280")
GRIS_CLAR = HexColor("#f3f4f6")
NEGRO     = HexColor("#1f2937")


def hacer_qr(data):
    qr = qrcode.QRCode(box_size=10, border=2,
                       error_correction=qrcode.constants.ERROR_CORRECT_M)
    qr.add_data(data)
    qr.make(fit=True)
    img = qr.make_image(fill_color="#1f2937", back_color="white").convert("RGB")
    buf = BytesIO()
    img.save(buf, format="PNG")
    buf.seek(0)
    return ImageReader(buf)


def main():
    c = canvas.Canvas(SALIDA, pagesize=letter)
    W, H = letter

    # Encabezado
    c.setFillColor(AZUL)
    c.rect(0, H - 3.2 * cm, W, 3.2 * cm, fill=1, stroke=0)
    c.setFillColor(HexColor("#ffffff"))
    c.setFont("Helvetica-Bold", 22)
    c.drawString(2 * cm, H - 1.7 * cm, "Tarea — App Móvil con Menú")
    c.setFont("Helvetica", 12)
    c.drawString(2 * cm, H - 2.5 * cm, "React Native + Expo")

    # Foto 2x2
    foto_x, foto_y, foto_lado = 2 * cm, H - 8.7 * cm, 5 * cm
    if os.path.exists(FOTO):
        c.drawImage(FOTO, foto_x, foto_y, foto_lado, foto_lado,
                    preserveAspectRatio=True, mask='auto')
    c.setStrokeColor(AZUL)
    c.setLineWidth(2)
    c.rect(foto_x, foto_y, foto_lado, foto_lado, fill=0, stroke=1)

    # Datos personales
    dx = foto_x + foto_lado + 1 * cm
    dy = H - 4.6 * cm

    def dato(etiqueta, valor):
        nonlocal dy
        c.setFillColor(GRIS)
        c.setFont("Helvetica-Bold", 9)
        c.drawString(dx, dy, etiqueta.upper())
        c.setFillColor(NEGRO)
        c.setFont("Helvetica-Bold", 15)
        c.drawString(dx, dy - 0.55 * cm, valor)
        dy -= 1.5 * cm

    dato("Nombre", NOMBRE)
    dato("Apellido", APELLIDO)
    dato("Matrícula", MATRICULA)
    dato("Correo electrónico", CORREO)

    c.setStrokeColor(GRIS_CLAR)
    c.setLineWidth(1)
    c.line(2 * cm, H - 9.6 * cm, W - 2 * cm, H - 9.6 * cm)

    # Sección repositorio
    sec_y = H - 11 * cm
    c.setFillColor(AZUL_OSC)
    c.setFont("Helvetica-Bold", 15)
    c.drawString(2 * cm, sec_y, "Repositorio del código")

    qr_lado = 4 * cm
    c.drawImage(hacer_qr(REPO_URL), 2 * cm, sec_y - qr_lado - 0.5 * cm,
                qr_lado, qr_lado)
    c.setFillColor(GRIS)
    c.setFont("Helvetica", 9)
    c.drawString(2 * cm, sec_y - qr_lado - 1.1 * cm, "Escanea el QR")
    c.setFillColor(AZUL)
    c.setFont("Helvetica", 10)
    c.drawString(2 * cm + qr_lado + 0.6 * cm, sec_y - 1.2 * cm, REPO_URL)

    # Sección video
    vid_x = W / 2 + 1 * cm
    c.setFillColor(AZUL_OSC)
    c.setFont("Helvetica-Bold", 15)
    c.drawString(vid_x, sec_y, "Video de la experiencia")

    if VIDEO_URL:
        c.drawImage(hacer_qr(VIDEO_URL), vid_x, sec_y - qr_lado - 0.5 * cm,
                    qr_lado, qr_lado)
        c.setFillColor(GRIS)
        c.setFont("Helvetica", 9)
        c.drawString(vid_x, sec_y - qr_lado - 1.1 * cm, "Escanea el QR")
        c.setFillColor(AZUL)
        c.setFont("Helvetica", 10)
        link = VIDEO_URL if len(VIDEO_URL) < 32 else VIDEO_URL[:30] + "..."
        c.drawString(vid_x + qr_lado + 0.6 * cm, sec_y - 1.2 * cm, link)
    else:
        c.setStrokeColor(GRIS)
        c.setLineWidth(1)
        c.setDash(4, 3)
        c.rect(vid_x, sec_y - qr_lado - 0.5 * cm, qr_lado, qr_lado,
               fill=0, stroke=1)
        c.setDash()
        c.setFillColor(GRIS)
        c.setFont("Helvetica-Oblique", 10)
        c.drawString(vid_x, sec_y - qr_lado / 2 - 0.2 * cm, "  (Pendiente:")
        c.drawString(vid_x, sec_y - qr_lado / 2 - 0.7 * cm, "   link del video)")

    # Pie
    c.setFillColor(GRIS)
    c.setFont("Helvetica", 8)
    c.drawCentredString(W / 2, 1.5 * cm,
                        f"{NOMBRE} {APELLIDO}  ·  {MATRICULA}  ·  {CORREO}")

    c.showPage()
    c.save()
    print("PDF generado:", SALIDA)


if __name__ == "__main__":
    main()
