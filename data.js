/* Datos de la app, curados desde research/datos.json (cita literal y URL de cada cifra ahí).
   Valores en horas por día. verif: "p" = fuente primaria · "d" = derivado (cuenta propia sobre la primaria)
   · "s" = secundaria (la primaria estaba bloqueada; verificar antes de publicar). */
window.APP_DATA = {
  sources: {
    cs08: { name: "Common Sense Census: Kids Zero to Eight (2025)", url: "https://www.commonsensemedia.org/sites/default/files/research/report/2025-common-sense-census-web-2.pdf" },
    cs818: { name: "Common Sense Census: Tweens and Teens (2021)", url: "https://www.commonsensemedia.org/sites/default/files/research/report/8-18-census-integrated-report-final-web_0.pdf" },
    csPhone: { name: "Common Sense / U. Michigan, Constant Companion (2023)", url: "https://www.commonsensemedia.org/sites/default/files/research/report/2023-cs-smartphone-research-report_final-for-web.pdf" },
    gwi: { name: "DataReportal / GWI, Digital 2025 Global Overview", url: "https://datareportal.com/reports/digital-2025-global-overview-report" },
    gwiConn: { name: "DataReportal / GWI, Digital 2025 (slide 68–71)", url: "https://datareportal.com/reports/digital-2025-sub-section-ever-more-connected" },
    ofcom: { name: "Ofcom, Online Nation 2025", url: "https://www.ofcom.org.uk/siteassets/resources/documents/research-and-data/online-research/online-nation/2025/online-nations-report-2025.pdf" },
    atus25: { name: "US BLS, American Time Use Survey 2025", url: "https://www.bls.gov/news.release/atus.t11a.htm" },
    atus05: { name: "US BLS, American Time Use Survey 2005", url: "https://www.bls.gov/news.release/History/atus_07272006.txt" },
    atus15: { name: "US BLS, American Time Use Survey 2015", url: "https://www.bls.gov/news.release/archives/atus_06242016.htm" },
    atusNow: { name: "US BLS, American Time Use Survey 2025", url: "https://www.bls.gov/news.release/atus.nr0.htm" },
    nielsen82: { name: "Nielsen Report on Television 1982", url: "https://www.worldradiohistory.com/Archive-Ratings-Documents/Nielsen-TV-1982.pdf" },
    nielsen00: { name: "Nielsen 2000 Report on Television", url: "https://www.worldradiohistory.com/Archive-Ratings-Documents/Nielsen-2000-Report-on-Television.pdf" },
    nielsen06: { name: "Nielsen (2006), vía tvsmarter.com", url: "https://tvsmarter.com/documents/stats.html" },
    nielsen06p: { name: "Nielsen (2006), vía WIS News 10", url: "https://www.wistv.com/story/5441215/more-tvs-than-people-in-the-average-american-home/" },
    emk15: { name: "eMarketer, Mobile Trends Roundup (2015)", url: "https://www.emarketer.com/public_media/docs/eMarketer_Roundup_Mobile_Advertising_Marketing_Trends.pdf" },
    emk25: { name: "eMarketer 2025, vía The Desk", url: "https://thedesk.net/2025/07/emarketer-time-spent-digital-media-2025-survey-doordash/" },
    drAR: { name: "DataReportal, Digital 2025: Argentina", url: "https://datareportal.com/reports/digital-2025-argentina" },
  },

  /* Sección 2: grupos de edad. rows = años de vida que ocupa el grupo en la grilla [desde, hasta]. */
  groups: [
    {
      id: "kids", rows: [0, 7],
      stats: [
        { v: 0.57, metric: "phoneVideo", range: "0–8", region: "US", year: 2024, src: "cs08", verif: "p", main: true },
        { v: 2.45, metric: "screenTotal", range: "0–8", region: "US", year: 2024, src: "cs08", verif: "p" },
        { v: 3.47, metric: "screenTotal", range: "5–8", region: "US", year: 2024, src: "cs08", verif: "p" },
      ],
    },
    {
      id: "tweens", rows: [8, 12],
      stats: [
        { v: null, metric: "smartphone", range: "8–12", note: "noPhoneData", main: true },
        { v: 5.55, metric: "screenEnt", range: "8–12", region: "US", year: 2021, src: "cs818", verif: "p", note: "pandemic" },
      ],
    },
    {
      id: "teens", rows: [13, 17],
      stats: [
        { v: 4.5, metric: "smartphoneMeasured", range: "11–17", region: "US", year: 2023, src: "csPhone", verif: "p", note: "smallSample", main: true },
        { v: 8.65, metric: "screenEnt", range: "13–18", region: "US", year: 2021, src: "cs818", verif: "p", note: "pandemic" },
      ],
    },
    {
      id: "young", rows: [18, 34],
      stats: [
        { v: 4.5, metric: "mobileInternet", range: "16–24", region: "global", year: 2024, src: "gwi", verif: "d", main: true },
        { v: 4.18, metric: "mobileInternet", range: "25–34", region: "global", year: 2024, src: "gwi", verif: "d", main: true },
        { v: 5.08, metric: "smartphone", range: "18–24", region: "UK", year: 2025, src: "ofcom", verif: "s" },
        { v: 4.53, metric: "smartphone", range: "25–34", region: "UK", year: 2025, src: "ofcom", verif: "s" },
      ],
    },
    {
      id: "adults", rows: [35, 64],
      stats: [
        { v: 3.75, metric: "mobileInternet", range: "35–44", region: "global", year: 2024, src: "gwi", verif: "d", main: true },
        { v: 3.36, metric: "mobileInternet", range: "45–54", region: "global", year: 2024, src: "gwi", verif: "d", main: true },
        { v: 2.84, metric: "mobileInternet", range: "55–64", region: "global", year: 2024, src: "gwi", verif: "d", main: true },
        { v: 6.67, metric: "internetAny", range: "35–44", region: "global", year: 2024, src: "gwiConn", verif: "p" },
      ],
    },
    {
      id: "seniors", rows: [65, 79],
      stats: [
        { v: 1.39, metric: "mobileInternet", range: "65+", region: "global", year: 2024, src: "gwi", verif: "d", main: true },
        { v: 4.05, metric: "internetAny", range: "65+", region: "global", year: 2024, src: "gwiConn", verif: "p" },
        { v: 4.28, metric: "tv", range: "65+", region: "global", year: 2024, src: "gwi", verif: "p" },
      ],
    },
  ],

  /* "Una vida típica": h/día de celular para cada edad, con la mejor métrica disponible de su franja. */
  lifeline: [
    { from: 0, to: 7, h: 0.57, metric: "phoneVideo", src: "cs08", verif: "p" },
    { from: 8, to: 10, h: null, metric: "smartphone", note: "noPhoneData" },
    { from: 11, to: 15, h: 4.5, metric: "smartphoneMeasured", src: "csPhone", verif: "p" },
    { from: 16, to: 24, h: 4.5, metric: "mobileInternet", src: "gwi", verif: "d" },
    { from: 25, to: 34, h: 4.18, metric: "mobileInternet", src: "gwi", verif: "d" },
    { from: 35, to: 44, h: 3.75, metric: "mobileInternet", src: "gwi", verif: "d" },
    { from: 45, to: 54, h: 3.36, metric: "mobileInternet", src: "gwi", verif: "d" },
    { from: 55, to: 64, h: 2.84, metric: "mobileInternet", src: "gwi", verif: "d" },
    { from: 65, to: 79, h: 1.39, metric: "mobileInternet", src: "gwi", verif: "d" },
  ],

  argentina: [
    { v: 8.73, metric: "internetAny", year: 2024, src: "drAR", verif: "s" },
    { v: 3.08, metric: "social", year: 2024, src: "drAR", verif: "s" },
  ],

  /* Sección 3: series históricas (no se suman entre sí: miden cosas distintas). */
  series: [
    { id: "tvHome", color: "#8a8a8a", dash: "6 6", region: "US", points: [[1975, 6.18, "nielsen82", "p"], [1985, 7.17, "nielsen00", "p"], [1995, 7.28, "nielsen00", "p"], [2005, 8.23, "nielsen06", "s"]] },
    { id: "tvPerson", color: "#ffffff", region: "US", points: [[2005, 2.58, "atus05", "p"], [2015, 2.8, "atus15", "p"], [2025, 2.61, "atusNow", "p"]] },
    { id: "phone", color: "#ef4444", region: "US", points: [[2015, 1.52, "emk15", "p"], [2025, 4.13, "emk25", "s"]] },
    { id: "internet", color: "#3b82f6", region: "global", points: [[2015, 6.33, "gwiConn", "p"], [2024, 6.63, "gwi", "p"]] },
  ],

  /* "Un día" por década: la mejor medición por persona disponible (hogar solo cuando no hay otra). */
  decades: [
    { year: 1975, items: [{ type: "tvHome", h: 6.18, src: "nielsen82", verif: "p" }], phone: "none" },
    { year: 1985, items: [{ type: "tvHome", h: 7.17, src: "nielsen00", verif: "p" }], phone: "none" },
    { year: 1995, items: [{ type: "tvHome", h: 7.28, src: "nielsen00", verif: "p" }, { type: "tvPersonNielsen", h: 4.03, src: "nielsen00", verif: "d", yearNote: 1999 }], phone: "none" },
    { year: 2005, items: [{ type: "tvPerson", h: 2.58, src: "atus05", verif: "p" }, { type: "tvPersonNielsen", h: 4.58, src: "nielsen06p", verif: "s" }], phone: "basic" },
    { year: 2015, items: [{ type: "tvPerson", h: 2.8, src: "atus15", verif: "p" }, { type: "phone", h: 1.52, src: "emk15", verif: "p" }, { type: "internet", h: 6.33, src: "gwiConn", verif: "p", region: "global" }] },
    { year: 2025, items: [{ type: "tvPerson", h: 2.61, src: "atusNow", verif: "p" }, { type: "phone", h: 4.13, src: "emk25", verif: "s" }, { type: "internet", h: 6.63, src: "gwi", verif: "p", region: "global", yearNote: 2024 }] },
  ],
};
