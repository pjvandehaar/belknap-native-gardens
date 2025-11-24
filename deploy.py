#!/usr/bin/env python3

from pathlib import Path
import subprocess as subp

def run_cmd(cmd: list[str]) -> None:
    print('=>', cmd)
    subp.run(cmd)

def strict_replace(text: str, old: str, new: str) -> str:
    if old not in text:
        raise ValueError(f"String '{old}' not found in text")
    return text.replace(old, new)

html = Path('index.html').read_text()
script = Path('script.js').read_text()
style = Path('style.css').read_text()

new_html = strict_replace(html, '<script src="script.js"></script>', f'<script type="text/javascript">{script}</script>')
new_html = strict_replace(new_html, '<link rel="stylesheet" href="style.css">', f'<style>{style}</style>')
Path('1.html').write_text(new_html)

run_cmd(['scp', '1.html', 'petervh:/var/www/html/belknap/native-gardens/index.html'])
