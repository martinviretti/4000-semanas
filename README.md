# 4.000 semanas — app web (PWA)

**Online:** https://martinviretti.github.io/4000-semanas/ (repo: https://github.com/martinviretti/4000-semanas)

App estática, instalable en el celular, con la estética de los videos *4,000 Weeks* (parte 1 y 2).
Sin build ni backend: HTML + CSS + JS. Funciona offline después de la primera visita.

## Estructura (una historia en pasos)

0. **Intro**: "Una vida de 80 años son 4.160 semanas", clave visual de cómo leer los cuadrados
   (1 cuadrado = 1 semana · 1 fila de 52 = 1 año · 80 filas = una vida) y el **video de la parte 1**
   (`video/weeks_es.mp4` / `weeks_en.mp4`, 720×1280, ~3,5 MB, según el idioma). Se puede saltar; al
   terminar baja solo al paso 1 y la próxima visita aparece compacto ("Ver el video otra vez").
1. **Tu vida**: edad y horas con botones –/+ (y slider de horas), resultado visible sin scrollear,
   grilla con marcador "Vos hoy" que late, explicación de qué es cada fila, y **tocar una fila** muestra
   ese año en detalle (semanas durmiendo / trabajando / celular / libres). Con 30 años y 4 h da los
   números del video: 1.560 / 867 / 400 / 435 / 898. "¿Y si bajás a…?", guía de tiempo de pantalla
   (iPhone, Android, Samsung, Xiaomi) y supuestos ajustables.
2. **Por edad**: "Vos vs. la gente de tu edad", una vida típica de 80 años (≈ 498 semanas, 9,6 años)
   con tu marcador y detalle por fila, y tarjetas por etapa en lenguaje simple (una frase + semanas
   de esa etapa); métrica, fuente y verificación quedan en "Ver fuentes y detalles".
3. **Antes y ahora**: un día de 24 cuadrados (1 = 1 hora) por década, de 1975 a hoy, todas a la vista:
   TV por hogar (rayado), TV por persona (blanco) y celular (rojo). El gráfico con todas las series
   queda plegado como detalle.

Extras: barra fija con tu resultado al bajar, y **Compartir** genera una imagen vertical 1080×1920
(tu grilla + número + link) lista para historias; si el navegador no permite compartir archivos, la
descarga y copia el link.

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
