"""Erzeugt zu jedem Foto eine Vorschau  <name>.thumb.webp  (max. 900 px lange Kante).

Aufruf im Projektordner (benötigt Pillow: pip install pillow):
    python3 tools/make_thumbs.py .

Die Seite lädt in Kacheln automatisch die .thumb.webp-Datei und fällt auf das
Original zurück, falls noch keine Vorschau existiert.
"""
import os
import sys
from PIL import Image, ImageOps

MAX_EDGE = 900
QUALITY = 74

root = sys.argv[1]
dirs = ["assets/progress", "assets/shootings", "assets/wettkaempfe"]
total_src = total_thumb = count = 0
for d in dirs:
    for dirpath, _, files in os.walk(os.path.join(root, d)):
        for f in sorted(files):
            if ".thumb." in f or not f.lower().endswith((".jpg", ".jpeg", ".webp", ".png")):
                continue
            src = os.path.join(dirpath, f)
            dst = os.path.join(dirpath, os.path.splitext(f)[0] + ".thumb.webp")
            im = ImageOps.exif_transpose(Image.open(src)).convert("RGB")
            im.thumbnail((MAX_EDGE, MAX_EDGE), Image.LANCZOS)
            im.save(dst, "WEBP", quality=QUALITY, method=6)
            total_src += os.path.getsize(src)
            total_thumb += os.path.getsize(dst)
            count += 1
print(f"{count} Vorschaubilder: Originale {total_src/1e6:.1f} MB -> Vorschauen {total_thumb/1e6:.1f} MB")
