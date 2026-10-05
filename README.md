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
