/* 4.000 semanas — app. Vanilla JS, sin build. Datos en data.js. */
(() => {
  "use strict";
  const D = window.APP_DATA;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
  const SITE = "martinviretti.github.io/4000-semanas";

  // ───────────────── textos ─────────────────
  const T = {
    es: {
      brand: "4.000 semanas", install: "Instalar", tab1: "Tu vida", tab2: "Por edad", tab3: "Antes y ahora", step: "Paso",
      introTitle: "Una vida de 80 años son 4.160 semanas.",
      introLead: "En esta app, cada cuadrado es una semana de tu vida. Mirá el video de 47 segundos para entender la idea.",
      key1: "1 cuadrado = 1 semana", key2: "1 fila de 52 = 1 año", key3: "80 filas = una vida",
      play: "Ver el video · 47 s", playAgain: "Ver el video otra vez · 47 s", skip: "Saltar e ir a mis números ↓",
      s1title: "¿Cuántas semanas se lleva tu celular?", age: "Tu edad", ageUnit: "años", hours: "Celular por día", hoursUnit: "horas",
      guideQ: "¿No sabés cuántas horas usás? Miralo en tu celular",
      guideNote: "Los nombres de los menús pueden variar según la marca y la versión. Usá el promedio diario de la última semana.",
      weeksPhone: "semanas en el celular",
      lifeExplain: "Esta es tu vida: cada fila es un año. Arriba, en gris, lo que ya viviste. Desde tu fila para abajo, en qué se van las semanas que te quedan.",
      tapRow: "Tocá una fila para ver ese año en detalle.",
      lifeOrder: "En cada fila los colores están agrupados (no en orden de calendario): muestran cuántas de las 52 semanas de ese año van a cada cosa.",
      whatif: "¿Y si bajás a…", recover1: "Recuperás", recover2: "semanas", recoverNote: "Las recuperadas se ven en la grilla como cuadrados rojos huecos.",
      share: "Compartir mi resultado", shareShort: "Compartir",
      adv: "Ajustar supuestos (sueño, trabajo, esperanza de vida)", life: "Esperanza de vida", sleep: "Horas de sueño",
      work: "Horas de trabajo / semana", retire: "Te jubilás a los",
      advNote: "Igual que en el video: dormir = horas de sueño sobre lo que te queda; trabajo = 48 semanas por año hasta la jubilación.",
      next1: "¿Es mucho o poco? Compará con la gente de cada edad", s2title: "¿Y la gente de cada edad?",
      dataExplain: "Una vida de 80 años donde cada edad usa el celular lo que hoy usa la gente de esa edad. Lo rojo de cada fila son las semanas de ese año que se van en la pantalla.",
      stagesH: "Etapa por etapa · tocá una para verla en la grilla", arTitle: "Argentina",
      arNote: "No hay datos confiables de horas por edad para Argentina ni para Latinoamérica: la encuesta TIC del INDEC mide si la gente usa internet, no cuántas horas.",
      cavTitle: "Cómo leer estos datos", next2: "¿Siempre fue así? Mirá 50 años de pantallas", s3title: "¿Siempre fue así?",
      s3lead: "Un día de una persona en EE.UU., cada 10 años. Mirá cuándo aparece el rojo.", keyHour: "1 cuadrado = 1 hora", keyDay: "24 cuadrados = 1 día",
      erasNote: "Hasta 2005 solo hay mediciones de TV por hogar (rayado: horas con la tele prendida en la casa, aunque nadie la mire). Desde 2005, por persona (liso). En 2005 se ven las dos para comparar.",
      chartQ: "Ver todas las series en un gráfico", next3: "Volver a mis números",
      footA: "Cada número enlaza a su fuente. \"Derivado\" = cuenta propia sobre la fuente; \"verificar\" = viene de un medio que cita la fuente original.",
      footB: "Hecho a partir de los videos 4.000 semanas · Parte 1 y 2.",
      // dinámicos
      lived: "ya vividas", sleepL: "dormir", workL: "trabajo", phoneL: "celular", freeL: "libres", recoveredL: "recuperadas",
      lifePhone: "celular (según su edad)", lifeNoData: "sin dato confiable", lifeRest: "resto del año",
      moreThan: (n) => `= más de ${n} ${n === 1 ? "año" : "años"} de tu vida`, about: (n) => `= ${n} ${n === 1 ? "año" : "años"} de tu vida`,
      months: (n) => `≈ ${n} ${n === 1 ? "mes" : "meses"}`, yearsShort: (y) => `(${y} años)`,
      you: (a) => `Vos hoy · ${a}`, youShort: (a) => `Vos · ${a}`,
      rowLived: (r) => `<b>A los ${r} años</b>: ya lo viviste (52 semanas, en gris).`,
      rowLife: (r, isNow, s, w, p, rec, f) => `<b>${isNow ? `Este año (${r})` : `A los ${r} años`}</b>: ${s} semanas durmiendo · ${w} trabajando · <b class="red">${p} en el celular</b>${rec ? ` (+${rec} que recuperás)` : ""} · ${f} libres.`,
      rowData: (r, n, h, m) => `<b>A los ${r} años</b>: ~<b class="red">${n} de las 52 semanas</b> del año se van en el celular (${h} h por día · ${m}).`,
      rowNoData: (r) => `<b>A los ${r} años</b>: no hay un dato confiable de uso del celular para esta edad.`,
      overflow: "Con estos supuestos no te queda tiempo libre: revisá sueño y trabajo.",
      shareText: (h, w, y) => `Si sigo usando el celular ${h} h por día, se lleva ${w} semanas de mi vida (≈${y} años). ¿Y vos?`,
      shareKicker: "MI VIDA EN SEMANAS", shareSub: (h) => `con ${h} h de celular por día`,
      shareYears: (y) => (y >= 1 ? `= ${Math.abs(y - Math.round(y)) < 0.02 ? "" : "más de "}${Math.abs(y - Math.round(y)) < 0.02 ? Math.round(y) : Math.floor(y)} años de mi vida` : `≈ ${Math.round(y * 12)} meses de mi vida`), shareNow: (a) => `Hoy · ${a}`, shareCta: "¿Y vos? Calculalo en",
      copied: "Link copiado", downloaded: "Imagen descargada · link copiado", iosInstall: "En iPhone: tocá Compartir y después \"Agregar a inicio\".",
      vsYou: "Vos", vsAge: (r) => `Gente de tu edad (${r})`, hDay: "h por día",
      vsMore: "Usás más que el promedio de tu edad.", vsLess: "Usás menos que el promedio de tu edad.", vsSame: "Estás cerca del promedio de tu edad.",
      vsNone: "Para tu edad no hay un dato confiable de uso del celular.",
      stage: (w) => `= ${w} semanas de esta etapa en el celular`, stagePartial: " (dato parcial)", seeSources: "Ver fuentes y detalles",
      groups: { kids: "Niños", tweens: "Preadolescentes", teens: "Adolescentes", young: "Adultos jóvenes", adults: "Adultos", seniors: "Adultos mayores" },
      yearsOld: (a, b) => `${a}–${b} años`,
      say: {
        kids: (f) => [`Ven <b>~${f(0.57)} h</b> por día de videos en celular o tablet`, `Pantallas en total (TV, tablet, celular): ~${f(2.45)} h por día.`],
        tweens: (f) => ["No hay un dato confiable de celular a esta edad", `Pantallas en total (entretenimiento): ~${f(5.55)} h por día, medido en 2021.`],
        teens: (f) => [`Pasan <b>~${f(4.5)} h</b> por día en el smartphone`, `Medido en el teléfono (mediana, muestra chica). Pantallas en total: ~${f(8.65)} h (2021).`],
        young: (f) => [`Pasan <b>~${f(4.18)} a ${f(4.5)} h</b> por día con internet en el celular`, `Smartphone medido en Reino Unido: ${f(4.53)} a ${f(5.08)} h.`],
        adults: (f) => [`Pasan <b>~${f(2.84)} a ${f(3.75)} h</b> por día con internet en el celular`, `Baja con la edad: ${f(3.75)} h a los 35–44, ${f(2.84)} h a los 55–64.`],
        seniors: (f) => [`Pasan <b>~${f(1.39)} h</b> por día con internet en el celular`, `La TV sigue arriba: ~${f(4.28)} h por día.`],
      },
      metric: {
        phoneVideo: "solo video en celular/tablet", screenTotal: "pantalla total", screenEnt: "pantalla total (entretenimiento)",
        smartphone: "smartphone", smartphoneMeasured: "smartphone medido en el teléfono", mobileInternet: "internet en el celular",
        internetAny: "internet, cualquier dispositivo", tv: "TV", social: "redes sociales",
      },
      notes: { pandemic: "Medido en 2021, en pandemia: probablemente infla el uso.", smallSample: "Muestra chica (~200 chicos con Android), no representativa.", noPhoneData: "Sin dato confiable de celular para esta edad." },
      verif: { d: "derivado", s: "verificar" },
      lifeTotal: (y) => `= ${y} años de una vida de 80, sumando todas las etapas`,
      caveats: [
        "No existe un dato oficial de \"horas de celular por edad\": ningún organismo estadístico lo mide en horas. Cada etapa usa la mejor medición disponible y su métrica está indicada.",
        "La \"vida típica\" es ilustrativa: junta datos de distintas edades medidos hoy, no sigue a una misma persona en el tiempo.",
        "Internet en el celular (adultos) = horas de internet × porcentaje hecho desde el celular (GWI 2024): es un derivado autodeclarado de usuarios de internet.",
        "Chicos y adolescentes: datos de EE.UU.; adultos: promedios globales; smartphone medido: Reino Unido (Ofcom).",
      ],
      ago: (n) => (n === 0 ? "hoy" : `hace ${n} años`),
      types: { tvHome: "TV prendida en la casa", tvPerson: "TV por persona", phone: "Celular por persona" },
      noPhone: "Celular: todavía no había smartphones (2007).", basicPhone: "Celular: sin smartphones ni mediciones de uso.", srcShort: "fuente",
      phoneJump: (a, b) => `En 10 años el celular pasó de ${a} h a ${b} h por día.`,
      legendEras: [["hatch", "TV prendida en la casa (por hogar)"], ["#ffffff", "TV por persona"], ["#ef4444", "Celular por persona"]],
      series: { tvHome: "TV por hogar · Nielsen, EE.UU.", tvPerson: "TV por persona · ATUS, EE.UU.", phone: "Celular por persona · eMarketer, EE.UU.", internet: "Internet (usuarios) · GWI, global" },
      chartTip: "Tocá un punto para ver el dato y su fuente.", smartphoneYear: "smartphone",
      navCalc: "Mi cálculo", navMore: "Más datos", soundOn: "Activar sonido", soundOff: "Silenciar", skip: "Saltar",
      key1: "= 1 semana", key2: "1 fila = 1 año", scrollHint: "Deslizá para seguir ↓", ctaCalc: "Hacer mi cálculo",
      s1kicker: "Tu vida en semanas", s1title: "¿Y la tuya? Hacé la cuenta.", chipsH: "Tocá un color para verlo en tu vida:",
      moreKicker: "Para los curiosos", moreTitle: "¿Querés más datos?", moreLead: "Todo lo que hay detrás de los números, por tema. Abrí el que te interese.",
      tAge: "Por edad", tAgeSub: "Cuánto usa el celular cada generación", tHist: "Antes y ahora", tHistSub: "50 años de pantallas, década por década",
      tAr: "Argentina", tArSub: "Lo que se sabe (y lo que no)", tSrc: "Fuentes y método", tSrcSub: "De dónde sale cada número y cómo leerlo",
      srcListH: "Fuentes", replay: "Volver a ver el video", chartQ: "Todas las series en un gráfico",
      s3lead: "Un día de una persona en EE.UU., cada 10 años. Cada cuadrado es 1 hora del día. Mirá cuándo aparece el rojo.",
      advNote: "Dormir = horas de sueño sobre lo que te queda; trabajo = 48 semanas por año hasta la jubilación.",
      focusNone: "Sin selección: ves todos los colores juntos.",
      focus: {
        lived: (w) => `<b>${w}</b> semanas que ya viviste.`,
        sleep: (w, y) => `<b style="color:#3b82f6">${w}</b> semanas durmiendo: ${y} años de lo que te queda.`,
        work: (w, y) => `<b style="color:#f97316">${w}</b> semanas trabajando: ${y} años.`,
        phone: (w, y, p) => `<b class="red">${w}</b> semanas en el celular: ${y} años, el ${p}% de lo que te queda.`,
        free: (w, y) => `<b>${w}</b> semanas libres: ${y} años. Es lo que de verdad te queda.`,
      },
      story: [
        { k: "Una vida de 80 años", u: "semanas", t: "Cada cuadrado es una semana. Cada fila, un año. Así entra una vida entera." },
        { k: "Una persona promedio de 40 años", u: "semanas ya vividas", t: "La mitad de los cuadrados ya pasó." },
        { k: "Dormir", u: "semanas durmiendo", t: "8 horas por día: un tercio de lo que le queda." },
        { k: "Trabajar", u: "semanas trabajando", t: "40 horas por semana, hasta jubilarse a los 65." },
        { k: "El celular", u: "semanas en el celular", t: (f, y) => `${f(3.75)} horas por día, el promedio de su edad. Son más de ${y} años de su vida.`, src: "Internet en el celular, 35–44 años · DataReportal / GWI 2025 (derivado)" },
        { k: "Lo que le queda", u: "semanas libres", t: "Este es el tiempo libre de verdad. Todo lo demás ya tiene dueño." },
        { k: "Tu turno", u: "", t: "¿Te animás a hacer la cuenta con tus números?", cta: true },
      ],
      steps: {
        ios: ["Abrí <b>Ajustes</b>.", "Tocá <b>Tiempo en pantalla</b>.", "Tocá <b>Ver toda la actividad de apps y sitios web</b>.", "Elegí <b>Semana</b>: arriba aparece tu <b>promedio diario</b>.", "Si está desactivado, activalo y volvé en unos días."],
        android: ["Abrí <b>Ajustes</b>.", "Entrá a <b>Bienestar digital y controles parentales</b>.", "El gráfico muestra el tiempo de hoy: tocalo para ver el detalle por día.", "Mirá los últimos 7 días y sacá un promedio."],
        samsung: ["Abrí <b>Ajustes</b>.", "Entrá a <b>Bienestar digital y control parental</b>.", "Tocá el gráfico de <b>tiempo de pantalla</b>.", "Pasá a la vista <b>semanal</b> para ver el promedio por día."],
        xiaomi: ["Abrí <b>Ajustes</b>.", "Entrá a <b>Bienestar digital y controles parentales</b> (en algunos modelos se llama <b>Tiempo de pantalla</b>).", "Tocá el gráfico para ver el detalle por día.", "Mirá los últimos 7 días y sacá un promedio."],
      },
    },
    en: {
      brand: "4,000 weeks", install: "Install", tab1: "Your life", tab2: "By age", tab3: "Then & now", step: "Step",
      introTitle: "An 80-year life is 4,160 weeks.",
      introLead: "In this app, each square is one week of your life. Watch the 47-second video to get the idea.",
      key1: "1 square = 1 week", key2: "1 row of 52 = 1 year", key3: "80 rows = a life",
      play: "Watch the video · 47 s", playAgain: "Watch the video again · 47 s", skip: "Skip to my numbers ↓",
      s1title: "How many weeks does your phone take?", age: "Your age", ageUnit: "years", hours: "Phone per day", hoursUnit: "hours",
      guideQ: "Not sure how many hours you use? Check your phone",
      guideNote: "Menu names vary by brand and OS version. Use the daily average for the last week.",
      weeksPhone: "weeks on your phone",
      lifeExplain: "This is your life: each row is a year. At the top, in gray, what you've already lived. From your row down, where the weeks you have left go.",
      tapRow: "Tap a row to see that year in detail.",
      lifeOrder: "In each row the colors are grouped (not in calendar order): they show how many of that year's 52 weeks go to each thing.",
      whatif: "What if you cut down to…", recover1: "You get back", recover2: "weeks", recoverNote: "Recovered weeks show up in the grid as hollow red squares.",
      share: "Share my result", shareShort: "Share",
      adv: "Adjust assumptions (sleep, work, life expectancy)", life: "Life expectancy", sleep: "Hours of sleep",
      work: "Work hours / week", retire: "You retire at",
      advNote: "Same as the video: sleep = sleep hours over what's left; work = 48 weeks a year until retirement.",
      next1: "Is that a lot? Compare with people of every age", s2title: "What about people of each age?",
      dataExplain: "An 80-year life where each age uses the phone as much as people that age do today. The red in each row is the weeks of that year spent on the screen.",
      stagesH: "Stage by stage · tap one to see it in the grid", arTitle: "Argentina",
      arNote: "There is no reliable hours-by-age data for Argentina or Latin America: INDEC's ICT survey measures whether people use the internet, not for how long.",
      cavTitle: "How to read this data", next2: "Was it always like this? See 50 years of screens", s3title: "Was it always like this?",
      s3lead: "One day of a person in the US, every 10 years. Watch when the red shows up.", keyHour: "1 square = 1 hour", keyDay: "24 squares = 1 day",
      erasNote: "Until 2005 there are only TV-per-household measures (striped: hours the TV is on at home, even if nobody watches). From 2005, per person (solid). 2005 shows both for comparison.",
      chartQ: "See every series in one chart", next3: "Back to my numbers",
      footA: "Every number links to its source. \"Derived\" = our own calculation on the source; \"to verify\" = comes from an outlet citing the original source.",
      footB: "Built from the videos 4,000 Weeks · Part 1 and 2.",
      lived: "already lived", sleepL: "sleep", workL: "work", phoneL: "phone", freeL: "free", recoveredL: "recovered",
      lifePhone: "phone (for that age)", lifeNoData: "no reliable data", lifeRest: "rest of the year",
      moreThan: (n) => `= more than ${n} ${n === 1 ? "year" : "years"} of your life`, about: (n) => `= ${n} ${n === 1 ? "year" : "years"} of your life`,
      months: (n) => `≈ ${n} ${n === 1 ? "month" : "months"}`, yearsShort: (y) => `(${y} years)`,
      you: (a) => `You today · ${a}`, youShort: (a) => `You · ${a}`,
      rowLived: (r) => `<b>At ${r}</b>: already lived (52 weeks, in gray).`,
      rowLife: (r, isNow, s, w, p, rec, f) => `<b>${isNow ? `This year (${r})` : `At ${r}`}</b>: ${s} weeks sleeping · ${w} working · <b class="red">${p} on the phone</b>${rec ? ` (+${rec} you get back)` : ""} · ${f} free.`,
      rowData: (r, n, h, m) => `<b>At ${r}</b>: ~<b class="red">${n} of the year's 52 weeks</b> go to the phone (${h} h a day · ${m}).`,
      rowNoData: (r) => `<b>At ${r}</b>: there's no reliable phone-use data for this age.`,
      overflow: "With these assumptions there's no free time left: check sleep and work.",
      shareText: (h, w, y) => `If I keep using my phone ${h} h a day, it takes ${w} weeks of my life (≈${y} years). What about you?`,
      shareKicker: "MY LIFE IN WEEKS", shareSub: (h) => `at ${h} h of phone a day`,
      shareYears: (y) => (y >= 1 ? `= ${Math.abs(y - Math.round(y)) < 0.02 ? "" : "more than "}${Math.abs(y - Math.round(y)) < 0.02 ? Math.round(y) : Math.floor(y)} years of my life` : `≈ ${Math.round(y * 12)} months of my life`), shareNow: (a) => `Today · ${a}`, shareCta: "What about you? Find out at",
      copied: "Link copied", downloaded: "Image downloaded · link copied", iosInstall: "On iPhone: tap Share, then \"Add to Home Screen\".",
      vsYou: "You", vsAge: (r) => `People your age (${r})`, hDay: "h a day",
      vsMore: "You use more than the average for your age.", vsLess: "You use less than the average for your age.", vsSame: "You're close to the average for your age.",
      vsNone: "There's no reliable phone-use figure for your age.",
      stage: (w) => `= ${w} weeks of this stage on the phone`, stagePartial: " (partial data)", seeSources: "See sources and details",
      groups: { kids: "Children", tweens: "Tweens", teens: "Teens", young: "Young adults", adults: "Adults", seniors: "Older adults" },
      yearsOld: (a, b) => `ages ${a}–${b}`,
      say: {
        kids: (f) => [`Watch <b>~${f(0.57)} h</b> a day of video on a phone or tablet`, `All screens (TV, tablet, phone): ~${f(2.45)} h a day.`],
        tweens: (f) => ["No reliable phone data at this age", `All entertainment screens: ~${f(5.55)} h a day, measured in 2021.`],
        teens: (f) => [`Spend <b>~${f(4.5)} h</b> a day on their smartphone`, `Measured on-device (median, small sample). All screens: ~${f(8.65)} h (2021).`],
        young: (f) => [`Spend <b>~${f(4.18)} to ${f(4.5)} h</b> a day on mobile internet`, `Smartphone measured in the UK: ${f(4.53)} to ${f(5.08)} h.`],
        adults: (f) => [`Spend <b>~${f(2.84)} to ${f(3.75)} h</b> a day on mobile internet`, `It drops with age: ${f(3.75)} h at 35–44, ${f(2.84)} h at 55–64.`],
        seniors: (f) => [`Spend <b>~${f(1.39)} h</b> a day on mobile internet`, `TV still leads: ~${f(4.28)} h a day.`],
      },
      metric: {
        phoneVideo: "video on phone/tablet only", screenTotal: "total screen time", screenEnt: "total entertainment screen time",
        smartphone: "smartphone", smartphoneMeasured: "smartphone, measured on-device", mobileInternet: "mobile internet",
        internetAny: "internet, any device", tv: "TV", social: "social media",
      },
      notes: { pandemic: "Measured in 2021, during the pandemic: likely inflated.", smallSample: "Small sample (~200 kids on Android), not representative.", noPhoneData: "No reliable phone data for this age." },
      verif: { d: "derived", s: "to verify" },
      lifeTotal: (y) => `= ${y} years of an 80-year life, adding up every stage`,
      caveats: [
        "There's no official \"phone hours by age\" figure: no statistics office measures it in hours. Each stage uses the best available measure, and its metric is labelled.",
        "The \"typical life\" is illustrative: it combines different ages measured today; it doesn't follow one person over time.",
        "Mobile internet (adults) = internet hours × share done on mobile (GWI 2024): a self-reported derivation for internet users.",
        "Kids and teens: US data; adults: global averages; measured smartphone: UK (Ofcom).",
      ],
      ago: (n) => (n === 0 ? "today" : `${n} years ago`),
      types: { tvHome: "TV on at home", tvPerson: "TV per person", phone: "Phone per person" },
      noPhone: "Phone: no smartphones yet (2007).", basicPhone: "Phone: no smartphones, no usage data.", srcShort: "source",
      phoneJump: (a, b) => `In 10 years, phone use went from ${a} h to ${b} h a day.`,
      legendEras: [["hatch", "TV on at home (per household)"], ["#ffffff", "TV per person"], ["#ef4444", "Phone per person"]],
      series: { tvHome: "TV per household · Nielsen, US", tvPerson: "TV per person · ATUS, US", phone: "Phone per person · eMarketer, US", internet: "Internet (users) · GWI, global" },
      chartTip: "Tap a point to see the figure and its source.", smartphoneYear: "smartphone",
      navCalc: "My numbers", navMore: "More data", soundOn: "Turn sound on", soundOff: "Mute", skip: "Skip",
      key1: "= 1 week", key2: "1 row = 1 year", scrollHint: "Scroll to continue ↓", ctaCalc: "Run my numbers",
      s1kicker: "Your life in weeks", s1title: "What about yours? Do the math.", chipsH: "Tap a color to see it in your life:",
      moreKicker: "For the curious", moreTitle: "Want more data?", moreLead: "Everything behind the numbers, by topic. Open whichever you like.",
      tAge: "By age", tAgeSub: "How much each generation uses the phone", tHist: "Then & now", tHistSub: "50 years of screens, decade by decade",
      tAr: "Argentina", tArSub: "What we know (and what we don't)", tSrc: "Sources & method", tSrcSub: "Where each number comes from and how to read it",
      srcListH: "Sources", replay: "Watch the video again", chartQ: "Every series in one chart",
      s3lead: "One day of a person in the US, every 10 years. Each square is 1 hour of the day. Watch when the red shows up.",
      advNote: "Sleep = sleep hours over what's left; work = 48 weeks a year until retirement.",
      focusNone: "No selection: you see every color together.",
      focus: {
        lived: (w) => `<b>${w}</b> weeks you've already lived.`,
        sleep: (w, y) => `<b style="color:#3b82f6">${w}</b> weeks asleep: ${y} years of what's left.`,
        work: (w, y) => `<b style="color:#f97316">${w}</b> weeks at work: ${y} years.`,
        phone: (w, y, p) => `<b class="red">${w}</b> weeks on the phone: ${y} years, ${p}% of what's left.`,
        free: (w, y) => `<b>${w}</b> free weeks: ${y} years. That's what you truly have left.`,
      },
      story: [
        { k: "An 80-year life", u: "weeks", t: "Each square is one week. Each row, one year. A whole life fits here." },
        { k: "An average 40-year-old", u: "weeks already lived", t: "Half of the squares are already gone." },
        { k: "Sleep", u: "weeks asleep", t: "8 hours a day: a third of what's left." },
        { k: "Work", u: "weeks at work", t: "40 hours a week, until retiring at 65." },
        { k: "The phone", u: "weeks on the phone", t: (f, y) => `${f(3.75)} hours a day, the average for their age. That's more than ${y} years of their life.`, src: "Mobile internet, ages 35–44 · DataReportal / GWI 2025 (derived)" },
        { k: "What's left", u: "free weeks", t: "This is the truly free time. Everything else is already spoken for." },
        { k: "Your turn", u: "", t: "Want to run the numbers on your own life?", cta: true },
      ],
      steps: {
        ios: ["Open <b>Settings</b>.", "Tap <b>Screen Time</b>.", "Tap <b>See All App &amp; Website Activity</b>.", "Choose <b>Week</b>: your <b>daily average</b> is at the top.", "If it's off, turn it on and come back in a few days."],
        android: ["Open <b>Settings</b>.", "Go to <b>Digital Wellbeing &amp; parental controls</b>.", "The chart shows today's time: tap it for the daily breakdown.", "Look at the last 7 days and average them."],
        samsung: ["Open <b>Settings</b>.", "Go to <b>Digital Wellbeing and parental controls</b>.", "Tap the <b>screen time</b> chart.", "Switch to the <b>weekly</b> view to see your daily average."],
        xiaomi: ["Open <b>Settings</b>.", "Go to <b>Digital Wellbeing &amp; parental controls</b> (on some models it's called <b>Screen time</b>).", "Tap the chart for the daily breakdown.", "Look at the last 7 days and average them."],
      },
    },
  };

  let LANG = localStorage.getItem("lang") || ((navigator.language || "es").toLowerCase().startsWith("es") ? "es" : "en");
  const t = () => T[LANG];
  const loc = () => (LANG === "es" ? "es-AR" : "en-US");
  const fmtInt = (n) => Math.round(n).toLocaleString(loc());
  const fmtDec = (n, d = 1) => n.toLocaleString(loc(), { minimumFractionDigits: d, maximumFractionDigits: d });
  const fmtH = (h) => h.toLocaleString(loc(), { minimumFractionDigits: 0, maximumFractionDigits: 2 });

  // ───────────────── grilla genérica ─────────────────
  const COL = { lived: "#3a3a3a", sleep: "#3b82f6", work: "#f97316", phone: "#ef4444", free: "#ffffff" };
  const COLS = 52;
  const MARGIN = 26;

  /* Dibuja una grilla de semanas. cellAt(r, c) -> {fill, alpha, hollow, hatch}. Devuelve la geometría. */
  function drawWeeks(canvas, rows, cellAt, reveal = 1, selRow = -1) {
    const dpr = window.devicePixelRatio || 1;
    const w = canvas.clientWidth || 320;
    const pitch = (w - MARGIN) / COLS;
    const cell = pitch * 0.78;
    const h = Math.ceil(rows * pitch);
    if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) {
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.height = h + "px";
    }
    const g = canvas.getContext("2d");
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    g.clearRect(0, 0, w, h);
    g.font = "600 9px Inter, sans-serif";
    g.textBaseline = "middle";
    for (let r = 0; r < rows; r += 10) {
      g.fillStyle = "#777";
      g.fillText(String(r), 0, r * pitch + cell / 2);
    }
    const shown = Math.floor(rows * COLS * reveal);
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < COLS; c++) {
        const i = r * COLS + c;
        const x = MARGIN + c * pitch, y = r * pitch;
        const s = cellAt(r, c);
        g.globalAlpha = (i < shown ? 1 : 0.07) * (s.alpha ?? 1);
        if (s.hollow) {
          g.strokeStyle = s.fill;
          g.lineWidth = Math.max(1, cell * 0.22);
          g.strokeRect(x + g.lineWidth / 2, y + g.lineWidth / 2, cell - g.lineWidth, cell - g.lineWidth);
        } else if (s.hatch) {
          g.fillStyle = "#1c1c1c";
          g.fillRect(x, y, cell, cell);
          g.strokeStyle = "#5a5a5a";
          g.lineWidth = 1;
          g.beginPath();
          g.moveTo(x, y + cell);
          g.lineTo(x + cell, y);
          g.stroke();
        } else {
          g.fillStyle = s.fill;
          g.fillRect(x, y, cell, cell);
        }
      }
    }
    g.globalAlpha = 1;
    if (selRow >= 0 && selRow < rows) {
      g.strokeStyle = "#ffffff";
      g.lineWidth = 1.5;
      g.strokeRect(MARGIN - 3, selRow * pitch - 2, COLS * pitch + 3, cell + 4);
    }
    return { pitch, cell, w, h };
  }

  /* marcador "vos estás acá" (HTML encima del canvas, late con CSS) */
  function placeYou(wrap, geo, row, label) {
    let you = $(".you", wrap), tag = $(".you-tag", wrap);
    if (!you) {
      you = document.createElement("span");
      you.className = "you";
      tag = document.createElement("span");
      tag.className = "you-tag";
      wrap.append(you, tag);
    }
    const x = MARGIN, y = row * geo.pitch;
    Object.assign(you.style, { left: x + "px", top: y + "px", width: geo.cell + "px", height: geo.cell + "px" });
    tag.textContent = label;
    Object.assign(tag.style, { left: x + geo.cell + 9 + "px", top: y + geo.cell / 2 + "px" });
  }

  const rowFromEvent = (canvas, e, rows) => {
    const r = canvas.getBoundingClientRect();
    const pitch = (r.width - MARGIN) / COLS;
    return clamp(Math.floor((e.clientY - r.top) / pitch), 0, rows - 1);
  };

  // cascada al entrar en pantalla (una vez por grilla)
  const revealed = { life: 0, data: 0 };
  function cascade(key, draw) {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || revealed[key] >= 1) { revealed[key] = 1; return draw(1); }
    const t0 = performance.now(), dur = 1100;
    const step = (now) => {
      revealed[key] = clamp((now - t0) / dur, 0, 1);
      draw(1 - Math.pow(1 - revealed[key], 3));
      if (revealed[key] < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  /* reparte un total entre filas con redondeo acumulado (los totales dan exactos) */
  const alloc = (total, rows) => Array.from({ length: rows }, (_, k) => Math.round((total * (k + 1)) / rows) - Math.round((total * k) / rows));

  // ───────────────── PASO 1: TU VIDA ─────────────────
  const el = {
    age: $("#age"), hours: $("#hours"), hoursRange: $("#hours-range"), target: $("#target"),
    life: $("#life"), sleep: $("#sleep"), work: $("#work"), retire: $("#retire"),
  };
  let model = null;
  let selLife = -1, selData = -1;

  function compute() {
    const L = clamp(parseInt(el.life.value) || 80, 50, 100);
    const A = clamp(parseInt(el.age.value) || 0, 0, L - 1);
    const H = clamp(parseFloat(el.hours.value) || 0, 0, 24);
    return computeModel({
      L, A, H,
      S: clamp(parseFloat(el.sleep.value) || 0, 0, 16),
      W: clamp(parseFloat(el.work.value) || 0, 0, 100),
      R: clamp(parseInt(el.retire.value) || 65, A, L),
      H2: clamp(parseFloat(el.target.value) || 0, 0, H),
    });
  }

  /* reparte las semanas que quedan: por fila, dormir · trabajo · celular (lo recuperable al final) · libre */
  function computeModel({ L, A, H, S, W, R, H2 }) {
    const rowsLeft = L - A;
    const remaining = rowsLeft * 52;
    const sleep = Math.round((remaining * S) / 24);
    const work = A < R ? Math.round(((R - A) * 48 * W) / 168) : 0;
    const phone = Math.round((rowsLeft * 365 * H) / 168);
    const phone2 = Math.round((rowsLeft * 365 * H2) / 168);
    const free = Math.max(0, remaining - sleep - work - phone);
    const overflow = remaining - sleep - work - phone < 0;
    const sRow = alloc(sleep, rowsLeft), wRow = alloc(work, Math.max(1, R - A)), pRow = alloc(phone, rowsLeft), p2Row = alloc(phone2, rowsLeft);
    const cat = new Uint8Array(L * COLS); // 1 vivida 2 dormir 3 trabajo 4 celular 6 recuperada 5 libre
    const rowCount = [];
    for (let r = 0; r < L; r++) {
      for (let c = 0; c < COLS; c++) cat[r * COLS + c] = r < A ? 1 : 5;
      if (r < A) continue;
      const k = r - A;
      const s = Math.min(52, sRow[k]), w = r < R ? Math.min(52 - s, wRow[k] || 0) : 0;
      const p = Math.min(52 - s - w, pRow[k]), p2 = Math.min(p, p2Row[k]);
      let c = 0;
      for (let j = 0; j < s; j++) cat[r * COLS + c++] = 2;
      for (let j = 0; j < w; j++) cat[r * COLS + c++] = 3;
      for (let j = 0; j < p; j++) cat[r * COLS + c++] = j < p2 ? 4 : 6;
      rowCount[r] = { s, w, p: p2, rec: p - p2, f: 52 - s - w - p };
    }
    return { L, A, H, H2, sleep, work, phone, phone2, free, overflow, lived: A * 52, cat, rowCount, recovered: phone - phone2 };
  }

  function yearsPhrase(weeks) {
    const y = weeks / 52;
    if (y >= 1) return Math.abs(y - Math.round(y)) < 0.02 ? t().about(Math.round(y)) : t().moreThan(Math.floor(y));
    return t().months(Math.round((weeks * 7) / 30.44));
  }
  const lifelineAt = (age) => D.lifeline.find((s) => age >= s.from && age <= s.to) || null;

  function syncRanges() {
    $$('input[type="range"]').forEach((r) => r.style.setProperty("--p", ((r.value - r.min) / (r.max - r.min || 1)) * 100 + "%"));
  }

  let lifeGeo = null;
  let focusCat = null; // color tocado en las fichas: lived · sleep · work · phone · free
  const CAT_OF = { 1: "lived", 2: "sleep", 3: "work", 4: "phone", 6: "phone", 5: "free" };
  function drawLife(reveal = 1) {
    const m = model;
    const base = (k) => {
      if (k === 1) return { fill: COL.lived };
      if (k === 2) return { fill: COL.sleep };
      if (k === 3) return { fill: COL.work };
      if (k === 4) return { fill: COL.phone };
      if (k === 6) return { fill: COL.phone, hollow: true };
      return { fill: COL.free, alpha: 0.92 };
    };
    const cellAt = (r, c) => {
      const k = m.cat[r * COLS + c];
      const s = base(k);
      if (focusCat && CAT_OF[k] !== focusCat) s.alpha = (s.alpha ?? 1) * 0.13;
      return s;
    };
    lifeGeo = drawWeeks($("#grid-life"), m.L, cellAt, reveal, selLife);
    placeYou($("#life-wrap"), lifeGeo, m.A, t().you(m.A));
  }

  function renderLife() {
    model = compute();
    const m = model;
    el.target.max = String(m.H);
    if (parseFloat(el.target.value) > m.H) el.target.value = String(m.H);
    $("#target-out").textContent = fmtH(parseFloat(el.target.value)) + " h";
    syncRanges();

    $("#r-phone").textContent = fmtInt(m.phone);
    $("#r-years").textContent = m.phone > 0 ? yearsPhrase(m.phone) : "";
    $("#r-recover").textContent = fmtInt(m.recovered);
    $("#r-recover-y").textContent = t().yearsShort(fmtDec(m.recovered / 52, 1));
    $("#sticky-num").textContent = fmtInt(m.phone);
    $("#sticky-txt").textContent = `${t().weeksPhone} · ${fmtH(m.H)} h`;

    const chips = [["lived", "lived", COL.lived, m.lived], ["sleep", "sleepL", COL.sleep, m.sleep], ["work", "workL", COL.work, m.work], ["phone", "phoneL", COL.phone, m.phone], ["free", "freeL", COL.free, m.free]];
    $("#chips").innerHTML = chips
      .map(([k, l, c, v]) => `<button type="button" class="chip-c" data-cat="${k}" aria-pressed="${focusCat === k}"><span class="sw" style="background:${c}"></span>${t()[l]} <b>${fmtInt(v)}</b></button>`)
      .join("");
    renderFocusLine();

    if (selLife >= m.L) selLife = -1;
    renderRowLife();
    if (revealed.life >= 1) drawLife(1);
  }

  function renderFocusLine() {
    const m = model, box = $("#focus-line");
    if (!focusCat) { box.textContent = t().focusNone; return; }
    const v = { lived: m.lived, sleep: m.sleep, work: m.work, phone: m.phone, free: m.free }[focusCat];
    const left = Math.max(1, (m.L - m.A) * 52);
    box.innerHTML = t().focus[focusCat](fmtInt(v), fmtDec(v / 52, 1), Math.round((m.phone / left) * 100));
  }

  function renderRowLife() {
    const m = model, box = $("#row-info-life");
    if (m.overflow) { box.innerHTML = t().overflow; return; }
    if (selLife < 0) { box.textContent = t().tapRow; return; }
    const r = selLife;
    if (r < m.A) { box.innerHTML = t().rowLived(r); return; }
    const c = m.rowCount[r];
    box.innerHTML = t().rowLife(r, r === m.A, c.s, c.w, c.p, c.rec, c.f);
  }

  // ───────────────── PASO 2: POR EDAD ─────────────────
  const LIFE_ROWS = 80;
  let activeGroup = null;
  const lifeRed = (() => {
    const out = new Array(LIFE_ROWS).fill(0);
    let acc = 0, prev = 0;
    for (let a = 0; a < LIFE_ROWS; a++) {
      const s = lifelineAt(a);
      if (!s || s.h == null) { out[a] = -1; continue; }
      acc += (s.h / 24) * 52;
      const now = Math.round(acc);
      out[a] = now - prev;
      prev = now;
    }
    return out;
  })();
  const lifeTotalWeeks = lifeRed.reduce((a, b) => a + Math.max(0, b), 0);

  let dataGeo = null;
  function drawData(reveal = 1) {
    const g = activeGroup ? D.groups.find((x) => x.id === activeGroup) : null;
    const cellAt = (r, c) => {
      const n = lifeRed[r];
      const k = !g || (r >= g.rows[0] && r <= g.rows[1]) ? 1 : 0.28;
      if (n < 0) return { hatch: true, alpha: k };
      if (c < n) return { fill: COL.phone, alpha: k };
      return { fill: "#ffffff", alpha: 0.2 * k };
    };
    dataGeo = drawWeeks($("#grid-data"), LIFE_ROWS, cellAt, reveal, selData);
    placeYou($("#data-wrap"), dataGeo, Math.min(model.A, LIFE_ROWS - 1), t().youShort(model.A));
  }

  function renderRowData() {
    const box = $("#row-info-data");
    if (selData < 0) { box.textContent = t().tapRow; return; }
    const s = lifelineAt(selData);
    if (!s || s.h == null) { box.innerHTML = t().rowNoData(selData); return; }
    box.innerHTML = t().rowData(selData, lifeRed[selData], fmtH(s.h), t().metric[s.metric]);
  }

  function renderVersus() {
    const m = model, s = lifelineAt(m.A);
    const box = $("#versus");
    if (!s || s.h == null) {
      box.innerHTML = `<div class="vs-item"><div class="vs-v red">${fmtH(m.H)} h</div><div class="vs-l">${t().vsYou}</div></div><div class="vs-item"><div class="vs-v">—</div><div class="vs-l">${t().vsAge(`${s ? s.from : m.A}–${s ? s.to : m.A}`)}</div></div><p class="vs-msg">${t().vsNone}</p>`;
      return;
    }
    const msg = m.H > s.h * 1.15 ? t().vsMore : m.H < s.h * 0.85 ? t().vsLess : t().vsSame;
    const range = `${s.from}–${s.to === 79 ? "80" : s.to}`;
    box.innerHTML = `<div class="vs-item"><div class="vs-v red">${fmtH(m.H)} h</div><div class="vs-l">${t().vsYou} · ${t().hDay}</div></div>
      <div class="vs-item"><div class="vs-v">~${fmtH(s.h)} h</div><div class="vs-l">${t().vsAge(range)} · ${t().hDay}</div></div>
      <p class="vs-msg">${msg} <span class="small muted">(${t().metric[s.metric]} · <a class="src-link" href="${D.sources[s.src].url}" target="_blank" rel="noopener">${D.sources[s.src].name}</a>)</span></p>`;
  }

  function renderData() {
    $("#l-total").textContent = fmtInt(lifeTotalWeeks);
    $("#l-years").textContent = t().lifeTotal(fmtDec(lifeTotalWeeks / 52, 1));
    $("#legend-data").innerHTML = [
      [`background:${COL.phone}`, t().lifePhone],
      ["background:#1c1c1c;border:1px solid #5a5a5a", t().lifeNoData],
      ["background:rgba(255,255,255,.25)", t().lifeRest],
    ].map(([st, l]) => `<li><span class="sw" style="${st}"></span>${l}</li>`).join("");
    renderVersus();
    renderRowData();
    if (revealed.data >= 1) drawData(1);

    $("#groups").innerHTML = D.groups.map((gr) => {
      const [say, also] = t().say[gr.id](fmtH);
      let w = 0, partial = false;
      for (let a = gr.rows[0]; a <= gr.rows[1]; a++) lifeRed[a] < 0 ? (partial = true) : (w += lifeRed[a]);
      const rows = gr.stats.map((s) => {
        const src = s.src ? D.sources[s.src] : null;
        const badge = s.verif && s.verif !== "p" ? `<span class="badge ${s.verif}">${t().verif[s.verif]}</span>` : "";
        const note = s.note ? `<div class="small muted">${t().notes[s.note]}</div>` : "";
        const meta = [s.range, s.region, s.year].filter(Boolean).join(" · ");
        return `<div class="stat-row"><div class="stat-v">${s.v == null ? "—" : fmtH(s.v) + " h"}</div><div>${t().metric[s.metric]}${badge}<div class="small muted">${meta}</div>${note}${src ? `<a class="src-link" href="${src.url}" target="_blank" rel="noopener">${src.name}</a>` : ""}</div></div>`;
      }).join("");
      const on = activeGroup === gr.id;
      return `<div class="group${on ? " is-on" : ""}" data-g="${gr.id}" role="button" tabindex="0" aria-expanded="${on}">
        <div class="g-head"><span class="g-name">${t().groups[gr.id]}</span><span class="g-ages">${t().yearsOld(gr.rows[0], gr.rows[1] === 79 ? "80" : gr.rows[1])}</span></div>
        <p class="g-say">${say}</p>
        <p class="g-also">${also}</p>
        ${w > 0 ? `<span class="g-stage">${t().stage(fmtInt(w))}${partial ? t().stagePartial : ""}</span>` : ""}
        <div><span class="g-src">${t().seeSources} ${on ? "▴" : "▾"}</span></div>
        <div class="g-more">${rows}</div>
      </div>`;
    }).join("");

    $("#ar-stats").innerHTML = D.argentina.map((s) => `<div><div class="stat-v">${fmtH(s.v)} h</div><div class="small">${t().metric[s.metric]}<span class="badge ${s.verif}">${t().verif[s.verif]}</span></div><a class="src-link" href="${D.sources[s.src].url}" target="_blank" rel="noopener">${D.sources[s.src].name}</a></div>`).join("");
    $("#caveats").innerHTML = t().caveats.map((c) => `<li>${c}</li>`).join("");
    $("#src-list").innerHTML = Object.values(D.sources)
      .filter((v, i, arr) => arr.findIndex((x) => x.url === v.url) === i)
      .map((x) => `<li><a href="${x.url}" target="_blank" rel="noopener">${x.name}</a></li>`)
      .join("");
  }

  // ───────────────── PASO 3: ANTES Y AHORA ─────────────────
  const TYPE_COLOR = { tvHome: "#9a9a9a", tvPerson: "#ffffff", phone: "#ef4444" };
  function renderEras() {
    $("#eras").innerHTML = D.overview.map((era) => {
      const strips = era.strips.map((s) => {
        const src = D.sources[s.src];
        const badge = s.verif !== "p" ? `<span class="badge ${s.verif}">${t().verif[s.verif]}</span>` : "";
        const cells = Array.from({ length: 24 }, (_, i) => {
          const f = clamp(s.h - i, 0, 1);
          return `<span class="hr${s.type === "tvHome" ? " hatch" : ""}"><i style="width:${(f * 100).toFixed(0)}%;background:${TYPE_COLOR[s.type]}"></i></span>`;
        }).join("");
        return `<div class="strip"><div class="strip-label"><span class="${s.type === "phone" ? "red" : ""}">${t().types[s.type]}</span><span><span class="v${s.type === "phone" ? " red" : ""}">${fmtH(s.h)} h</span> <a class="src-link" href="${src.url}" target="_blank" rel="noopener" title="${src.name}">${t().srcShort}</a>${badge}</span></div>
          <div class="hours">${cells}</div></div>`;
      }).join("");
      let note = "";
      if (era.phone === "none") note = t().noPhone;
      if (era.phone === "basic") note = t().basicPhone;
      if (era.year === 2025) note = t().phoneJump(fmtH(1.52), fmtH(4.13));
      return `<div class="era"><div class="era-head"><span class="era-year">${era.year}</span><span class="era-ago">${t().ago(2025 - era.year)}</span></div>${strips}${note ? `<p class="era-note">${note}</p>` : ""}</div>`;
    }).join("");
    $("#legend-eras").innerHTML = t().legendEras.map(([c, l]) => `<li><span class="sw${c === "hatch" ? " hatch-sw" : ""}" style="${c === "hatch" ? "" : `background:${c}`}"></span>${l}</li>`).join("");
  }

  function renderChart() {
    const svg = $("#chart");
    const NS = "http://www.w3.org/2000/svg";
    const X = (yr) => 40 + ((yr - 1970) / 60) * 300;
    const Y = (h) => 226 - (h / 9) * 200;
    const node = (tag, attrs, text) => {
      const n = document.createElementNS(NS, tag);
      Object.entries(attrs).forEach(([k, v]) => n.setAttribute(k, v));
      if (text != null) n.textContent = text;
      svg.appendChild(n);
      return n;
    };
    svg.innerHTML = "";
    for (let h = 0; h <= 8; h += 2) {
      node("line", { x1: 40, x2: 340, y1: Y(h), y2: Y(h), class: "axis" });
      node("text", { x: 0, y: Y(h) + 4 }, `${h} h`);
    }
    for (let yr = 1975; yr <= 2025; yr += 10) node("text", { x: X(yr) - 15, y: 250 }, String(yr));
    node("line", { x1: X(2007), x2: X(2007), y1: 18, y2: 226, stroke: "#444", "stroke-dasharray": "2 4" });
    node("text", { x: X(2007) - 70, y: 14, style: "fill:#888" }, `${t().smartphoneYear} 2007`);
    D.series.forEach((s) => {
      const d = s.points.map((p, i) => `${i ? "L" : "M"}${X(p[0]).toFixed(1)},${Y(p[1]).toFixed(1)}`).join(" ");
      node("path", { d, fill: "none", stroke: s.color, "stroke-width": 3, "stroke-dasharray": s.dash || "none", "stroke-linecap": "round" });
      s.points.forEach((p) => {
        const c = node("circle", { cx: X(p[0]), cy: Y(p[1]), r: 6, fill: s.color, class: "pt", tabindex: 0 });
        const show = () => {
          const src = D.sources[p[2]];
          const badge = p[3] !== "p" ? ` <span class="badge ${p[3]}">${t().verif[p[3]]}</span>` : "";
          $("#chart-tip").innerHTML = `<b>${p[0]} · ${fmtH(p[1])} h</b> — ${t().series[s.id]}${badge}<br><a class="src-link" href="${src.url}" target="_blank" rel="noopener">${src.name}</a>`;
        };
        c.addEventListener("click", show);
        c.addEventListener("keydown", (e) => e.key === "Enter" && show());
      });
    });
    $("#legend-chart").innerHTML = D.series.map((s) => `<li><span class="sw" style="${s.dash ? "background:repeating-linear-gradient(90deg,#8a8a8a 0 4px,transparent 4px 7px)" : `background:${s.color}`}"></span>${t().series[s.id]}</li>`).join("");
    $("#chart-tip").textContent = t().chartTip;
  }

  // ───────────────── guía de tiempo de pantalla ─────────────────
  const UA = navigator.userAgent;
  let activeOS = /iphone|ipad|ipod/i.test(UA) ? "ios" : /samsung|sm-/i.test(UA) ? "samsung" : /xiaomi|redmi|poco/i.test(UA) ? "xiaomi" : /android/i.test(UA) ? "android" : "ios";
  function renderGuide() {
    $$(".gtab").forEach((b) => b.classList.toggle("is-on", b.dataset.os === activeOS));
    $("#guide-steps").innerHTML = t().steps[activeOS].map((s) => `<li>${s}</li>`).join("");
  }

  // ───────────────── 1. video de entrada (pantalla completa, arranca solo y en silencio) ─────────────────
  const hero = $("#hero"), video = $("#hero-video");
  let heroDone = false;
  function playHero() {
    const pr = video.play();
    if (pr && pr.then) pr.then(() => ($("#hero-play").hidden = true)).catch(() => ($("#hero-play").hidden = false));
  }
  function setVideoLang() {
    video.poster = `video/poster_${LANG}.jpg`;
    const src = `video/weeks_${LANG}.mp4`;
    // comparar con el src configurado (currentSrc está vacío al cargar y un load() de más corta el autoplay)
    if ($("#video-src").getAttribute("src") !== src) {
      $("#video-src").setAttribute("src", src);
      video.load();
      if (!heroDone && window.scrollY < hero.offsetHeight / 2) playHero();
    }
  }
  function setSoundUI() {
    const on = !video.muted;
    $("#sound").setAttribute("aria-pressed", String(on));
    $("#sound-x").toggleAttribute("hidden", on);
    $("#sound-w").toggleAttribute("hidden", !on);
    $("#sound span").textContent = on ? t().soundOff : t().soundOn;
  }
  $("#sound").addEventListener("click", () => {
    video.muted = !video.muted;
    if (video.ended) { video.currentTime = 0; heroDone = false; }
    if (video.paused) playHero();
    setSoundUI();
  });
  $("#hero-play").addEventListener("click", () => { video.muted = false; setSoundUI(); playHero(); });
  video.addEventListener("timeupdate", () => {
    if (video.duration) $("#hero-bar").style.transform = `scaleX(${video.currentTime / video.duration})`;
  });
  const finishHero = () => {
    if (heroDone) return;
    heroDone = true;
    localStorage.setItem("seenVideo", "1");
    smoothScrollTo($("#story").offsetTop, 1500);
  };
  video.addEventListener("ended", finishHero);
  // reintentos de autoplay: Chrome pausa videos mudos en pestañas en segundo plano, y algunos modos de ahorro lo bloquean
  const retryHero = () => { if (!heroDone && video.paused && !video.ended && window.scrollY < hero.offsetHeight / 2) playHero(); };
  document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible") retryHero(); });
  hero.addEventListener("pointerdown", (e) => { if (!e.target.closest("button")) retryHero(); });
  $("#skip").addEventListener("click", () => { video.pause(); finishHero(); });
  $("#replay").addEventListener("click", () => {
    heroDone = false;
    window.scrollTo(0, 0);
    video.currentTime = 0;
    playHero();
  });

  /* scroll suave con easing (para el pase automático del video a la historia) */
  let scrollAnim = 0;
  function smoothScrollTo(y, dur = 900) {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return window.scrollTo(0, y);
    const y0 = window.scrollY, dy = y - y0, t0 = performance.now(), id = ++scrollAnim;
    const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
    const stop = () => { scrollAnim++; };
    window.addEventListener("wheel", stop, { once: true, passive: true });
    window.addEventListener("touchstart", stop, { once: true, passive: true });
    const step = (now) => {
      if (id !== scrollAnim) return;
      const p = Math.min(1, (now - t0) / dur);
      window.scrollTo(0, y0 + dy * ease(p));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  $$('a[href^="#"]').forEach((a) => a.addEventListener("click", (e) => {
    const target = $(a.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    smoothScrollTo(target.getBoundingClientRect().top + window.scrollY - (a.getAttribute("href") === "#story" ? 0 : 56), 900);
  }));

  // ───────────────── 2. historia guiada: una persona promedio de 40 años ─────────────────
  const story = computeModel({ L: 80, A: 40, H: 3.75, H2: 3.75, S: 8, W: 40, R: 65 });
  const sRank = new Float32Array(story.cat.length); // orden de aparición dentro de cada color (fila por fila)
  {
    const tot = {}, cnt = {};
    for (const v of story.cat) tot[v] = (tot[v] || 0) + 1;
    story.cat.forEach((v, i) => { cnt[v] = (cnt[v] || 0) + 1; sRank[i] = cnt[v] / tot[v]; });
  }
  const STEP_TARGETS = [
    { 1: 0, 2: 0, 3: 0, 4: 0, dim: 0 }, { 1: 1, 2: 0, 3: 0, 4: 0, dim: 0 }, { 1: 1, 2: 1, 3: 0, 4: 0, dim: 0 },
    { 1: 1, 2: 1, 3: 1, 4: 0, dim: 0 }, { 1: 1, 2: 1, 3: 1, 4: 1, dim: 0 }, { 1: 1, 2: 1, 3: 1, 4: 1, dim: 1 },
    { 1: 1, 2: 1, 3: 1, 4: 1, dim: 0 },
  ];
  const STEP_NUM = [4160, story.lived, story.sleep, story.work, story.phone, story.free, null];
  const STEP_COLOR = ["#ffffff", "#a3a3a3", COL.sleep, COL.work, COL.phone, "#ffffff", "#ffffff"];
  const STORY_COL = { 1: COL.lived, 2: COL.sleep, 3: COL.work, 4: COL.phone };
  const sProg = { 1: 0, 2: 0, 3: 0, 4: 0, dim: 0 };
  let sStep = -1, introReveal = 0, shownNum = 0;
  $("#story-steps").innerHTML = STEP_TARGETS.map(() => "<div></div>").join("");
  $("#story-dots").innerHTML = STEP_TARGETS.map(() => "<i></i>").join("");

  function drawStory() {
    const cv = $("#grid-story"), wrap = cv.parentElement;
    const dpr = window.devicePixelRatio || 1;
    const pitch = Math.max(2, Math.min(wrap.clientWidth / COLS, wrap.clientHeight / 80));
    const w = Math.floor(COLS * pitch), h = Math.floor(80 * pitch);
    if (cv.width !== Math.round(w * dpr) || cv.height !== Math.round(h * dpr)) {
      cv.width = Math.round(w * dpr);
      cv.height = Math.round(h * dpr);
      cv.style.width = w + "px";
      cv.style.height = h + "px";
    }
    const g = cv.getContext("2d");
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    g.clearRect(0, 0, w, h);
    const cell = pitch * 0.78, n = story.cat.length, shown = Math.floor(n * introReveal);
    for (let i = 0; i < shown; i++) {
      const k = story.cat[i];
      let fill = COL.free, a = 1;
      if (k !== 5) {
        if (sRank[i] <= sProg[k]) fill = STORY_COL[k];
        a = 1 - 0.82 * sProg.dim;
      }
      g.globalAlpha = a;
      g.fillStyle = fill;
      g.fillRect((i % COLS) * pitch, Math.floor(i / COLS) * pitch, cell, cell);
    }
    g.globalAlpha = 1;
  }

  let storyRunning = false, storyLast = 0;
  function storyTick(now) {
    const dt = storyLast ? Math.min(64, now - storyLast) / 1000 : 0.016;
    storyLast = now;
    const tg = STEP_TARGETS[Math.max(0, sStep)];
    let moving = false;
    for (const k of ["1", "2", "3", "4", "dim"]) {
      const d = tg[k] - sProg[k];
      if (Math.abs(d) > 0.0005) { sProg[k] += Math.sign(d) * Math.min(Math.abs(d), dt / 0.85); moving = true; } else sProg[k] = tg[k];
    }
    if (introReveal < 1) { introReveal = Math.min(1, introReveal + dt / 1.1); moving = true; }
    drawStory();
    if (moving) requestAnimationFrame(storyTick);
    else { storyRunning = false; storyLast = 0; }
  }
  function kickStory() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      Object.assign(sProg, STEP_TARGETS[Math.max(0, sStep)]);
      introReveal = 1;
      return drawStory();
    }
    if (!storyRunning) { storyRunning = true; storyLast = 0; requestAnimationFrame(storyTick); }
  }

  let countAnim = 0;
  function countTo(el, to, color) {
    el.style.color = color;
    if (to == null) { el.textContent = ""; return; }
    const from = shownNum, t0 = performance.now(), id = ++countAnim;
    const step = (now) => {
      if (id !== countAnim) return;
      const p = Math.min(1, (now - t0) / 650);
      const v = Math.round(from + (to - from) * (1 - Math.pow(1 - p, 3)));
      el.textContent = fmtInt(v);
      if (p < 1) requestAnimationFrame(step);
      else shownNum = to;
    };
    requestAnimationFrame(step);
  }

  function setStoryStep(i, force = false) {
    if (i === sStep && !force) return;
    sStep = i;
    const st = t().story[i];
    if (!st) return;
    const cap = $(".story-caption");
    cap.classList.remove("cap-anim");
    void cap.offsetWidth;
    cap.classList.add("cap-anim");
    $("#cap-kicker").textContent = st.k;
    $("#cap-unit").textContent = st.u;
    $("#cap-text").textContent = typeof st.t === "function" ? st.t(fmtH, Math.floor(story.phone / 52)) : st.t;
    $("#cap-src").textContent = st.src || "";
    $("#cap-cta").hidden = !st.cta;
    countTo($("#cap-num"), STEP_NUM[i], STEP_COLOR[i]);
    $$("#story-dots i").forEach((d, k) => d.classList.toggle("on", k === i));
    $("#scroll-hint").classList.toggle("off", i > 0);
    kickStory();
  }

  function updateStory() {
    const rect = $("#story").getBoundingClientRect(), vh = window.innerHeight;
    if (rect.top < vh * 0.9 && introReveal === 0) kickStory();
    const stepH = $("#story-steps").firstElementChild.offsetHeight || vh * 0.75;
    setStoryStep(clamp(Math.floor((-rect.top + stepH * 0.35) / stepH), 0, STEP_TARGETS.length - 1));
  }

  // ───────────────── idioma ─────────────────
  function applyLang() {
    document.documentElement.lang = LANG;
    $$("[data-i18n]").forEach((n) => {
      const v = t()[n.dataset.i18n];
      if (typeof v === "string") n.textContent = v;
    });
    $("#lang").textContent = LANG === "es" ? "EN" : "ES";
    document.title = LANG === "es" ? "4.000 semanas — ¿cuánto de tu vida se lleva el celular?" : "4,000 weeks — how much of your life does your phone take?";
    setVideoLang();
    setSoundUI();
    renderAll();
    setStoryStep(Math.max(0, sStep), true);
  }
  function renderAll() {
    renderLife();
    renderData();
    renderEras();
    renderChart();
    renderGuide();
  }

  // ───────────────── eventos ─────────────────
  const onHoursChanged = () => {
    el.hoursRange.value = String(Math.min(12, parseFloat(el.hours.value) || 0));
    el.target.max = el.hours.value;
    el.target.value = String(Math.floor((parseFloat(el.hours.value) || 0) * 2) / 4);
  };
  const rerender = () => {
    renderLife();
    renderVersus();
    if (revealed.data >= 1) drawData(1);
    if (revealed.life < 1) { revealed.life = 1; drawLife(1); }
  };
  $$(".st-btn").forEach((b) => b.addEventListener("click", () => {
    const [id, d] = b.dataset.step.split(":");
    const inp = el[id];
    const v = clamp((parseFloat(inp.value) || 0) + parseFloat(d), parseFloat(inp.min), parseFloat(inp.max));
    inp.value = String(v);
    if (id === "hours") onHoursChanged();
    rerender();
  }));
  el.age.addEventListener("input", rerender);
  el.age.addEventListener("change", () => { el.age.value = String(clamp(parseInt(el.age.value) || 0, 0, 79)); rerender(); });
  el.hours.addEventListener("input", () => { onHoursChanged(); rerender(); });
  el.hours.addEventListener("change", () => { el.hours.value = String(clamp(parseFloat(el.hours.value) || 0, 0, 16)); onHoursChanged(); rerender(); });
  el.hoursRange.addEventListener("input", () => { el.hours.value = el.hoursRange.value; onHoursChanged(); rerender(); });
  ["target", "life", "sleep", "work", "retire"].forEach((k) => el[k].addEventListener("input", rerender));

  $("#chips").addEventListener("click", (e) => {
    const b = e.target.closest(".chip-c");
    if (!b) return;
    focusCat = focusCat === b.dataset.cat ? null : b.dataset.cat;
    $$("#chips .chip-c").forEach((x) => x.setAttribute("aria-pressed", String(x.dataset.cat === focusCat)));
    renderFocusLine();
    revealed.life = 1;
    drawLife(1);
  });
  $("#grid-life").addEventListener("click", (e) => {
    const r = rowFromEvent(e.currentTarget, e, model.L);
    selLife = selLife === r ? -1 : r;
    revealed.life = 1;
    drawLife(1);
    renderRowLife();
  });
  $("#grid-data").addEventListener("click", (e) => {
    const r = rowFromEvent(e.currentTarget, e, LIFE_ROWS);
    selData = selData === r ? -1 : r;
    revealed.data = 1;
    drawData(1);
    renderRowData();
  });
  $("#lang").addEventListener("click", () => {
    LANG = LANG === "es" ? "en" : "es";
    localStorage.setItem("lang", LANG);
    applyLang();
  });
  const toggleGroup = (b) => {
    activeGroup = activeGroup === b.dataset.g ? null : b.dataset.g;
    revealed.data = 1;
    renderData();
    if (activeGroup) $("#grid-data").scrollIntoView({ behavior: "smooth", block: "center" });
  };
  $("#groups").addEventListener("click", (e) => {
    const b = e.target.closest(".group");
    if (b && !e.target.closest("a")) toggleGroup(b);
  });
  $("#groups").addEventListener("keydown", (e) => {
    const b = e.target.closest(".group");
    if (b && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); toggleGroup(b); }
  });
  $(".guide-tabs").addEventListener("click", (e) => {
    const b = e.target.closest(".gtab");
    if (!b) return;
    activeOS = b.dataset.os;
    renderGuide();
  });

  function toast(msg) {
    const n = $("#toast");
    n.textContent = msg;
    n.classList.add("show");
    clearTimeout(toast._t);
    toast._t = setTimeout(() => n.classList.remove("show"), 2800);
  }

  // ───────────────── compartir: imagen vertical para historias ─────────────────
  const withTimeout = (p, ms) => Promise.race([p, new Promise((r) => setTimeout(r, ms))]);
  async function shareImage() {
    const m = model;
    await withTimeout(Promise.all([document.fonts.load('700 200px "Space Grotesk"'), document.fonts.load("800 40px Inter"), document.fonts.load("600 40px Inter")]), 1200);
    const W = 1080, H = 1920, c = document.createElement("canvas");
    c.width = W;
    c.height = H;
    const g = c.getContext("2d");
    g.fillStyle = "#000";
    g.fillRect(0, 0, W, H);
    g.textBaseline = "alphabetic";
    g.fillStyle = "#ef4444";
    g.font = "800 38px Inter, sans-serif";
    g.fillText(t().shareKicker, 90, 170);
    g.font = '700 220px "Space Grotesk", sans-serif';
    g.fillText(fmtInt(m.phone), 80, 390);
    g.fillStyle = "#fff";
    g.font = "800 54px Inter, sans-serif";
    g.fillText(t().weeksPhone, 90, 470);
    g.fillStyle = "#a3a3a3";
    g.font = "600 38px Inter, sans-serif";
    g.fillText(`${t().shareYears(m.phone / 52)} · ${t().shareSub(fmtH(m.H))}`, 90, 530);
    // grilla
    const top = 600, bottom = 1640;
    const pitch = Math.min(15, (bottom - top) / m.L, 900 / COLS);
    const cell = pitch * 0.78, gx = (W - COLS * pitch) / 2;
    const col = { 1: COL.lived, 2: COL.sleep, 3: COL.work, 4: COL.phone, 5: COL.free, 6: COL.phone };
    for (let r = 0; r < m.L; r++) for (let k = 0; k < COLS; k++) {
      const v = m.cat[r * COLS + k], x = gx + k * pitch, y = top + r * pitch;
      g.fillStyle = col[v]; // en la imagen el celular va completo (sin el "¿y si bajás?")
      g.fillRect(x, y, cell, cell);
    }
    const yy = top + m.A * pitch;
    g.strokeStyle = "#fff";
    g.lineWidth = 3;
    g.strokeRect(gx - 4, yy - 4, cell + 8, cell + 8);
    g.fillStyle = "#fff";
    g.font = "800 28px Inter, sans-serif";
    g.textAlign = "right";
    g.fillText(t().shareNow(m.A) + "  →", gx - 14, yy + cell / 2 + 10);
    g.textAlign = "left";
    // leyenda
    const items = [[COL.lived, t().lived], [COL.sleep, t().sleepL], [COL.work, t().workL], [COL.phone, t().phoneL], [COL.free, t().freeL]];
    g.font = "600 30px Inter, sans-serif";
    let lx = 90;
    const ly = top + m.L * pitch + 60;
    items.forEach(([cc, l]) => { g.fillStyle = cc; g.fillRect(lx, ly - 22, 24, 24); g.fillStyle = "#d4d4d4"; g.fillText(l, lx + 34, ly); lx += 44 + g.measureText(l).width + 26; });
    g.fillStyle = "#a3a3a3";
    g.font = "600 32px Inter, sans-serif";
    g.fillText(t().shareCta, 90, 1830);
    g.fillStyle = "#fff";
    g.font = "800 36px Inter, sans-serif";
    g.fillText(SITE, 90, 1876);
    return new Promise((res) => c.toBlob(res, "image/png"));
  }

  async function doShare() {
    const m = model;
    const url = new URL(location.href);
    url.hash = "";
    url.search = `?edad=${m.A}&h=${m.H}`;
    const text = t().shareText(fmtH(m.H), fmtInt(m.phone), fmtDec(m.phone / 52, 1));
    let blob = null;
    try { blob = await shareImage(); } catch (_) { blob = null; }
    const file = blob ? new File([blob], LANG === "es" ? "mi-vida-en-semanas.png" : "my-life-in-weeks.png", { type: "image/png" }) : null;
    if (file && navigator.canShare && navigator.canShare({ files: [file] })) {
      try { await navigator.share({ files: [file], text: `${text} ${url}` }); return; } catch (e) { if (e && e.name === "AbortError") return; }
    }
    if (navigator.share && !file) {
      try { await navigator.share({ title: t().brand, text, url: url.toString() }); return; } catch (_) { return; }
    }
    if (file) {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(file);
      a.download = file.name;
      a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 4000);
    }
    try { await navigator.clipboard.writeText(`${text} ${url}`); } catch (_) {}
    toast(file ? t().downloaded : t().copied);
  }
  $$(".share-btn").forEach((b) => b.addEventListener("click", doShare));

  // ───────────────── scroll: header, historia guiada, video, barra fija ─────────────────
  const sticky = $("#sticky"), head = $("#life-head"), top = $("#top");
  let scrollQueued = false;
  const onScroll = () => {
    scrollQueued = false;
    const y = window.scrollY;
    top.classList.toggle("show", y > hero.offsetHeight - 70);
    // si la persona scrollea a mano durante el video, se pausa y no la llevamos a ningún lado
    if (!video.paused && y > hero.offsetHeight * 0.5) { video.pause(); heroDone = true; }
    updateStory();
    const passed = head.getBoundingClientRect().bottom < 60;
    sticky.classList.toggle("show", passed);
    sticky.setAttribute("aria-hidden", String(!passed));
  };
  window.addEventListener("scroll", () => {
    if (!scrollQueued) { scrollQueued = true; requestAnimationFrame(onScroll); }
  }, { passive: true });

  const gio = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      if (en.target.id === "grid-life") cascade("life", drawLife);
      if (en.target.id === "grid-data") cascade("data", drawData);
      gio.unobserve(en.target);
    });
  }, { threshold: 0.15 });

  let lastW = 0;
  new ResizeObserver(() => {
    const w = $("main").clientWidth;
    if (Math.abs(w - lastW) > 2) {
      lastW = w;
      if (model && revealed.life >= 1) drawLife(1);
      if (model && revealed.data >= 1) drawData(1);
    }
    drawStory();
  }).observe(document.body);

  // ───────────────── instalar como app ─────────────────
  let deferred = null;
  const isIOS = /iphone|ipad|ipod/i.test(UA);
  const standalone = window.matchMedia("(display-mode: standalone)").matches || navigator.standalone;
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferred = e;
    $("#install").hidden = false;
  });
  if (isIOS && !standalone) $("#install").hidden = false;
  $("#install").addEventListener("click", async () => {
    if (deferred) {
      deferred.prompt();
      await deferred.userChoice;
      deferred = null;
      $("#install").hidden = true;
    } else toast(t().iosInstall);
  });
  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) navigator.serviceWorker.register("sw.js").catch(() => {});

  // ───────────────── inicio ─────────────────
  const qp = new URLSearchParams(location.search);
  if (qp.has("edad") || qp.has("age")) el.age.value = String(clamp(parseInt(qp.get("edad") || qp.get("age")) || 30, 0, 79));
  if (qp.has("h")) el.hours.value = String(clamp(parseFloat(qp.get("h")) || 4, 0, 16));
  // la app siempre abre arriba, en el video (sin restaurar el scroll de la visita anterior)
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  if (!location.hash) window.scrollTo(0, 0);
  onHoursChanged();
  applyLang();
  playHero();
  setSoundUI();
  onScroll();
  gio.observe($("#grid-life"));
  gio.observe($("#grid-data"));
  // no depender de fonts.ready (en algunos navegadores queda pendiente): redibujar cuando llegue
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { if (revealed.life >= 1) drawLife(1); if (revealed.data >= 1) drawData(1); });
})();
