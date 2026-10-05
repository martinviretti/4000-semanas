# 4.000 semanas — app web (PWA)

**Online:** https://martinviretti.github.io/4000-semanas/ (repo: https://github.com/martinviretti/4000-semanas)

App estática, instalable en el celular, con la estética de los videos *4,000 Weeks* (parte 1 y 2).
Sin build ni backend: HTML + CSS + JS. Funciona offline después de la primera visita.

## Recorrido (de arriba hacia abajo)

1. **Pantalla de inicio**: el cuadrado que late + "Este cuadrado es una semana de tu vida" + botón **Empezar**.
   Ese toque es lo que permite reproducir **con sonido** desde el primer segundo (ningún navegador deja
   arrancar un video con audio sin un toque). "Ver sin el video" saltea directo a la historia.
2. **Video a pantalla completa** con sonido (parte 1, ~3,6 MB, según el idioma), botón Silenciar, Saltar y
   barra de progreso. Al terminar baja solo a la historia.
3. **Historia en formato historias** (como Instagram): barras de progreso arriba, botón **Siguiente**, tocar
   la grilla (derecha avanza, izquierda vuelve), deslizar o usar las flechas del teclado. 7 pasos: 4.160
   semanas, después una persona promedio de 40 años con 2.080 vividas, 693 durmiendo, 286 trabajando, 326 en
   el celular (3,75 h/día, GWI 2025, derivado) y 775 libres. El último paso lleva a "Hacer mi cálculo".
4. **Tu cálculo**: preguntas directas ("¿Cuántos años tenés?", "¿Cuántas horas por día…?") con –/+ y
   botones de horas típicas. **Resultado en una frase**: "Si seguís así, vas a pasar 435 semanas mirando el
   celular · 8 años y 4 meses". Debajo, la **barra de tu vida** con porcentajes (vivido, dormir, trabajo,
   celular, libre) y la comparación con la gente de tu edad. La grilla tiene dos vistas: **Por cantidad**
   (por defecto: bloques contiguos por color; tocar un cuadrado dice de qué es) y **Año por año** (tocar
   una fila muestra ese año). Los colores se tocan para resaltarlos. La barra fija muestra tu número
   siempre que la tarjeta del resultado no esté en pantalla.
5. **¿Querés más datos?** al final, en paneles: por edad, antes y ahora, Argentina, fuentes y método.

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

## Auditoría UX (v6)

Un agente UX/UI hizo una auditoría "desde afuera" (celular, tablet y escritorio) y se aplicó casi todo:

- **Datos de ejemplo marcados**: 30 años y 4 h aparecen en gris con "Ejemplo… Poné los tuyos". La barra
  fija y el duelo recién aparecen cuando la persona pone sus datos.
- **Link compartido**: "A Martín el celular le lleva 456 semanas. ¿Y a vos?" en el inicio. La cuenta no se
  precarga con los datos ajenos; cuando ponés los tuyos aparece el duelo "vos vs. Martín" (`?edad&h&n`).
- **Un solo escenario en la grilla**: "¿Y si bajás a…?" arranca en tus horas (0 recuperadas). Los ▢ y la
  ficha "Recuperás N" aparecen recién cuando movés la barra.
- **Una sola base**: la barra muestra solo lo que te queda; "1 de cada 6 semanas que te quedan"; horas como
  "3 h 45 min" y semanas como "8 años y 4 meses" en toda la app.
- **Grilla solo "año por año"** (se sacó la vista por bloques, que con el eje de edades confundía).
- **Bloque de colores rediseñado**: "Ya viviste N" aparte, "TE QUEDAN N · TOCÁ UN COLOR", 4 fichas iguales
  (celular destacado), una sola línea de detalle y una demo automática de 1,2 s la primera vez.
- **Equivalencias que se sienten**: veranos, Mundiales y domingos que te quedan, y cuántos se lleva el celular.
- **Video**: controles arriba (progreso, sonido solo con ícono, "Saltar ›"), pantalla de fin con
  "Ir a mi cuenta" / "Volver a ver", y quien vuelve arranca con "Ir a mi cuenta".
- **Textos podados** en toda la app; un nombre por color (vivido, dormir, trabajo, celular, libre); rojo solo
  para el celular; etiquetas "cálculo propio" / "vía medio" en lugar de "derivado" / "verificar".
- **Accesibilidad**: áreas táctiles de 44 px, foco visible, `aria-live` en el resultado, resumen de texto
  de la grilla para lectores de pantalla y etiquetas claras en –/+.

No se aplicó (decisión consciente): cambiar el naranja de trabajo a violeta, para no romper la coherencia con
los videos; y usar una persona de 30 años en la historia, porque se mantiene la de 40 que se pidió.

## Quien vuelve entra directo a su cuenta

- La app guarda en el navegador (`localStorage.seenVideo`) si la persona **ya vio la introducción**:
  el video llegó al final o al 70 %, o terminó la historia. Tocar "Saltar el video" apenas entra **no** cuenta.
- Si ya la vio, al abrir no aparecen el video ni la historia: entra directo a **Hacé tu cuenta**, con un botón
  "Ver la introducción de nuevo" arriba (y "Volver a ver el video" al final). Si llega por un link compartido,
  el aviso "A X el celular le lleva N semanas" aparece dentro de la cuenta.

## Publicar una versión nueva

1. Subir `VERSION` en `sw.js` (por ejemplo `semanas-v8`) y el `?v=` de `styles.css`, `data.js` y `app.js` en
   `index.html` y en la lista `FILES` de `sw.js`. Evita que el celular mezcle archivos nuevos y viejos
   (GitHub Pages cachea unos 10 minutos).
2. `git commit` y `git push`: GitHub Pages publica solo en 1–2 minutos.
