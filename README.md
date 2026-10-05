# 4.000 semanas — app web (PWA)

**Online:** https://martinviretti.github.io/4000-semanas/ (repo: https://github.com/martinviretti/4000-semanas)

App estática, instalable en el celular, con la estética de los videos *4,000 Weeks* (parte 1 y 2).
Sin build ni backend: HTML + CSS + JS. Funciona offline después de la primera visita.

## Recorrido (de arriba hacia abajo)

1. **Video a pantalla completa, apenas se abre la app** (parte 1, `video/weeks_es.mp4` / `weeks_en.mp4`,
   720x1280, ~3,6 MB, según el idioma). Arranca **en silencio**: ningún navegador permite que un video
   arranque solo con sonido, por eso tiene subtítulos quemados y un botón "Activar sonido". Tiene
   "Saltar" y barra de progreso. Al terminar, la página baja sola con un scroll suave. Si la persona
   scrollea a mano durante el video, se pausa y no se la mueve. Si el navegador bloquea el autoplay
   (modo ahorro de batería), aparece un botón de play.
2. **Historia guiada con scroll** (grilla fija, 7 pasos): una vida de 80 años = 4.160 semanas, después una
   persona promedio de 40 años: ya vivió 2.080, duerme 693, trabaja 286 y pasa 326 en el celular
   (3,75 h/día, promedio global de 35–44 años, GWI 2025, derivado). Le quedan 775 semanas libres. Cierra
   con "¿Te animás a hacer la cuenta con tus números?". Cada color aparece de a uno, así el código se
   aprende sin explicación.
3. **Tu cálculo**: edad y horas con botones –/+, resultado inmediato, **colores como botones** (tocás
   "celular" y se iluminan solo esos cuadrados con su total y porcentaje), marcador "Vos hoy" y detalle
   de cada año al tocar una fila. Incluye "¿Y si bajás a…?", guía de tiempo de pantalla y supuestos ajustables.
4. **¿Querés más datos?** (paneles plegables, al final): por edad (vos vs. tu edad, vida típica, etapas),
   antes y ahora (un día por década + gráfico), Argentina, y fuentes y método (todas las fuentes enlazadas).

Extras: header que aparece después del video, barra fija con tu resultado, compartir como imagen
vertical 1080x1920, y "Volver a ver el video".

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
