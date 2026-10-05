/* 4.000 semanas — app. Vanilla JS, sin build. Datos en data.js. */
(() => {
  "use strict";
  const D = window.APP_DATA;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
  const SITE = "martinviretti.github.io/4000-semanas";
  const NOW_YEAR = new Date().getFullYear();
  const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ───────────────── textos ─────────────────
  const T = {
    es: {
      brand: "4.000 semanas", install: "Instalar", navCalc: "Mi cuenta", navMore: "Más datos",
      startTitle: "Este cuadrado es una semana de tu vida.", startSub: "¿Cuántas se lleva el celular?",
      startBtn: "Empezar", startNote: "Con sonido · 50 s", startSkip: "Saltar el video",
      friendTxt: (name, w) => `A ${name} el celular le lleva <b>${w}</b> semanas. ¿Y a vos?`, friendDefault: "tu amigo/a",
      skip: "Saltar", soundOn: "Activar sonido", soundOff: "Silenciar",
      endQ: "¿Te animás a hacer la cuenta con tu vida?", endSub: "Tu edad y tus horas de celular. Nada más.", endGo: "Hacer mi cuenta", endAgain: "Volver a ver el video",
      key1: "= 1 semana", key2: "1 fila = 1 año",
      s1title: "Tu cuenta", introAgain: "Ver el video de nuevo", exampleNote: "Poné tu edad y cuánto usás el celular por día.", reveal: "Ver mi resultado",
      age: "Tu edad", ageUnit: "años", hours: "Celular por día",
      ariaAgeMinus: "Restar un año", ariaAgePlus: "Sumar un año", ariaHMinus: "Restar media hora", ariaHPlus: "Sumar media hora", ariaTarget: "Horas a las que bajarías",
      guideQ: "¿No sabés? Fijate en tu celular", guideNote: "Usá el promedio diario de la última semana.",
      resLead: (L) => `De acá a los ${L}, el celular se lleva`, resUnit: "semanas", resHuman: (hw) => `${hw} de tu vida`,
      awake: (pct, d) => `Es el <b>${pct} %</b> de tu tiempo despierto: <b>${d} días enteros</b> por año.`,
      barCap: (n) => `Ya viviste ${n} semanas. La barra es lo que te queda.`,
      compareSame: "Usás lo mismo que la gente de tu edad.", compareMore: (d) => `Usás ${d} más que la gente de tu edad.`, compareLess: (d) => `Usás ${d} menos que la gente de tu edad.`,
      compareRef: (avg, range) => `Promedio ${range} años: ${avg} por día`, compareNone: "No hay datos de tu edad para comparar.",
      duelYou: "vos", feelHead: "Te quedan",
      feel: { summers: "veranos", cups: "Mundiales", sundays: "domingos" },
      feelPhone: (v, m) => (m > 0 ? `El celular se lleva ${v} veranos y ${m} ${m === 1 ? "Mundial" : "Mundiales"}.` : `El celular se lleva ${v} ${v === 1 ? "verano" : "veranos"}.`),
      gridTitle: "Tu vida en cuadraditos",
      labels: { lived: "vivido", sleep: "dormir", work: "trabajo", phone: "celular", free: "libre" },
      livedRow: (n) => `Ya viviste ${n} semanas`, tilesH: (n) => `Te quedan ${n} · tocá un color`,
      recTile: (n, h) => `Recuperás ${n} si bajás a ${h}`,
      focus: {
        lived: (hw) => `Vivido: ${hw}.`, sleep: (hw) => `Dormir: ${hw}.`, work: (hw) => `Trabajo: ${hw}.`,
        phone: (hw, k) => `Celular: ${hw}` + (k ? ` · 1 de cada ${k} semanas que te quedan.` : "."),
        free: (hw) => `Libre: ${hw}. Lo único tuyo de verdad.`, rec: (hw) => `Si bajás, recuperás ${hw}.`,
      },
      you: (a) => `Vos hoy · ${a}`, youShort: (a) => `Vos · ${a}`,
      tapRow: "Tocá una fila para ver ese año.", rowLived: (r) => `<b>${r} años</b>: ya vivido.`, rowNow: (r) => `Este año (${r})`, rowAge: (r) => `${r} años`,
      whatifQ: (h) => `¿Y si bajás a <b>${h}</b>?`, recoverLine: (n, hw) => `Recuperás <b>${n}</b> semanas: ${hw}. Son los ▢ de la grilla.`,
      recoverZero: "Mové la barra para ver cuánto recuperás.",
      adv: "Cambiar supuestos", life: "Esperanza de vida", sleep: "Horas de sueño", work: "Horas de trabajo / semana", retire: "Te jubilás a los",
      advNote: "Trabajo: 48 semanas por año hasta jubilarte.", overflow: "No te queda tiempo libre. Revisá sueño y trabajo.",
      share: "Compartir mi grilla", shareShort: "Compartir", stickyTxt: "semanas en el celular",
      shareText: (L, w, hw) => `De acá a los ${L}, el celular se lleva ${w} semanas de mi vida (${hw}). ¿Y a vos?`,
      shareKicker: "MI VIDA EN SEMANAS", shareWeeks: "semanas en el celular", shareSub: (hw, h) => `${hw} de mi vida · con ${h} por día`, shareNow: (a) => `Hoy · ${a}`, shareCta: "¿Y vos? Hacé tu cuenta en",
      copied: "Link copiado", downloaded: "Imagen descargada · link copiado", iosInstall: "En iPhone: tocá Compartir y después \"Agregar a inicio\".",
      live: (w, hw) => `${w} semanas en el celular, ${hw}.`,
      gridSummary: (A, L, s, w, p, f) => `De los ${A} a los ${L}: ${s} semanas durmiendo, ${w} trabajando, ${p} en el celular y ${f} libres.`,
      human: (y, m) => (y > 0 ? `${y} ${y === 1 ? "año" : "años"}` : "") + (y > 0 && m > 0 ? " y " : "") + (m > 0 ? `${m} ${m === 1 ? "mes" : "meses"}` : "") || "menos de un mes",
      moreTitle: "¿Querés más datos?", tAge: "Por edad", tAgeSub: "Cuánto lo usa cada edad", tHist: "Antes y ahora", tHistSub: "50 años de pantallas",
      tAr: "Argentina", tArSub: "Lo que se sabe (y lo que no)", tSrc: "Fuentes y método", tSrcSub: "De dónde sale cada número", srcListH: "Fuentes",
      typLabel: "Una vida típica:", lifeTotal: (hw) => `${hw} en el celular, sumando todas las etapas.`,
      dataExplain: "Una vida si a cada edad usaras el celular como la gente de esa edad hoy.",
      lifePhone: "celular", lifeNoData: "sin dato", lifeRest: "resto del año",
      rowData: (r, n, h, m) => `<b>${r} años</b>: ~<b class="red">${n} de 52 semanas</b> en el celular (${h} por día · ${m}).`,
      rowNoData: (r) => `<b>${r} años</b>: no hay un dato confiable para esta edad.`,
      stagesH: "Por etapa · tocá una para verla arriba",
      groups: { kids: "Niños", tweens: "Preadolescentes", teens: "Adolescentes", young: "Adultos jóvenes", adults: "Adultos", seniors: "Adultos mayores" },
      yearsOld: (a, b) => `${a}–${b} años`,
      say: {
        kids: (f) => [`Ven <b>~${f(0.57)}</b> por día de videos en celular o tablet`, `Pantallas en total: ~${f(2.45)} por día.`],
        tweens: (f) => ["No hay un dato confiable de celular a esta edad", `Pantallas en total: ~${f(5.55)} por día (2021).`],
        teens: (f) => [`Pasan <b>~${f(4.5)}</b> por día en el smartphone`, `Pantallas en total: ~${f(8.65)} por día (2021).`],
        young: (f) => [`Pasan <b>~${f(4.18)} a ${f(4.5)}</b> por día con internet en el celular`, `Smartphone medido en Reino Unido: ${f(4.53)} a ${f(5.08)}.`],
        adults: (f) => [`Pasan <b>~${f(2.84)} a ${f(3.75)}</b> por día con internet en el celular`, `Baja con la edad: ${f(3.75)} a los 35–44, ${f(2.84)} a los 55–64.`],
        seniors: (f) => [`Pasan <b>~${f(1.39)}</b> por día con internet en el celular`, `La TV sigue arriba: ~${f(4.28)} por día.`],
      },
      stage: (w, hw) => `= ${w} semanas de esta etapa (${hw})`, stagePartial: " · dato parcial", seeSources: "Ver fuentes",
      metric: {
        phoneVideo: "solo video en celular/tablet", screenTotal: "pantalla total", screenEnt: "pantalla total (entretenimiento)",
        smartphone: "smartphone", smartphoneMeasured: "smartphone medido en el teléfono", mobileInternet: "internet en el celular",
        internetAny: "internet, cualquier dispositivo", tv: "TV", social: "redes sociales",
      },
      notes: { pandemic: "Medido en 2021, en pandemia: probablemente infla el uso.", smallSample: "Muestra chica (~200 chicos con Android).", noPhoneData: "Sin dato confiable de celular para esta edad." },
      verif: { d: "cálculo propio", s: "vía medio" },
      caveats: [
        "No existe un dato oficial de \"horas de celular por edad\": ningún organismo estadístico lo mide en horas. Cada etapa usa la mejor medición disponible y se indica cuál.",
        "La \"vida típica\" es ilustrativa: junta datos de distintas edades medidos hoy, no sigue a una misma persona en el tiempo.",
        "Internet en el celular (adultos) = horas de internet × porcentaje hecho desde el celular (GWI 2024).",
        "Chicos y adolescentes: datos de EE.UU.; adultos: promedios globales; smartphone medido: Reino Unido (Ofcom).",
        "\"Cálculo propio\" = cuenta hecha sobre la fuente. \"Vía medio\" = la fuente original estaba bloqueada y el dato viene de un medio que la cita.",
      ],
      s3lead: "Un día en EE.UU., cada 10 años.", keyHour: "= 1 hora", noPhoneOnce: "Antes de 2007 no había smartphones.",
      erasNote: "Rayado: TV prendida en la casa (antes de 2005 no se medía por persona).", chartQ: "Todo junto",
      ago: (n) => (n <= 0 ? "este año" : n === 1 ? "hace 1 año" : `hace ${n} años`),
      types: { tvHome: "TV prendida en la casa", tvPerson: "TV por persona", phone: "Celular por persona" },
      basicPhone: "Celular: sin smartphones ni mediciones.", srcShort: "fuente",
      phoneJump: (a, b) => `En 10 años el celular pasó de ${a} a ${b} por día.`,
      legendEras: [["hatch", "TV en la casa"], ["#ffffff", "TV por persona"], ["#ef4444", "Celular"]],
      series: { tvHome: "TV por hogar · Nielsen, EE.UU.", tvPerson: "TV por persona · ATUS, EE.UU.", phone: "Celular por persona · eMarketer, EE.UU.", internet: "Internet (usuarios) · GWI, global" },
      chartTip: "Tocá un punto para ver el dato y su fuente.", smartphoneYear: "smartphone",
      arNote: "Para Argentina no hay horas por edad: el INDEC mide si usás internet, no cuánto.",
      replay: "Volver a ver el video",
      steps: {
        ios: ["Abrí <b>Ajustes</b>.", "Tocá <b>Tiempo en pantalla</b>.", "Tocá <b>Ver toda la actividad de apps y sitios web</b>.", "Elegí <b>Semana</b>: arriba aparece tu <b>promedio diario</b>."],
        android: ["Abrí <b>Ajustes</b>.", "Entrá a <b>Bienestar digital y controles parentales</b>.", "Tocá el gráfico para ver el detalle por día."],
        samsung: ["Abrí <b>Ajustes</b>.", "Entrá a <b>Bienestar digital y control parental</b>.", "Tocá el gráfico y pasá a la vista <b>semanal</b>."],
        xiaomi: ["Abrí <b>Ajustes</b>.", "Entrá a <b>Bienestar digital</b> (en algunos modelos, <b>Tiempo de pantalla</b>).", "Tocá el gráfico para ver el detalle por día."],
      },
    },
    en: {
      brand: "4,000 weeks", install: "Install", navCalc: "My numbers", navMore: "More data",
      startTitle: "This square is one week of your life.", startSub: "How many does your phone take?",
      startBtn: "Start", startNote: "With sound · 50 s", startSkip: "Skip the video",
      friendTxt: (name, w) => `${name === "your friend" ? "Your friend" : name}'s phone takes <b>${w}</b> weeks of their life. What about yours?`, friendDefault: "your friend",
      skip: "Skip", soundOn: "Turn sound on", soundOff: "Mute",
      endQ: "Dare to run the numbers on your own life?", endSub: "Your age and your phone hours. That's it.", endGo: "Do my numbers", endAgain: "Watch the video again",
      key1: "= 1 week", key2: "1 row = 1 year",
      s1title: "Your numbers", introAgain: "Watch the video again", exampleNote: "Enter your age and how much you use your phone a day.", reveal: "See my result",
      age: "Your age", ageUnit: "years", hours: "Phone per day",
      ariaAgeMinus: "One year less", ariaAgePlus: "One year more", ariaHMinus: "Half an hour less", ariaHPlus: "Half an hour more", ariaTarget: "Hours you'd cut down to",
      guideQ: "Not sure? Check your phone", guideNote: "Use the daily average for the last week.",
      resLead: (L) => `From now to ${L}, your phone takes`, resUnit: "weeks", resHuman: (hw) => `${hw} of your life`,
      awake: (pct, d) => `That's <b>${pct}%</b> of your waking time: <b>${d} full days</b> a year.`,
      barCap: (n) => `You've lived ${n} weeks. The bar is what's left.`,
      compareSame: "You use the same as people your age.", compareMore: (d) => `You use ${d} more than people your age.`, compareLess: (d) => `You use ${d} less than people your age.`,
      compareRef: (avg, range) => `Average age ${range}: ${avg} a day`, compareNone: "No data for your age to compare.",
      duelYou: "you", feelHead: "You have left",
      feel: { summers: "summers", cups: "World Cups", sundays: "Sundays" },
      feelPhone: (v, m) => (m > 0 ? `Your phone takes ${v} summers and ${m} World ${m === 1 ? "Cup" : "Cups"}.` : `Your phone takes ${v} ${v === 1 ? "summer" : "summers"}.`),
      gridTitle: "Your life in squares",
      labels: { lived: "lived", sleep: "sleep", work: "work", phone: "phone", free: "free" },
      livedRow: (n) => `You've lived ${n} weeks`, tilesH: (n) => `${n} left · tap a color`,
      recTile: (n, h) => `You get back ${n} if you cut to ${h}`,
      focus: {
        lived: (hw) => `Lived: ${hw}.`, sleep: (hw) => `Sleep: ${hw}.`, work: (hw) => `Work: ${hw}.`,
        phone: (hw, k) => `Phone: ${hw}` + (k ? ` · 1 in every ${k} weeks you have left.` : "."),
        free: (hw) => `Free: ${hw}. The only part that's truly yours.`, rec: (hw) => `If you cut down, you get back ${hw}.`,
      },
      you: (a) => `You today · ${a}`, youShort: (a) => `You · ${a}`,
      tapRow: "Tap a row to see that year.", rowLived: (r) => `<b>Age ${r}</b>: already lived.`, rowNow: (r) => `This year (${r})`, rowAge: (r) => `Age ${r}`,
      whatifQ: (h) => `What if you cut down to <b>${h}</b>?`, recoverLine: (n, hw) => `You get back <b>${n}</b> weeks: ${hw}. They're the ▢ in the grid.`,
      recoverZero: "Move the slider to see what you get back.",
      adv: "Change assumptions", life: "Life expectancy", sleep: "Hours of sleep", work: "Work hours / week", retire: "You retire at",
      advNote: "Work: 48 weeks a year until you retire.", overflow: "No free time left. Check sleep and work.",
      share: "Share my grid", shareShort: "Share", stickyTxt: "weeks on your phone",
      shareText: (L, w, hw) => `From now to ${L}, my phone takes ${w} weeks of my life (${hw}). What about you?`,
      shareKicker: "MY LIFE IN WEEKS", shareWeeks: "weeks on my phone", shareSub: (hw, h) => `${hw} of my life · at ${h} a day`, shareNow: (a) => `Today · ${a}`, shareCta: "What about you? Do yours at",
      copied: "Link copied", downloaded: "Image downloaded · link copied", iosInstall: "On iPhone: tap Share, then \"Add to Home Screen\".",
      live: (w, hw) => `${w} weeks on your phone, ${hw}.`,
      gridSummary: (A, L, s, w, p, f) => `From ${A} to ${L}: ${s} weeks asleep, ${w} at work, ${p} on the phone and ${f} free.`,
      human: (y, m) => (y > 0 ? `${y} ${y === 1 ? "year" : "years"}` : "") + (y > 0 && m > 0 ? " and " : "") + (m > 0 ? `${m} ${m === 1 ? "month" : "months"}` : "") || "less than a month",
      moreTitle: "Want more data?", tAge: "By age", tAgeSub: "How much each age uses it", tHist: "Then & now", tHistSub: "50 years of screens",
      tAr: "Argentina (where this was made)", tArSub: "What we know (and what we don't)", tSrc: "Sources & method", tSrcSub: "Where each number comes from", srcListH: "Sources",
      typLabel: "A typical life:", lifeTotal: (hw) => `${hw} on the phone, adding up every stage.`,
      dataExplain: "A life where, at each age, you used the phone like people that age do today.",
      lifePhone: "phone", lifeNoData: "no data", lifeRest: "rest of the year",
      rowData: (r, n, h, m) => `<b>Age ${r}</b>: ~<b class="red">${n} of 52 weeks</b> on the phone (${h} a day · ${m}).`,
      rowNoData: (r) => `<b>Age ${r}</b>: no reliable data for this age.`,
      stagesH: "By stage · tap one to see it above",
      groups: { kids: "Children", tweens: "Tweens", teens: "Teens", young: "Young adults", adults: "Adults", seniors: "Older adults" },
      yearsOld: (a, b) => `ages ${a}–${b}`,
      say: {
        kids: (f) => [`Watch <b>~${f(0.57)}</b> a day of video on a phone or tablet`, `All screens: ~${f(2.45)} a day.`],
        tweens: (f) => ["No reliable phone data at this age", `All screens: ~${f(5.55)} a day (2021).`],
        teens: (f) => [`Spend <b>~${f(4.5)}</b> a day on their smartphone`, `All screens: ~${f(8.65)} a day (2021).`],
        young: (f) => [`Spend <b>~${f(4.18)} to ${f(4.5)}</b> a day on mobile internet`, `Smartphone measured in the UK: ${f(4.53)} to ${f(5.08)}.`],
        adults: (f) => [`Spend <b>~${f(2.84)} to ${f(3.75)}</b> a day on mobile internet`, `It drops with age: ${f(3.75)} at 35–44, ${f(2.84)} at 55–64.`],
        seniors: (f) => [`Spend <b>~${f(1.39)}</b> a day on mobile internet`, `TV still leads: ~${f(4.28)} a day.`],
      },
      stage: (w, hw) => `= ${w} weeks of this stage (${hw})`, stagePartial: " · partial data", seeSources: "See sources",
      metric: {
        phoneVideo: "video on phone/tablet only", screenTotal: "total screen time", screenEnt: "total entertainment screen time",
        smartphone: "smartphone", smartphoneMeasured: "smartphone, measured on-device", mobileInternet: "mobile internet",
        internetAny: "internet, any device", tv: "TV", social: "social media",
      },
      notes: { pandemic: "Measured in 2021, during the pandemic: likely inflated.", smallSample: "Small sample (~200 kids on Android).", noPhoneData: "No reliable phone data for this age." },
      verif: { d: "own calculation", s: "via media" },
      caveats: [
        "There's no official \"phone hours by age\" figure: no statistics office measures it in hours. Each stage uses the best available measure, and it's labelled.",
        "The \"typical life\" is illustrative: it combines different ages measured today; it doesn't follow one person over time.",
        "Mobile internet (adults) = internet hours × share done on mobile (GWI 2024).",
        "Kids and teens: US data; adults: global averages; measured smartphone: UK (Ofcom).",
        "\"Own calculation\" = a calculation on top of the source. \"Via media\" = the original source was blocked and the figure comes from an outlet citing it.",
      ],
      s3lead: "One day in the US, every 10 years.", keyHour: "= 1 hour", noPhoneOnce: "Before 2007 there were no smartphones.",
      erasNote: "Striped: TV on at home (before 2005 it wasn't measured per person).", chartQ: "All together",
      ago: (n) => (n <= 0 ? "this year" : n === 1 ? "1 year ago" : `${n} years ago`),
      types: { tvHome: "TV on at home", tvPerson: "TV per person", phone: "Phone per person" },
      basicPhone: "Phone: no smartphones, no measurements.", srcShort: "source",
      phoneJump: (a, b) => `In 10 years, phone use went from ${a} to ${b} a day.`,
      legendEras: [["hatch", "TV at home"], ["#ffffff", "TV per person"], ["#ef4444", "Phone"]],
      series: { tvHome: "TV per household · Nielsen, US", tvPerson: "TV per person · ATUS, US", phone: "Phone per person · eMarketer, US", internet: "Internet (users) · GWI, global" },
      chartTip: "Tap a point to see the figure and its source.", smartphoneYear: "smartphone",
      arNote: "There's no hours-by-age data for Argentina: INDEC measures whether you use the internet, not how much.",
      replay: "Watch the video again",
      steps: {
        ios: ["Open <b>Settings</b>.", "Tap <b>Screen Time</b>.", "Tap <b>See All App &amp; Website Activity</b>.", "Choose <b>Week</b>: your <b>daily average</b> is at the top."],
        android: ["Open <b>Settings</b>.", "Go to <b>Digital Wellbeing &amp; parental controls</b>.", "Tap the chart for the daily breakdown."],
        samsung: ["Open <b>Settings</b>.", "Go to <b>Digital Wellbeing and parental controls</b>.", "Tap the chart and switch to the <b>weekly</b> view."],
        xiaomi: ["Open <b>Settings</b>.", "Go to <b>Digital Wellbeing</b> (on some models, <b>Screen time</b>).", "Tap the chart for the daily breakdown."],
      },
    },
  };

  let LANG = localStorage.getItem("lang") || ((navigator.language || "es").toLowerCase().startsWith("es") ? "es" : "en");
  const t = () => T[LANG];
  const loc = () => (LANG === "es" ? "es-AR" : "en-US");
  const fmtInt = (n) => Math.round(n).toLocaleString(loc());
  const fmtH = (h) => h.toLocaleString(loc(), { minimumFractionDigits: 0, maximumFractionDigits: 2 });
  /* horas legibles: 3,75 → "3 h 45 min" (redondeo a 5 min) */
  const humanH = (h) => {
    const total = Math.round((h * 60) / 5) * 5, hh = Math.floor(total / 60), mm = total % 60;
    if (hh === 0) return `${mm} min`;
    return mm === 0 ? `${hh} h` : `${hh} h ${mm} min`;
  };
  /* semanas legibles: 435 → "8 años y 4 meses" */
  const humanW = (w) => {
    let y = Math.floor(w / 52), mo = Math.round(((w - y * 52) * 12) / 52);
    if (mo === 12) { y++; mo = 0; }
    return t().human(y, mo);
  };

  // ───────────────── grilla genérica ─────────────────
  const COL = { lived: "#3a3a3a", sleep: "#3b82f6", work: "#f97316", phone: "#ef4444", free: "#ffffff" };
  const CAT_COLOR = { lived: COL.lived, sleep: COL.sleep, work: COL.work, phone: COL.phone, free: COL.free };
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
      g.lineWidth = 2;
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

  const revealed = { life: 0, data: 0 };
  function cascade(key, draw, done) {
    if (reducedMotion() || revealed[key] >= 1) { revealed[key] = 1; draw(1); if (done) done(); return; }
    const t0 = performance.now(), dur = 1100;
    const step = (now) => {
      revealed[key] = clamp((now - t0) / dur, 0, 1);
      draw(1 - Math.pow(1 - revealed[key], 3));
      if (revealed[key] < 1) requestAnimationFrame(step);
      else if (done) done();
    };
    requestAnimationFrame(step);
  }

  /* reparte un total entre filas con redondeo acumulado (los totales dan exactos) */
  const alloc = (total, rows) => Array.from({ length: rows }, (_, k) => Math.round((total * (k + 1)) / rows) - Math.round((total * k) / rows));

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
    return { L, A, H, H2, sleep, work, phone, phone2, free, overflow, remaining, lived: A * 52, cat, rowCount, recovered: phone - phone2 };
  }

  // ───────────────── TU CUENTA ─────────────────
  const el = {
    age: $("#age"), hours: $("#hours"), target: $("#target"),
    life: $("#life"), sleep: $("#sleep"), work: $("#work"), retire: $("#retire"),
  };
  const sticky = $("#sticky"), head = $("#life-head"), top = $("#top");
  let model = null, exampleMode = true, shown = false, revealing = false, focusCat = null, selLife = -1, tilesTouched = false;
  const CAT_OF = { 1: "lived", 2: "sleep", 3: "work", 4: "phone", 6: "rec", 5: "free" };
  const lifelineAt = (age) => D.lifeline.find((s) => age >= s.from && age <= s.to) || null;

  function compute() {
    const L = clamp(parseInt(el.life.value) || 80, 50, 100);
    const A = clamp(parseInt(el.age.value) || 0, 0, L - 1);
    const H = clamp(parseFloat(el.hours.value) || 0, 0, 24);
    return computeModel({
      L, A, H,
      S: clamp(parseFloat(el.sleep.value) || 0, 0, 16),
      W: clamp(parseFloat(el.work.value) || 0, 0, 100),
      R: clamp(parseInt(el.retire.value) || 65, A, L),
      H2: clamp(parseFloat(el.target.value), 0, H),
    });
  }

  let lifeGeo = null;
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
    const inFocus = (k) => !focusCat || (focusCat === "phone" ? k === 4 || k === 6 : CAT_OF[k] === focusCat);
    const cellAt = (r, c) => {
      const k = m.cat[r * COLS + c];
      const s = base(k);
      if (!inFocus(k)) s.alpha = (s.alpha ?? 1) * 0.13;
      return s;
    };
    lifeGeo = drawWeeks($("#grid-life"), m.L, cellAt, reveal, selLife);
    placeYou($("#life-wrap"), lifeGeo, m.A, t().you(m.A));
  }

  let resShown = null, resAnim = 0;
  function countResult(to, dur = 420) {
    const node = $("#r-phone");
    if (resShown == null || reducedMotion()) { resShown = to; node.textContent = fmtInt(to); return; }
    const from = resShown, t0 = performance.now(), id = ++resAnim;
    resShown = to;
    const step = (now) => {
      if (id !== resAnim) return;
      const p = Math.min(1, (now - t0) / dur);
      node.textContent = fmtInt(Math.round(from + (to - from) * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  /* cuántos Mundiales (cada 4 años, el próximo en un año ≡ 2 mod 4) quedan en los próximos n años */
  const worldCups = (years) => {
    let n = 0;
    for (let y = NOW_YEAR + 1; y <= NOW_YEAR + years; y++) if (y % 4 === 2) n++;
    return n;
  };

  function renderLife() {
    model = compute();
    const m = model;
    // entradas
    $("#inputs").classList.toggle("is-example", exampleMode);
    $("#example-note").hidden = shown;
    $$("#presets .pre").forEach((b) => b.setAttribute("aria-pressed", String(parseFloat(b.dataset.h) === m.H)));
    // resultado
    $("#res-lead").textContent = t().resLead(m.L);
    countResult(m.phone, revealing ? 1600 : 420);
    $("#r-human").textContent = t().resHuman(humanW(m.phone));
    const awakeH = 24 - clamp(parseFloat(el.sleep.value) || 0, 0, 16);
    $("#r-awake").innerHTML = m.H > 0 ? t().awake(fmtInt(Math.min(100, (m.H / awakeH) * 100)), fmtInt((m.H * 365) / 24)) : "";
    const remain = Math.max(1, m.remaining);
    $("#lifebar").innerHTML = [["sleep", m.sleep], ["work", m.work], ["phone", m.phone], ["free", m.free]]
      .filter(([, v]) => v > 0)
      .map(([k, v]) => `<i style="width:${(v / remain) * 100}%;background:${CAT_COLOR[k]}"></i>`).join("");
    const lf = lifelineAt(m.A);
    if (lf && lf.h != null) {
      const d = m.H - lf.h;
      const msg = Math.abs(d) < 0.25 ? t().compareSame : d > 0 ? t().compareMore(humanH(d)) : t().compareLess(humanH(-d));
      $("#r-compare").innerHTML = `${msg}<small>${t().compareRef(humanH(lf.h), `${lf.from}–${lf.to === 79 ? 80 : lf.to}`)} · <a class="src-link" href="${D.sources[lf.src].url}" target="_blank" rel="noopener">${D.sources[lf.src].name}</a></small>`;
    } else $("#r-compare").textContent = t().compareNone;
    renderDuel();
    // equivalencias que se sienten
    const yrs = m.L - m.A, cups = worldCups(yrs), pv = Math.round(m.phone / 52), pc = Math.floor(m.phone / 52 / 4);
    $("#feel").innerHTML = `<div class="feel-item"><b>${fmtInt(yrs)}</b><span>${t().feel.summers}</span></div>
      <div class="feel-item"><b>${fmtInt(cups)}</b><span>${t().feel.cups}</span></div>
      <div class="feel-item"><b>${fmtInt(m.remaining)}</b><span>${t().feel.sundays}</span></div>
      ${pv > 0 ? `<p class="feel-phone">${t().feelPhone(pv, pc)}</p>` : ""}`;
    $("#feel").setAttribute("aria-label", t().feelHead);
    $("#res-live").textContent = t().live(fmtInt(m.phone), humanW(m.phone));
    // barra fija
    $("#sticky-num").textContent = fmtInt(m.phone);
    $("#sticky-txt").textContent = t().stickyTxt;
    // fichas de la grilla
    renderTiles();
    // ¿y si bajás?
    el.target.max = String(m.H);
    $("#wi-max").textContent = humanH(m.H);
    $("#wi-q").innerHTML = t().whatifQ(humanH(m.H2));
    $("#recover").innerHTML = m.recovered > 0 ? t().recoverLine(fmtInt(m.recovered), humanW(m.recovered)) : t().recoverZero;
    syncRanges();
    if (selLife >= m.L) selLife = -1;
    renderRowLife();
    $("#grid-summary").textContent = t().gridSummary(m.A, m.L, fmtInt(m.sleep), fmtInt(m.work), fmtInt(m.phone), fmtInt(m.free));
    if (revealed.life >= 1) drawLife(1);
  }

  function renderTiles() {
    const m = model;
    const lr = $("#lived-row");
    lr.innerHTML = `<span class="sw" style="background:${COL.lived}"></span>${t().livedRow(fmtInt(m.lived))}`;
    lr.setAttribute("aria-pressed", String(focusCat === "lived"));
    $("#tiles-h").textContent = t().tilesH(fmtInt(m.remaining));
    const tiles = [["sleep", m.sleep], ["work", m.work], ["phone", m.phone], ["free", m.free]];
    $("#tiles").innerHTML = tiles.map(([k, v]) => {
      const on = focusCat === k;
      const st = on ? `background:${CAT_COLOR[k]}2e;border-color:${CAT_COLOR[k]}` : "";
      return `<button type="button" class="tile" data-cat="${k}" aria-pressed="${on}" style="${st}"><span class="sw" style="background:${CAT_COLOR[k]}"></span><b>${fmtInt(v)}</b><span>${t().labels[k]}</span></button>`;
    }).join("");
    $("#tiles").classList.toggle("has-focus", !!focusCat && focusCat !== "lived" && focusCat !== "rec");
    const rec = $("#tile-rec");
    rec.hidden = !(m.recovered > 0);
    rec.innerHTML = `<span class="sw"></span>${t().recTile(fmtInt(m.recovered), humanH(m.H2))}`;
    rec.setAttribute("aria-pressed", String(focusCat === "rec"));
    renderFocusLine();
  }

  function renderFocusLine() {
    const m = model, box = $("#focus-line");
    if (!focusCat) { box.textContent = ""; return; }
    const v = { lived: m.lived, sleep: m.sleep, work: m.work, phone: m.phone, free: m.free, rec: m.recovered }[focusCat];
    const k = focusCat === "phone" && m.phone > 0 ? Math.round(m.remaining / m.phone) : 0;
    box.innerHTML = t().focus[focusCat](humanW(v), k);
  }

  function setFocus(cat) {
    focusCat = focusCat === cat ? null : cat;
    renderTiles();
    revealed.life = 1;
    drawLife(1);
  }

  function renderRowLife() {
    const m = model, box = $("#row-info-life");
    if (m.overflow) { box.innerHTML = t().overflow; return; }
    if (selLife < 0) { box.textContent = t().tapRow; return; }
    const r = selLife;
    if (r < m.A) { box.innerHTML = t().rowLived(r); return; }
    const c = m.rowCount[r], L = t().labels;
    const dot = (k) => `<i class="d" style="background:${CAT_COLOR[k]}"></i>`;
    box.innerHTML = `<b>${r === m.A ? t().rowNow(r) : t().rowAge(r)}</b>: ${dot("sleep")}${c.s} ${L.sleep} · ${dot("work")}${c.w} ${L.work} · ${dot("phone")}${c.p + c.rec} ${L.phone} · ${dot("free")}${c.f} ${L.free}`;
  }

  function syncRanges() {
    $$('input[type="range"]').forEach((r) => r.style.setProperty("--p", ((r.value - r.min) / (r.max - r.min || 1)) * 100 + "%"));
  }

  // ───────────────── link compartido: "a tu amigo/a le lleva X" ─────────────────
  const qp = new URLSearchParams(location.search);
  const friend = qp.has("edad") || qp.has("age")
    ? (() => {
        const A = clamp(parseInt(qp.get("edad") || qp.get("age")) || 30, 0, 79), H = clamp(parseFloat(qp.get("h")) || 0, 0, 16);
        const name = (qp.get("n") || "").replace(/[<>&"]/g, "").slice(0, 24);
        return { A, H, name, phone: computeModel({ L: 80, A, H, H2: H, S: 8, W: 40, R: 65 }).phone };
      })()
    : null;
  function renderFriend() {
    if (!friend) return;
    const txt = t().friendTxt(friend.name || t().friendDefault, fmtInt(friend.phone));
    $("#friend").hidden = false;
    $("#friend-txt").innerHTML = txt;
    $("#friend-calc").hidden = !document.body.classList.contains("returning");
    $("#friend-calc-txt").innerHTML = txt;
  }
  function renderDuel() {
    const box = $("#duel");
    if (!friend || !shown) { box.hidden = true; return; }
    box.hidden = false;
    box.innerHTML = `<div><b class="red">${fmtInt(model.phone)}</b><span>${t().duelYou}</span></div><div><b>${fmtInt(friend.phone)}</b><span>${friend.name || t().friendDefault}</span></div>`;
  }

  // ───────────────── POR EDAD ─────────────────
  const LIFE_ROWS = 80;
  let activeGroup = null, selData = -1;
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
      return { fill: "#262626", alpha: k };
    };
    dataGeo = drawWeeks($("#grid-data"), LIFE_ROWS, cellAt, reveal, selData);
    placeYou($("#data-wrap"), dataGeo, Math.min(model.A, LIFE_ROWS - 1), t().youShort(model.A));
  }

  function renderRowData() {
    const box = $("#row-info-data");
    if (activeGroup && selData < 0) {
      const gr = D.groups.find((x) => x.id === activeGroup);
      const [say] = t().say[gr.id](humanH);
      box.innerHTML = `<b>${t().groups[gr.id]}</b> · ${say}`;
      return;
    }
    if (selData < 0) { box.textContent = t().tapRow; return; }
    const s = lifelineAt(selData);
    if (!s || s.h == null) { box.innerHTML = t().rowNoData(selData); return; }
    box.innerHTML = t().rowData(selData, lifeRed[selData], humanH(s.h), t().metric[s.metric]);
  }

  function renderVersus() {
    const m = model, s = lifelineAt(m.A), box = $("#versus");
    if (!s || s.h == null) { box.innerHTML = `<p class="vs-msg">${t().compareNone}</p>`; return; }
    const d = m.H - s.h;
    const msg = Math.abs(d) < 0.25 ? t().compareSame : d > 0 ? t().compareMore(humanH(d)) : t().compareLess(humanH(-d));
    const range = `${s.from}–${s.to === 79 ? "80" : s.to}`;
    box.innerHTML = `<div class="vs-item"><div class="vs-v red">${humanH(m.H)}</div><div class="vs-l">${t().duelYou}</div></div>
      <div class="vs-item"><div class="vs-v">~${humanH(s.h)}</div><div class="vs-l">${t().yearsOld(s.from, s.to === 79 ? 80 : s.to)}</div></div>
      <p class="vs-msg">${msg}</p>`;
    void range;
  }

  function renderData() {
    $("#l-total").textContent = fmtInt(lifeTotalWeeks);
    $("#l-years").textContent = t().lifeTotal(humanW(lifeTotalWeeks));
    $("#legend-data").innerHTML = [
      [`background:${COL.phone}`, t().lifePhone],
      ["background:#1c1c1c;border:1px solid #5a5a5a", t().lifeNoData],
      ["background:#262626", t().lifeRest],
    ].map(([st, l]) => `<li><span class="sw" style="${st}"></span>${l}</li>`).join("");
    renderVersus();
    renderRowData();
    if (revealed.data >= 1) drawData(1);

    $("#groups").innerHTML = D.groups.map((gr) => {
      const [say, also] = t().say[gr.id](humanH);
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
        ${w > 0 ? `<span class="g-stage">${t().stage(fmtInt(w), humanW(w))}${partial ? t().stagePartial : ""}</span>` : ""}
        <div><span class="g-src">${t().seeSources} ${on ? "▴" : "▾"}</span></div>
        <div class="g-more">${rows}</div>
      </div>`;
    }).join("");

    $("#ar-stats").innerHTML = D.argentina.map((s) => `<div><div class="stat-v">${humanH(s.v)}</div><div class="small">${t().metric[s.metric]} <span class="badge ${s.verif}">${t().verif[s.verif]}</span></div><a class="src-link" href="${D.sources[s.src].url}" target="_blank" rel="noopener">${D.sources[s.src].name}</a></div>`).join("");
    $("#caveats").innerHTML = t().caveats.map((c) => `<li>${c}</li>`).join("");
    $("#src-list").innerHTML = Object.values(D.sources)
      .filter((v, i, arr) => arr.findIndex((x) => x.url === v.url || x.name === v.name) === i)
      .map((x) => `<li><a href="${x.url}" target="_blank" rel="noopener">${x.name}</a></li>`)
      .join("");
  }

  // ───────────────── ANTES Y AHORA ─────────────────
  const TYPE_COLOR = { tvHome: "#9a9a9a", tvPerson: "#ffffff", phone: "#ef4444" };
  function renderEras() {
    $("#eras").innerHTML = D.overview.map((era) => {
      const strips = era.strips.map((s) => {
        const src = D.sources[s.src];
        const badge = s.verif !== "p" ? ` <span class="badge ${s.verif}">${t().verif[s.verif]}</span>` : "";
        const cells = Array.from({ length: 24 }, (_, i) => {
          const f = clamp(s.h - i, 0, 1);
          return `<span class="hr${s.type === "tvHome" ? " hatch" : ""}"><i style="width:${(f * 100).toFixed(0)}%;background:${TYPE_COLOR[s.type]}"></i></span>`;
        }).join("");
        return `<div class="strip"><div class="strip-label"><span class="${s.type === "phone" ? "red" : ""}">${t().types[s.type]}</span><span><span class="v${s.type === "phone" ? " red" : ""}">${humanH(s.h)}</span> <a class="src-link" href="${src.url}" target="_blank" rel="noopener" title="${src.name}">${t().srcShort}</a>${badge}</span></div>
          <div class="hours">${cells}</div></div>`;
      }).join("");
      let note = "";
      if (era.phone === "basic") note = t().basicPhone;
      if (era.year === 2025) note = t().phoneJump(humanH(1.52), humanH(4.13));
      return `<div class="era"><div class="era-head"><span class="era-year">${era.year}</span><span class="era-ago">${t().ago(NOW_YEAR - era.year)}</span></div>${strips}${note ? `<p class="era-note">${note}</p>` : ""}</div>`;
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
        node("circle", { cx: X(p[0]), cy: Y(p[1]), r: 6, fill: s.color, "pointer-events": "none" });
        const hit = node("circle", { cx: X(p[0]), cy: Y(p[1]), r: 18, fill: "transparent", class: "pt", tabindex: 0, role: "button", "aria-label": `${p[0]} · ${humanH(p[1])}` });
        const show = () => {
          const src = D.sources[p[2]];
          const badge = p[3] !== "p" ? ` <span class="badge ${p[3]}">${t().verif[p[3]]}</span>` : "";
          $("#chart-tip").innerHTML = `<b>${p[0]} · ${humanH(p[1])}</b> — ${t().series[s.id]}${badge}<br><a class="src-link" href="${src.url}" target="_blank" rel="noopener">${src.name}</a>`;
        };
        hit.addEventListener("click", show);
        hit.addEventListener("keydown", (e) => e.key === "Enter" && show());
      });
    });
    $("#legend-chart").innerHTML = D.series.map((s) => `<li><span class="sw" style="${s.dash ? `background:repeating-linear-gradient(90deg,${s.color} 0 4px,transparent 4px 7px)` : `background:${s.color}`}"></span>${t().series[s.id]}</li>`).join("");
    $("#chart-tip").textContent = t().chartTip;
  }

  // ───────────────── guía de tiempo de pantalla ─────────────────
  const UA = navigator.userAgent;
  let activeOS = /iphone|ipad|ipod/i.test(UA) ? "ios" : /samsung|sm-/i.test(UA) ? "samsung" : /xiaomi|redmi|poco/i.test(UA) ? "xiaomi" : /android/i.test(UA) ? "android" : "ios";
  function renderGuide() {
    $$(".gtab").forEach((b) => b.classList.toggle("is-on", b.dataset.os === activeOS));
    $("#guide-steps").innerHTML = t().steps[activeOS].map((s) => `<li>${s}</li>`).join("");
  }

  // ───────────────── scroll suave ─────────────────
  let scrollAnim = 0;
  function smoothScrollTo(y, dur = 900) {
    if (reducedMotion()) return window.scrollTo(0, y);
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
  const goCalc = () => smoothScrollTo($("#vida").getBoundingClientRect().top + window.scrollY - 56, 900);
  $$('a[href^="#"]').forEach((a) => a.addEventListener("click", (e) => {
    const href = a.getAttribute("href");
    if (href === "#top") { e.preventDefault(); return smoothScrollTo(0, 900); }
    const target = $(href);
    if (!target) return;
    e.preventDefault();
    smoothScrollTo(target.getBoundingClientRect().top + window.scrollY - 56, 900);
  }));

  // ───────────────── 1. inicio + video ─────────────────
  const hero = $("#hero"), video = $("#hero-video");
  const seenVideo = () => localStorage.getItem("seenVideo") === "1";
  let heroDone = false, heroStarted = false;
  function playHero() {
    const pr = video.play();
    if (pr && pr.then) pr.then(() => ($("#hero-play").hidden = true)).catch(() => ($("#hero-play").hidden = false));
  }
  function setVideoLang() {
    video.poster = `video/poster_${LANG}.jpg`;
    const src = `video/weeks_${LANG}.mp4`;
    if ($("#video-src").getAttribute("src") !== src) {
      $("#video-src").setAttribute("src", src);
      video.load();
      if (heroStarted && !heroDone) playHero();
    }
  }
  function setSoundUI() {
    const on = !video.muted;
    $("#sound").setAttribute("aria-pressed", String(on));
    $("#sound").setAttribute("aria-label", on ? t().soundOff : t().soundOn);
    $("#sound-x").toggleAttribute("hidden", on);
    $("#sound-w").toggleAttribute("hidden", !on);
  }
  const markSeen = () => localStorage.setItem("seenVideo", "1");
  function renderStartScreen() {
    $("#start-txt").textContent = t().startBtn;
    $("#start-skip").textContent = t().startSkip;
    $("#start-note").hidden = false;
  }
  /* volver a mostrar la introducción completa (para quien entró directo a su cuenta) */
  function showIntro() {
    document.body.classList.remove("returning");
    $("#intro-again").hidden = true;
    $("#friend-calc").hidden = true;
    window.scrollTo(0, 0);
    startHero();
  }
  function startHero() {
    heroStarted = true;
    heroDone = false;
    $("#hero-start").hidden = true;
    $("#hero-end").hidden = true;
    $("#hero-top").hidden = false;
    video.muted = false; // el toque del usuario permite reproducir con sonido
    video.currentTime = 0;
    setSoundUI();
    playHero();
  }
  /* al terminar o saltar el video: el cartel "¿Te animás a hacer la cuenta?" */
  function finishHero() {
    if (heroDone) return;
    heroDone = true;
    heroStarted = true;
    if (video.duration && video.currentTime >= video.duration * 0.7) markSeen();
    video.pause();
    $("#hero-start").hidden = true;
    $("#hero-top").hidden = true;
    $("#hero-play").hidden = true;
    $("#hero-end").hidden = false;
  }
  $("#start").addEventListener("click", startHero);
  $("#start-skip").addEventListener("click", () => finishHero());
  $("#sound").addEventListener("click", () => {
    video.muted = !video.muted;
    if (video.paused && !video.ended) playHero();
    setSoundUI();
  });
  $("#hero-play").addEventListener("click", () => { video.muted = false; setSoundUI(); playHero(); });
  video.addEventListener("timeupdate", () => {
    if (!video.duration) return;
    $("#hero-bar").style.transform = `scaleX(${video.currentTime / video.duration})`;
    if (video.currentTime >= video.duration * 0.7) markSeen();
  });
  video.addEventListener("ended", () => finishHero());
  $("#skip").addEventListener("click", () => finishHero());
  $("#end-go").addEventListener("click", goCalc);
  $("#end-again").addEventListener("click", startHero);
  $("#replay").addEventListener("click", showIntro);
  $("#intro-again").addEventListener("click", showIntro);

  // ───────────────── idioma ─────────────────
  function applyLang() {
    document.documentElement.lang = LANG;
    $$("[data-i18n]").forEach((n) => {
      const v = t()[n.dataset.i18n];
      if (typeof v === "string") n.textContent = v;
    });
    $$("[data-i18n-aria]").forEach((n) => {
      const v = t()[n.dataset.i18nAria];
      if (typeof v === "string") n.setAttribute("aria-label", v);
    });
    $$(".lang-btn").forEach((b) => (b.textContent = LANG === "es" ? "EN" : "ES"));
    document.title = LANG === "es" ? "4.000 semanas — ¿cuánto de tu vida se lleva el celular?" : "4,000 weeks — how much of your life does your phone take?";
    setVideoLang();
    setSoundUI();
    renderStartScreen();
    renderFriend();
    renderAll();
  }
  function renderAll() {
    renderLife();
    renderData();
    renderEras();
    renderChart();
    renderGuide();
  }

  // ───────────────── revelar el resultado ─────────────────
  const saveCalc = () => { if (shown) localStorage.setItem("calc", JSON.stringify({ a: el.age.value, h: el.hours.value })); };
  function revealResult(animate = true) {
    shown = true;
    exampleMode = false;
    $("#calc-out").hidden = false;
    $("#reveal").hidden = true;
    const out = $("#calc-out");
    out.classList.remove("reveal-anim");
    if (animate && !reducedMotion()) {
      void out.offsetWidth;
      out.classList.add("reveal-anim");
      resShown = 0; // el número sube desde 0
    }
    revealing = animate;
    renderLife();
    revealing = false;
    renderVersus();
    saveCalc();
    if (animate) smoothScrollTo(head.getBoundingClientRect().top + window.scrollY - 64, 900);
    requestAnimationFrame(onScroll);
  }
  $("#reveal").addEventListener("click", () => revealResult(true));

  // ───────────────── eventos de tu cuenta ─────────────────
  const leaveExample = () => {
    if (!exampleMode) return;
    exampleMode = false;
  };
  const onHoursChanged = () => {
    el.target.max = el.hours.value;
    el.target.value = el.hours.value; // el "¿y si bajás?" arranca sin recuperar nada
  };
  const rerender = () => {
    saveCalc();
    renderLife();
    renderVersus();
    if (revealed.data >= 1) drawData(1);
    requestAnimationFrame(onScroll);
  };
  $$(".st-btn").forEach((b) => b.addEventListener("click", () => {
    const [id, d] = b.dataset.step.split(":");
    const inp = el[id];
    inp.value = String(clamp((parseFloat(inp.value) || 0) + parseFloat(d), parseFloat(inp.min), parseFloat(inp.max)));
    leaveExample();
    if (id === "hours") onHoursChanged();
    rerender();
  }));
  el.age.addEventListener("input", () => { leaveExample(); rerender(); });
  el.age.addEventListener("change", () => { el.age.value = String(clamp(parseInt(el.age.value) || 0, 0, 79)); rerender(); });
  el.hours.addEventListener("input", () => { leaveExample(); onHoursChanged(); rerender(); });
  el.hours.addEventListener("change", () => { el.hours.value = String(clamp(parseFloat(el.hours.value) || 0, 0, 16)); onHoursChanged(); rerender(); });
  el.target.addEventListener("input", rerender);
  ["life", "sleep", "work", "retire"].forEach((k) => el[k].addEventListener("input", rerender));
  $("#presets").addEventListener("click", (e) => {
    const b = e.target.closest(".pre");
    if (!b) return;
    el.hours.value = b.dataset.h;
    leaveExample();
    onHoursChanged();
    rerender();
  });
  $("#tiles").addEventListener("click", (e) => {
    const b = e.target.closest(".tile");
    if (!b) return;
    tilesTouched = true;
    if (navigator.vibrate && (!navigator.userActivation || navigator.userActivation.hasBeenActive)) navigator.vibrate(10);
    setFocus(b.dataset.cat);
  });
  $("#lived-row").addEventListener("click", () => { tilesTouched = true; setFocus("lived"); });
  $("#tile-rec").addEventListener("click", () => { tilesTouched = true; setFocus("rec"); });
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
  $$(".lang-btn").forEach((b) => b.addEventListener("click", () => {
    LANG = LANG === "es" ? "en" : "es";
    localStorage.setItem("lang", LANG);
    applyLang();
  }));
  const toggleGroup = (b) => {
    activeGroup = activeGroup === b.dataset.g ? null : b.dataset.g;
    selData = -1;
    revealed.data = 1;
    renderData();
    if (activeGroup) $("#grid-data").scrollIntoView({ behavior: reducedMotion() ? "auto" : "smooth", block: "center" });
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
    g.fillStyle = "#a3a3a3";
    g.font = "800 38px Inter, sans-serif";
    g.fillText(t().shareKicker, 90, 170);
    g.fillStyle = "#ef4444";
    g.font = '700 220px "Space Grotesk", sans-serif';
    g.fillText(fmtInt(m.phone), 80, 390);
    g.fillStyle = "#fff";
    g.font = "800 54px Inter, sans-serif";
    g.fillText(t().shareWeeks, 90, 470);
    g.fillStyle = "#a3a3a3";
    g.font = "600 38px Inter, sans-serif";
    g.fillText(t().shareSub(humanW(m.phone), humanH(m.H)), 90, 530);
    const top = 600, bottom = 1640;
    const pitch = Math.min(15, (bottom - top) / m.L, 900 / COLS);
    const cell = pitch * 0.78, gx = (W - COLS * pitch) / 2;
    const col = { 1: COL.lived, 2: COL.sleep, 3: COL.work, 4: COL.phone, 5: COL.free, 6: COL.phone };
    for (let r = 0; r < m.L; r++) for (let k = 0; k < COLS; k++) {
      g.fillStyle = col[m.cat[r * COLS + k]];
      g.fillRect(gx + k * pitch, top + r * pitch, cell, cell);
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
    const L = t().labels;
    const items = [[COL.lived, L.lived], [COL.sleep, L.sleep], [COL.work, L.work], [COL.phone, L.phone], [COL.free, L.free]];
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
    const text = t().shareText(m.L, fmtInt(m.phone), humanW(m.phone));
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

  // ───────────────── scroll: header, video, barra fija ─────────────────
  let scrollQueued = false;
  const visible = (n, vh) => { const r = n.getBoundingClientRect(); return r.bottom > 0 && r.top < vh && r.height > 0; };
  function onScroll() {
    scrollQueued = false;
    const y = window.scrollY, vh = window.innerHeight;
    top.classList.toggle("show", y > hero.offsetHeight - 70);
    // si scrollean a mano durante el video, se pausa y queda la pantalla de fin
    if (heroStarted && !heroDone && !video.paused && y > hero.offsetHeight * 0.5) finishHero();
    // barra fija: solo con tus datos, si el resultado no está en pantalla y no hay otro "Compartir" a la vista
    const hr = head.getBoundingClientRect();
    const inCalc = $("#vida").getBoundingClientRect().top < vh * 0.85;
    const resultVisible = hr.top < vh - 80 && hr.bottom > 70;
    const shareVisible = $$("main .share-btn").some((b) => visible(b, vh));
    const show = shown && inCalc && !resultVisible && !shareVisible;
    sticky.classList.toggle("show", show);
    sticky.setAttribute("aria-hidden", String(!show));
  }
  window.addEventListener("scroll", () => {
    if (!scrollQueued) { scrollQueued = true; requestAnimationFrame(onScroll); }
  }, { passive: true });

  // la primera vez que se ve la grilla: cascada y una demo de 1,2 s de "tocá un color"
  const gio = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      if (en.target.id === "grid-life") cascade("life", drawLife, () => {
        if (tilesTouched || reducedMotion() || focusCat) return;
        setTimeout(() => {
          if (tilesTouched || focusCat) return;
          setFocus("phone");
          setTimeout(() => { if (!tilesTouched && focusCat === "phone") setFocus("phone"); }, 1200);
        }, 300);
      });
      if (en.target.id === "grid-data") cascade("data", drawData);
      gio.unobserve(en.target);
    });
  }, { threshold: 0.25 });

  let lastW = 0;
  new ResizeObserver(() => {
    const w = $("main").clientWidth;
    if (Math.abs(w - lastW) > 2) {
      lastW = w;
      if (model && revealed.life >= 1) drawLife(1);
      if (model && revealed.data >= 1) drawData(1);
    }
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
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  if (seenVideo()) {
    document.body.classList.add("returning");
    heroDone = true;
    heroStarted = true;
    $("#intro-again").hidden = false;
  }
  if (!location.hash) window.scrollTo(0, 0);
  $("#presets").innerHTML = [1, 2, 3, 4, 5, 6, 8, 10].map((h) => `<button type="button" class="pre" data-h="${h}">${h} h</button>`).join("");
  const saved = (() => { try { return JSON.parse(localStorage.getItem("calc") || "null"); } catch (_) { return null; } })();
  if (saved && saved.a != null && saved.h != null) {
    el.age.value = String(clamp(parseInt(saved.a) || 0, 0, 79));
    el.hours.value = String(clamp(parseFloat(saved.h) || 0, 0, 16));
  }
  onHoursChanged();
  applyLang();
  if (saved) revealResult(false);
  onScroll();
  gio.observe($("#grid-life"));
  gio.observe($("#grid-data"));
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { if (revealed.life >= 1) drawLife(1); if (revealed.data >= 1) drawData(1); });
})();
