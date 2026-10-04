/* 4.000 semanas — app. Vanilla JS, sin build. Datos en data.js. */
(() => {
  "use strict";
  const D = window.APP_DATA;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const clamp = (x, a, b) => Math.min(b, Math.max(a, x));

  // ───────────────── textos ─────────────────
  const T = {
    es: {
      brand: "4.000 semanas", install: "Instalar", tab1: "Tu vida", tab2: "Según los datos", tab3: "Cómo cambió",
      s1kicker: "Tu vida en semanas", s1title: "Cada cuadrado es una semana de tu vida.",
      s1lead: "Poné tu edad y cuántas horas por día usás el celular. Si sigue así, ¿cuántas semanas se lleva?",
      age: "Tu edad", hours: "Horas de celular por día", guideQ: "¿No sabés cuántas horas? Miralo en tu celular",
      guideNote: "Los nombres de los menús pueden variar según la marca y la versión del sistema. Usá el promedio diario de la última semana.",
      adv: "Ajustar supuestos (sueño, trabajo, esperanza de vida)", life: "Esperanza de vida", sleep: "Horas de sueño",
      work: "Horas de trabajo / semana", retire: "Te jubilás a los",
      advNote: "Igual que en el video: dormir = horas de sueño sobre lo que te queda; trabajo = 48 semanas por año hasta la jubilación.",
      weeksPhone: "semanas en el celular", whatif: "¿Y si bajás a…", recover1: "Recuperás", recover2: "semanas", share: "Compartir mi resultado",
      s2kicker: "Según los datos", s2title: "Una vida típica, etapa por etapa",
      s2lead: "Si en cada etapa usaras el celular lo que hoy usa la gente de esa edad, así se vería una vida de 80 años. Tocá una etapa para verla.",
      arTitle: "Argentina",
      arNote: "No hay datos confiables de horas por edad para Argentina ni para Latinoamérica: la encuesta TIC del INDEC mide si la gente usa internet, no cuántas horas.",
      cavTitle: "Cómo leer estos datos", s3kicker: "Cómo cambió", s3title: "50 años de pantallas",
      s3lead: "De la tele del living al celular en el bolsillo. Cada línea mide algo distinto, por eso no se suman.",
      s3note: "Series históricas de EE.UU. (las de internet son globales). \"Por hogar\" = horas con la tele prendida en la casa; \"por persona\" = tiempo de cada persona. Antes de 2007 no existía el smartphone.",
      footA: "Los números de cada sección enlazan a su fuente. Las cifras marcadas \"derivado\" son cuentas propias sobre la fuente; las marcadas \"verificar\" vienen de un medio que cita la fuente original.",
      footB: "Hecho a partir de los videos 4.000 semanas · Parte 1 y 2.",
      // dinámicos
      lived: "vividas", sleepL: "dormir", workL: "trabajo", phoneL: "celular", freeL: "libres", recoveredL: "recuperadas",
      lifePhone: "celular según los datos", lifeNoData: "sin dato", lifeRest: "resto de la vida",
      moreThan: (n) => `= más de ${n} ${n === 1 ? "año" : "años"} de tu vida`, about: (n) => `≈ ${n} ${n === 1 ? "año" : "años"}`,
      months: (n) => `≈ ${n} ${n === 1 ? "mes" : "meses"}`, yearsShort: (y) => `(${y} años)`,
      ofFree: (p) => `${p}% del tiempo despierto que te queda`,
      compare: (h, m, s) => `La gente de tu edad usa ~${h} h por día (${m} · ${s}).`, compareNone: "Para tu edad no hay un dato confiable de uso del celular.",
      noRecover: "Mové el control para ver cuánto recuperás.", overflow: "Con estos supuestos no te queda tiempo libre: revisá sueño y trabajo.",
      shareText: (h, w, y) => `Si sigo usando el celular ${h} h por día, se lleva ${w} semanas de mi vida (≈${y} años). ¿Y vos?`,
      copied: "Link copiado", iosInstall: "En iPhone: tocá Compartir y después \"Agregar a inicio\".",
      stage: (w, y) => `En esta etapa: ${w} semanas en el celular (${y} años)`, stagePartial: "dato parcial",
      groups: { kids: "Niños", tweens: "Preadolescentes", teens: "Adolescentes", young: "Adultos jóvenes", adults: "Adultos", seniors: "Adultos mayores" },
      yearsOld: (a, b) => `${a}–${b} años`, hPerDay: "h por día", seeMore: "Tocá para ver el detalle",
      metric: {
        phoneVideo: "solo video en celular/tablet", screenTotal: "pantalla total", screenEnt: "pantalla total (entretenimiento)",
        smartphone: "smartphone", smartphoneMeasured: "smartphone medido en el teléfono (mediana)", mobileInternet: "internet en el celular",
        internetAny: "internet, cualquier dispositivo", tv: "TV", social: "redes sociales",
      },
      notes: { pandemic: "Medido en 2021, en pandemia: probablemente infla el uso.", smallSample: "Muestra chica (~200 chicos con Android), no representativa.", noPhoneData: "Sin dato confiable de celular para esta edad." },
      verif: { d: "derivado", s: "verificar" },
      lifeTotal: (y) => `≈ ${y} años de una vida de 80, si cada etapa usara lo que hoy usa esa edad`,
      caveats: [
        "No existe un dato oficial de \"horas de celular por edad\": ningún organismo estadístico lo mide en horas. Cada etapa usa la mejor medición disponible y su métrica está indicada.",
        "La \"vida típica\" es ilustrativa: junta datos de distintas edades medidos hoy, no sigue a una misma persona en el tiempo.",
        "Internet en el celular (adultos) = horas de internet × porcentaje hecho desde el celular (GWI 2024): es un derivado autodeclarado de usuarios de internet.",
        "Chicos y adolescentes: datos de EE.UU.; adultos: promedios globales; smartphone medido: Reino Unido (Ofcom).",
      ],
      decLabel: (n) => (n === 0 ? "Hoy" : `Hace ${n} años`), daySub: "Un día de 24 horas · cada cuadrado es 1 hora",
      dayTypes: { tvHome: "TV prendida en el hogar", tvPerson: "TV por persona (ATUS)", tvPersonNielsen: "TV por persona (Nielsen)", phone: "Celular por persona", internet: "Internet, cualquier dispositivo (global)" },
      dataOf: (y) => `dato de ${y}`, noPhone: "Todavía no existía el smartphone (llegó en 2007).",
      basicPhone: "Había celulares, pero no smartphones: no hay mediciones de tiempo de uso.",
      phoneJump: (a, b) => `El celular pasó de ${a} h a ${b} h por día en 10 años.`,
      series: { tvHome: "TV por hogar · Nielsen, EE.UU.", tvPerson: "TV por persona · ATUS, EE.UU.", phone: "Celular por persona · eMarketer, EE.UU.", internet: "Internet (usuarios) · GWI, global" },
      chartTip: "Tocá un punto para ver el dato y su fuente.", smartphoneYear: "smartphone",
      steps: {
        ios: ["Abrí <b>Ajustes</b>.", "Tocá <b>Tiempo en pantalla</b>.", "Tocá <b>Ver toda la actividad de apps y sitios web</b>.", "Elegí <b>Semana</b>: arriba aparece tu <b>promedio diario</b>.", "Si está desactivado, activalo y volvé en unos días."],
        android: ["Abrí <b>Ajustes</b>.", "Entrá a <b>Bienestar digital y controles parentales</b>.", "El gráfico muestra el tiempo de hoy: tocalo para ver el detalle por día.", "Mirá los últimos 7 días y sacá un promedio."],
        samsung: ["Abrí <b>Ajustes</b>.", "Entrá a <b>Bienestar digital y control parental</b>.", "Tocá el gráfico de <b>tiempo de pantalla</b>.", "Pasá a la vista <b>semanal</b> para ver el promedio por día."],
        xiaomi: ["Abrí <b>Ajustes</b>.", "Entrá a <b>Bienestar digital y controles parentales</b> (en algunos modelos se llama <b>Tiempo de pantalla</b>).", "Tocá el gráfico para ver el detalle por día.", "Mirá los últimos 7 días y sacá un promedio."],
      },
    },
    en: {
      brand: "4,000 weeks", install: "Install", tab1: "Your life", tab2: "By the data", tab3: "How it changed",
      s1kicker: "Your life in weeks", s1title: "Each square is one week of your life.",
      s1lead: "Enter your age and how many hours a day you use your phone. If it stays that way, how many weeks does it take?",
      age: "Your age", hours: "Phone hours per day", guideQ: "Not sure how many hours? Check your phone",
      guideNote: "Menu names vary by brand and OS version. Use the daily average for the last week.",
      adv: "Adjust assumptions (sleep, work, life expectancy)", life: "Life expectancy", sleep: "Hours of sleep",
      work: "Work hours / week", retire: "You retire at",
      advNote: "Same as the video: sleep = sleep hours over what's left; work = 48 weeks a year until retirement.",
      weeksPhone: "weeks on your phone", whatif: "What if you cut down to…", recover1: "You get back", recover2: "weeks", share: "Share my result",
      s2kicker: "By the data", s2title: "A typical life, stage by stage",
      s2lead: "If at each stage you used your phone as much as people that age do today, this is what an 80-year life would look like. Tap a stage to see it.",
      arTitle: "Argentina",
      arNote: "There is no reliable hours-by-age data for Argentina or Latin America: INDEC's ICT survey measures whether people use the internet, not for how long.",
      cavTitle: "How to read this data", s3kicker: "How it changed", s3title: "50 years of screens",
      s3lead: "From the living-room TV to the phone in your pocket. Each line measures something different, so they don't add up.",
      s3note: "Historical series are US (internet series are global). \"Per household\" = hours the TV is on at home; \"per person\" = each person's time. Before 2007 there were no smartphones.",
      footA: "Every number links to its source. Figures marked \"derived\" are our own calculation on the source; figures marked \"to verify\" come from an outlet citing the original source.",
      footB: "Built from the videos 4,000 Weeks · Part 1 and 2.",
      lived: "lived", sleepL: "sleep", workL: "work", phoneL: "phone", freeL: "free", recoveredL: "recovered",
      lifePhone: "phone, by the data", lifeNoData: "no data", lifeRest: "rest of life",
      moreThan: (n) => `= more than ${n} ${n === 1 ? "year" : "years"} of your life`, about: (n) => `≈ ${n} ${n === 1 ? "year" : "years"}`,
      months: (n) => `≈ ${n} ${n === 1 ? "month" : "months"}`, yearsShort: (y) => `(${y} years)`,
      ofFree: (p) => `${p}% of the waking time you have left`,
      compare: (h, m, s) => `People your age use ~${h} h a day (${m} · ${s}).`, compareNone: "There's no reliable phone-use figure for your age.",
      noRecover: "Move the slider to see what you get back.", overflow: "With these assumptions there's no free time left: check sleep and work.",
      shareText: (h, w, y) => `If I keep using my phone ${h} h a day, it takes ${w} weeks of my life (≈${y} years). What about you?`,
      copied: "Link copied", iosInstall: "On iPhone: tap Share, then \"Add to Home Screen\".",
      stage: (w, y) => `In this stage: ${w} weeks on the phone (${y} years)`, stagePartial: "partial data",
      groups: { kids: "Children", tweens: "Tweens", teens: "Teens", young: "Young adults", adults: "Adults", seniors: "Older adults" },
      yearsOld: (a, b) => `ages ${a}–${b}`, hPerDay: "h a day", seeMore: "Tap for details",
      metric: {
        phoneVideo: "video on phone/tablet only", screenTotal: "total screen time", screenEnt: "total entertainment screen time",
        smartphone: "smartphone", smartphoneMeasured: "smartphone, measured on-device (median)", mobileInternet: "mobile internet",
        internetAny: "internet, any device", tv: "TV", social: "social media",
      },
      notes: { pandemic: "Measured in 2021, during the pandemic: likely inflated.", smallSample: "Small sample (~200 kids on Android), not representative.", noPhoneData: "No reliable phone data for this age." },
      verif: { d: "derived", s: "to verify" },
      lifeTotal: (y) => `≈ ${y} years of an 80-year life, if each stage used what that age uses today`,
      caveats: [
        "There's no official \"phone hours by age\" figure: no statistics office measures it in hours. Each stage uses the best available measure, and its metric is labelled.",
        "The \"typical life\" is illustrative: it combines different ages measured today; it doesn't follow one person over time.",
        "Mobile internet (adults) = internet hours × share done on mobile (GWI 2024): a self-reported derivation for internet users.",
        "Kids and teens: US data; adults: global averages; measured smartphone: UK (Ofcom).",
      ],
      decLabel: (n) => (n === 0 ? "Today" : `${n} years ago`), daySub: "A 24-hour day · each square is 1 hour",
      dayTypes: { tvHome: "TV on at home", tvPerson: "TV per person (ATUS)", tvPersonNielsen: "TV per person (Nielsen)", phone: "Phone per person", internet: "Internet, any device (global)" },
      dataOf: (y) => `${y} data`, noPhone: "Smartphones didn't exist yet (they arrived in 2007).",
      basicPhone: "There were cell phones, but no smartphones: no usage-time measurements.",
      phoneJump: (a, b) => `Phone use went from ${a} h to ${b} h a day in 10 years.`,
      series: { tvHome: "TV per household · Nielsen, US", tvPerson: "TV per person · ATUS, US", phone: "Phone per person · eMarketer, US", internet: "Internet (users) · GWI, global" },
      chartTip: "Tap a point to see the figure and its source.", smartphoneYear: "smartphone",
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
  const fmtInt = (n) => Math.round(n).toLocaleString(LANG === "es" ? "es-AR" : "en-US");
  const fmtDec = (n, d = 1) => n.toLocaleString(LANG === "es" ? "es-AR" : "en-US", { minimumFractionDigits: d, maximumFractionDigits: d });
  const fmtH = (h) => h.toLocaleString(LANG === "es" ? "es-AR" : "en-US", { minimumFractionDigits: 0, maximumFractionDigits: 2 });

  // ───────────────── colores y grilla genérica ─────────────────
  const COL = { lived: "#3a3a3a", sleep: "#3b82f6", work: "#f97316", phone: "#ef4444", free: "#ffffff", dim: "#ffffff" };
  const COLS = 52;

  /* Dibuja una grilla de semanas. cellAt(r, c) -> {fill, alpha, hollow, hatch}. reveal 0..1 = cascada. */
  function drawWeeks(canvas, rows, cellAt, reveal = 1) {
    const dpr = window.devicePixelRatio || 1;
    const w = canvas.clientWidth || 320;
    const margin = 26;
    const pitch = (w - margin) / COLS;
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
    g.fillStyle = "#666";
    g.textBaseline = "middle";
    for (let r = 0; r < rows; r += 10) g.fillText(String(r), 0, r * pitch + cell / 2);
    const total = rows * COLS;
    const shown = Math.floor(total * reveal);
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < COLS; c++) {
        const i = r * COLS + c;
        const x = margin + c * pitch, y = r * pitch;
        const s = cellAt(r, c);
        const a = (i < shown ? 1 : 0.07) * (s.alpha ?? 1);
        g.globalAlpha = a;
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
  }

  // cascada al entrar en pantalla (una vez por grilla)
  function cascade(key, draw) {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || revealed[key] >= 1) return draw(1);
    const t0 = performance.now(), dur = 1100;
    const step = (now) => {
      revealed[key] = clamp((now - t0) / dur, 0, 1);
      draw(1 - Math.pow(1 - revealed[key], 3));
      if (revealed[key] < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  const revealed = { life: 0, data: 0 };

  /* reparte un total entre filas con redondeo acumulado (los totales dan exactos) */
  const alloc = (total, rows) => Array.from({ length: rows }, (_, k) => Math.round((total * (k + 1)) / rows) - Math.round((total * k) / rows));

  // ───────────────── 1. TU VIDA ─────────────────
  const el = {
    age: $("#age"), hours: $("#hours"), target: $("#target"), life: $("#life"), sleep: $("#sleep"), work: $("#work"), retire: $("#retire"),
  };
  let model = null;

  function compute() {
    const L = clamp(parseInt(el.life.value) || 80, 50, 100);
    const A = clamp(parseInt(el.age.value) || 0, 0, L - 1);
    const H = clamp(parseFloat(el.hours.value) || 0, 0, 24);
    const S = clamp(parseFloat(el.sleep.value) || 0, 0, 16);
    const W = clamp(parseFloat(el.work.value) || 0, 0, 100);
    const R = clamp(parseInt(el.retire.value) || 65, A, L);
    const H2 = clamp(parseFloat(el.target.value) || 0, 0, H);
    const rowsLeft = L - A;
    const remaining = rowsLeft * 52;
    const sleep = Math.round((remaining * S) / 24);
    const work = A < R ? Math.round(((R - A) * 48 * W) / 168) : 0;
    const phone = Math.round((rowsLeft * 365 * H) / 168);
    const phone2 = Math.round((rowsLeft * 365 * H2) / 168);
    const free = Math.max(0, remaining - sleep - work - phone);
    const overflow = remaining - sleep - work - phone < 0;
    // celda por fila: dormir · trabajo · celular (lo recuperable al final) · libre
    const sRow = alloc(sleep, rowsLeft), wRow = alloc(work, Math.max(1, R - A)), pRow = alloc(phone, rowsLeft), p2Row = alloc(phone2, rowsLeft);
    const cat = new Uint8Array(L * COLS); // 1 vivida 2 dormir 3 trabajo 4 celular 6 recuperada 5 libre
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
    }
    return { L, A, H, H2, S, sleep, work, phone, phone2, free, overflow, lived: A * 52, cat, recovered: phone - phone2 };
  }

  function yearsPhrase(weeks) {
    const y = weeks / 52;
    if (y >= 1) return Number.isInteger(+y.toFixed(2)) ? t().about(Math.round(y)) : t().moreThan(Math.floor(y));
    const m = Math.round((weeks * 7) / 30.44);
    return t().months(m);
  }

  function lifelineAt(age) {
    return D.lifeline.find((s) => age >= s.from && age <= s.to) || null;
  }

  function renderLife() {
    model = compute();
    const m = model;
    $("#age-out").textContent = m.A;
    $("#hours-out").textContent = fmtH(m.H) + " h";
    el.target.max = String(m.H);
    if (parseFloat(el.target.value) > m.H) el.target.value = String(m.H);
    $("#target-out").textContent = fmtH(parseFloat(el.target.value)) + " h";
    $$('input[type="range"]').forEach((r) => r.style.setProperty("--p", ((r.value - r.min) / (r.max - r.min || 1)) * 100 + "%"));

    $("#r-phone").textContent = fmtInt(m.phone);
    $("#r-years").textContent = m.phone > 0 ? yearsPhrase(m.phone) : "";
    $("#r-recover").textContent = fmtInt(m.recovered);
    $("#r-recover-y").textContent = t().yearsShort(fmtDec(m.recovered / 52, 1));
    const lf = lifelineAt(m.A);
    const cmp = $("#r-compare");
    if (m.overflow) cmp.textContent = t().overflow;
    else if (lf && lf.h != null) cmp.textContent = t().compare(fmtH(lf.h), t().metric[lf.metric], D.sources[lf.src].name);
    else cmp.textContent = t().compareNone;

    const legend = [
      ["lived", COL.lived, m.lived], ["sleepL", COL.sleep, m.sleep], ["workL", COL.work, m.work], ["phoneL", COL.phone, m.phone2],
    ];
    if (m.recovered > 0) legend.push(["recoveredL", COL.phone, m.recovered, true]);
    legend.push(["freeL", COL.free, m.free]);
    $("#legend-life").innerHTML = legend
      .map(([k, c, v, hollow]) => `<li><span class="sw" style="${hollow ? `border:2px solid ${c}` : `background:${c}`}"></span>${t()[k]} <b>${fmtInt(v)}</b></li>`)
      .join("");

    const cv = $("#grid-life");
    const cellAt = (r, c) => {
      const k = m.cat[r * COLS + c];
      if (k === 1) return { fill: COL.lived };
      if (k === 2) return { fill: COL.sleep };
      if (k === 3) return { fill: COL.work };
      if (k === 4) return { fill: COL.phone };
      if (k === 6) return { fill: COL.phone, hollow: true };
      return { fill: COL.free, alpha: 0.92 };
    };
    if (revealed.life >= 1) drawWeeks(cv, m.L, cellAt, 1);
    else drawLifeFn = (p) => drawWeeks(cv, m.L, cellAt, p);
  }
  let drawLifeFn = null;

  // ───────────────── 2. SEGÚN LOS DATOS ─────────────────
  const LIFE_ROWS = 80;
  let activeGroup = null;
  const lifeRed = (() => {
    // celdas rojas por fila (edad) con redondeo acumulado sobre h/24 × 52
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

  function renderData() {
    $("#l-total").textContent = fmtInt(lifeTotalWeeks);
    $("#l-years").textContent = t().lifeTotal(fmtDec(lifeTotalWeeks / 52, 1));
    $("#legend-data").innerHTML = [
      [`background:${COL.phone}`, t().lifePhone],
      ["background:#1c1c1c;border:1px solid #5a5a5a", t().lifeNoData],
      ["background:rgba(255,255,255,.22)", t().lifeRest],
    ].map(([st, l]) => `<li><span class="sw" style="${st}"></span>${l}</li>`).join("");

    const g = activeGroup ? D.groups.find((x) => x.id === activeGroup) : null;
    const cellAt = (r, c) => {
      const n = lifeRed[r];
      const inGroup = !g || (r >= g.rows[0] && r <= g.rows[1]);
      const k = inGroup ? 1 : 0.28;
      if (n < 0) return { hatch: true, alpha: k };
      if (c < n) return { fill: COL.phone, alpha: k };
      return { fill: COL.dim, alpha: 0.22 * k };
    };
    const cv = $("#grid-data");
    if (revealed.data >= 1) drawWeeks(cv, LIFE_ROWS, cellAt, 1);
    else drawDataFn = (p) => drawWeeks(cv, LIFE_ROWS, cellAt, p);

    // tarjetas de etapas
    $("#groups").innerHTML = D.groups
      .map((gr) => {
        const mains = gr.stats.filter((s) => s.main);
        const mainTxt = mains.some((s) => s.v != null)
          ? mains.filter((s) => s.v != null).map((s) => fmtH(s.v)).join(" – ")
          : "—";
        const metricTxt = t().metric[mains[0].metric] + (mains[0].note ? "" : "");
        let w = 0, partial = false;
        for (let a = gr.rows[0]; a <= gr.rows[1]; a++) lifeRed[a] < 0 ? (partial = true) : (w += lifeRed[a]);
        const rows = gr.stats
          .map((s) => {
            const src = s.src ? D.sources[s.src] : null;
            const badge = s.verif && s.verif !== "p" ? `<span class="badge ${s.verif}">${t().verif[s.verif]}</span>` : "";
            const note = s.note ? `<div class="small muted">${t().notes[s.note]}</div>` : "";
            const meta = [s.range, s.region, s.year].filter(Boolean).join(" · ");
            return `<div class="stat-row"><div class="stat-v">${s.v == null ? "—" : fmtH(s.v) + " h"}</div><div>${t().metric[s.metric]}${badge}<div class="small muted">${meta}</div>${note}${src ? `<a class="src-link" href="${src.url}" target="_blank" rel="noopener">${src.name}</a>` : ""}</div></div>`;
          })
          .join("");
        return `<button type="button" class="group${activeGroup === gr.id ? " is-on" : ""}" data-g="${gr.id}" aria-expanded="${activeGroup === gr.id}">
          <div class="g-head"><span class="g-name">${t().groups[gr.id]}</span><span class="g-ages">${t().yearsOld(gr.rows[0], gr.rows[1] === 79 ? "80" : gr.rows[1])}</span></div>
          <div class="g-main"><span class="num red">${mainTxt}</span><span class="unit">${mainTxt === "—" ? "" : t().hPerDay}</span></div>
          <div class="small muted">${metricTxt}</div>
          <div class="g-stage">${w > 0 ? t().stage(fmtInt(w), fmtDec(w / 52, 1)) : ""}${partial && w > 0 ? ` · ${t().stagePartial}` : ""}</div>
          <div class="g-more">${rows}</div>
        </button>`;
      })
      .join("");

    $("#ar-stats").innerHTML = D.argentina
      .map((s) => `<div><div class="stat-v">${fmtH(s.v)} h</div><div class="small">${t().metric[s.metric]}<span class="badge ${s.verif}">${t().verif[s.verif]}</span></div><a class="src-link" href="${D.sources[s.src].url}" target="_blank" rel="noopener">${D.sources[s.src].name}</a></div>`)
      .join("");
    $("#caveats").innerHTML = t().caveats.map((c) => `<li>${c}</li>`).join("");
  }
  let drawDataFn = null;

  // ───────────────── 3. CÓMO CAMBIÓ ─────────────────
  let activeDecade = 2025;
  function renderChart() {
    const svg = $("#chart");
    const NS = "http://www.w3.org/2000/svg";
    const X = (yr) => 34 + ((yr - 1970) / 60) * 306;
    const Y = (h) => 222 - (h / 9) * 200;
    const node = (tag, attrs, text) => {
      const n = document.createElementNS(NS, tag);
      Object.entries(attrs).forEach(([k, v]) => n.setAttribute(k, v));
      if (text != null) n.textContent = text;
      svg.appendChild(n);
      return n;
    };
    svg.innerHTML = "";
    for (let h = 0; h <= 8; h += 2) {
      node("line", { x1: 34, x2: 340, y1: Y(h), y2: Y(h), class: "axis" });
      node("text", { x: 2, y: Y(h) + 3 }, `${h} h`);
    }
    for (let yr = 1975; yr <= 2025; yr += 10) node("text", { x: X(yr) - 12, y: 240 }, String(yr));
    node("line", { x1: X(2007), x2: X(2007), y1: 18, y2: 222, stroke: "#444", "stroke-dasharray": "2 4" });
    node("text", { x: X(2007) + 4, y: 26, style: "fill:#777" }, `${t().smartphoneYear} 2007`);
    D.series.forEach((s) => {
      const d = s.points.map((p, i) => `${i ? "L" : "M"}${X(p[0]).toFixed(1)},${Y(p[1]).toFixed(1)}`).join(" ");
      node("path", { d, fill: "none", stroke: s.color, "stroke-width": 2.5, "stroke-dasharray": s.dash || "none", "stroke-linecap": "round" });
      s.points.forEach((p) => {
        const c = node("circle", { cx: X(p[0]), cy: Y(p[1]), r: 5, fill: s.color, class: "pt", tabindex: 0 });
        const show = () => {
          const src = D.sources[p[2]];
          const badge = p[3] !== "p" ? ` <span class="badge ${p[3]}">${t().verif[p[3]]}</span>` : "";
          $("#chart-tip").innerHTML = `<b>${p[0]} · ${fmtH(p[1])} h</b> — ${t().series[s.id]}${badge}<br><a class="src-link" href="${src.url}" target="_blank" rel="noopener">${src.name}</a>`;
        };
        c.addEventListener("click", show);
        c.addEventListener("keydown", (e) => e.key === "Enter" && show());
      });
    });
    $("#legend-chart").innerHTML = D.series
      .map((s) => `<li><span class="sw" style="background:${s.color}${s.dash ? ";background:repeating-linear-gradient(90deg,#8a8a8a 0 4px,transparent 4px 7px)" : ""}"></span>${t().series[s.id]}</li>`)
      .join("");
    let tip = $("#chart-tip");
    if (!tip) {
      tip = document.createElement("p");
      tip.id = "chart-tip";
      tip.className = "small muted";
      tip.style.marginTop = "10px";
      $(".chart-card").appendChild(tip);
    }
    tip.textContent = t().chartTip;
  }

  function renderDecades() {
    $("#decade-pick").innerHTML = D.decades
      .map((d) => `<button type="button" class="dbtn${d.year === activeDecade ? " is-on" : ""}" data-y="${d.year}"><small>${t().decLabel(2025 - d.year)}</small><b>${d.year}</b></button>`)
      .join("");
    const on = $("#decade-pick .dbtn.is-on");
    if (on) $("#decade-pick").scrollLeft = on.offsetLeft - $("#decade-pick").offsetLeft - 40;
    const d = D.decades.find((x) => x.year === activeDecade);
    const colorOf = { tvHome: "#8a8a8a", tvPerson: "#ffffff", tvPersonNielsen: "#d4d4d4", phone: "#ef4444", internet: "#3b82f6" };
    const rows = d.items
      .map((it) => {
        const src = D.sources[it.src];
        const badge = it.verif !== "p" ? `<span class="badge ${it.verif}">${t().verif[it.verif]}</span>` : "";
        const cells = Array.from({ length: 24 }, (_, i) => {
          const f = clamp(it.h - i, 0, 1);
          return `<span class="hr${it.type === "tvHome" ? " hatch" : ""}"><i style="width:${(f * 100).toFixed(0)}%;background:${colorOf[it.type]}"></i></span>`;
        }).join("");
        const extra = it.yearNote ? ` <span class="muted small">(${t().dataOf(it.yearNote)})</span>` : "";
        return `<div class="day-row"><div class="day-label"><span>${t().dayTypes[it.type]}${extra}${badge}</span><span class="stat-v">${fmtH(it.h)} h</span></div>
          <div class="hours">${cells}</div>
          <a class="src-link" href="${src.url}" target="_blank" rel="noopener">${src.name}</a></div>`;
      })
      .join("");
    let note = "";
    if (d.phone === "none") note = `<div class="nophone">${t().noPhone}</div>`;
    if (d.phone === "basic") note = `<div class="nophone">${t().basicPhone}</div>`;
    if (d.year === 2025) note = `<div class="nophone">${t().phoneJump(fmtH(1.52), fmtH(4.13))}</div>`;
    $("#day-card").innerHTML = `<div class="day-title">${d.year}</div><div class="day-sub">${t().daySub}</div>${rows}
      <div class="hours-axis"><span>0 h</span><span>12 h</span><span>24 h</span></div>${note}`;
  }

  // ───────────────── guía de tiempo de pantalla ─────────────────
  let activeOS = /iphone|ipad|ipod/i.test(navigator.userAgent) ? "ios" : /samsung|sm-/i.test(navigator.userAgent) ? "samsung" : /xiaomi|redmi|poco|mi /i.test(navigator.userAgent) ? "xiaomi" : /android/i.test(navigator.userAgent) ? "android" : "ios";
  function renderGuide() {
    $$(".gtab").forEach((b) => b.classList.toggle("is-on", b.dataset.os === activeOS));
    $("#guide-steps").innerHTML = t().steps[activeOS].map((s) => `<li>${s}</li>`).join("");
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
    renderAll();
  }
  function renderAll() {
    renderLife();
    renderData();
    renderChart();
    renderDecades();
    renderGuide();
    if (revealed.life >= 1 && drawLifeFn) drawLifeFn(1);
  }

  // ───────────────── eventos ─────────────────
  ["age", "hours", "target", "life", "sleep", "work", "retire"].forEach((k) => el[k].addEventListener("input", () => {
    if (k === "hours") { el.target.max = el.hours.value; el.target.value = String(Math.floor(parseFloat(el.hours.value) * 2) / 4); }
    renderLife();
    if (drawLifeFn && revealed.life < 1) { revealed.life = 1; drawLifeFn(1); }
  }));
  $("#lang").addEventListener("click", () => {
    LANG = LANG === "es" ? "en" : "es";
    localStorage.setItem("lang", LANG);
    applyLang();
  });
  $("#groups").addEventListener("click", (e) => {
    const b = e.target.closest(".group");
    if (!b || e.target.closest("a")) return;
    activeGroup = activeGroup === b.dataset.g ? null : b.dataset.g;
    revealed.data = 1;
    renderData();
    if (activeGroup) $("#grid-data").scrollIntoView({ behavior: "smooth", block: "center" });
  });
  $("#decade-pick").addEventListener("click", (e) => {
    const b = e.target.closest(".dbtn");
    if (!b) return;
    activeDecade = +b.dataset.y;
    renderDecades();
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
    toast._t = setTimeout(() => n.classList.remove("show"), 2600);
  }
  $("#share").addEventListener("click", async () => {
    const m = model;
    const url = new URL(location.href);
    url.hash = "";
    url.search = `?edad=${m.A}&h=${m.H}`;
    const text = t().shareText(fmtH(m.H), fmtInt(m.phone), fmtDec(m.phone / 52, 1));
    if (navigator.share) {
      try { await navigator.share({ title: t().brand, text, url: url.toString() }); } catch (_) { /* cancelado */ }
    } else {
      await navigator.clipboard.writeText(`${text} ${url}`);
      toast(t().copied);
    }
  });

  // pestañas: resaltar la sección visible
  const tabs = $$(".tab");
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) tabs.forEach((tb) => tb.classList.toggle("is-on", tb.getAttribute("href") === "#" + en.target.id));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  $$(".sec").forEach((s) => io.observe(s));

  // cascada de cada grilla al entrar en pantalla
  const gio = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      if (en.target.id === "grid-life" && drawLifeFn) cascade("life", drawLifeFn);
      if (en.target.id === "grid-data" && drawDataFn) cascade("data", drawDataFn);
      gio.unobserve(en.target);
    });
  }, { threshold: 0.15 });

  // redibujar al cambiar el ancho
  let lastW = 0;
  new ResizeObserver(() => {
    const w = $("main").clientWidth;
    if (Math.abs(w - lastW) > 2) { lastW = w; renderLife(); renderData(); if (drawLifeFn && revealed.life >= 1) drawLifeFn(1); }
  }).observe($("main"));

  // instalar como app
  let deferred = null;
  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent) && !window.MSStream;
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

  // parámetros compartidos: ?edad=30&h=4
  const qp = new URLSearchParams(location.search);
  if (qp.has("edad") || qp.has("age")) el.age.value = clamp(parseInt(qp.get("edad") || qp.get("age")) || 30, 0, 79);
  if (qp.has("h")) el.hours.value = clamp(parseFloat(qp.get("h")) || 4, 0, 14);
  el.target.value = String(Math.floor(parseFloat(el.hours.value) * 2) / 4);

  // render inmediato; cuando cargan las fuentes se redibujan los canvas (no depender de fonts.ready:
  // en algunos navegadores queda pendiente)
  applyLang();
  gio.observe($("#grid-life"));
  gio.observe($("#grid-data"));
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => renderAll());
})();
