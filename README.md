# 4.000 semanas — app web (PWA)

App estática, instalable en el celular, con la estética de los videos *4,000 Weeks* (parte 1 y 2).
Sin build ni backend: HTML + CSS + JS. Funciona offline después de la primera visita.

## Secciones

1. **Tu vida**: edad + horas de celular por día → grilla de 80 × 52 semanas: vividas, dormir,
   trabajo, celular y libres. Con los supuestos por defecto (30 años, 4 h/día) da exactamente los
   números del video: 1.560 / 867 / 400 / 435 / 898. Incluye "¿y si bajás a…?" (semanas que
   recuperás), comparación con tu franja de edad, guía para ver el tiempo de pantalla en iPhone,
   Android, Samsung y Xiaomi, y un botón de compartir con link precargado (`?edad=30&h=4`).
2. **Según los datos**: una vida típica de 80 años donde cada etapa usa el celular que hoy usa esa
   edad (≈ 498 semanas, 9,6 años), con tarjetas por etapa (niños, preadolescentes, adolescentes,
   adultos jóvenes, adultos, adultos mayores) que resaltan sus años en la grilla y muestran cada
   cifra con métrica, región, año, fuente y nivel de verificación. Más Argentina y una guía de lectura.
3. **Cómo cambió**: gráfico 1975–2025 con 4 series que **no se suman** (TV por hogar, TV por
   persona, celular por persona, internet), y "un día en cuadraditos" para hace 50, 40, 30, 20 y
   10 años, y hoy.

## Datos

- `research/datos.json` + `research/RESUMEN.md`: investigación completa con cita literal y URL de cada cifra.
- `data.js`: la selección que usa la app. Cada cifra lleva `verif`: `p` (primaria), `d` (derivado,
  cuenta propia) o `s` (secundaria: la fuente original estaba bloqueada; **verificar antes de
  publicar**: Ofcom 2025, DataReportal Argentina, Nielsen 2005-06, eMarketer 2025).
- No existe un dato oficial de "horas de celular por edad"; la app lo dice y etiqueta la métrica de cada grupo.

## Probar local

```powershell
cd app-semanas
python -m http.server 5180
```

Abrir `http://localhost:5180`. Desde el celular en la misma red: `http://<IP-de-la-PC>:5180`
(la instalación como app y el modo offline necesitan HTTPS, así que eso solo anda ya publicada).

## Publicar (un link para el celular)

Cualquier hosting estático sirve, porque es una carpeta con archivos. Opciones:

- **GitHub Pages**: repo con esta carpeta → Settings → Pages → rama `main`, carpeta raíz.
  Queda en `https://<usuario>.github.io/<repo>/`.
- **Netlify Drop**: arrastrar la carpeta a https://app.netlify.com/drop.

Al cambiar archivos, subí `VERSION` en `sw.js` para que los celulares que ya la tienen instalada se actualicen.

## Pendientes conocidos

- Verificar a mano las cifras marcadas "verificar" (ver arriba).
- Los nombres de menú de la guía de tiempo de pantalla pueden variar según la versión del sistema; conviene probarlos en un iPhone y en un Android reales.
