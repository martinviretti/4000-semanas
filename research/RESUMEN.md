# Datos para "tu vida en semanas" — resumen de research

Investigado: 2026-10-04. Datos completos con cita literal y URL en `datos.json`.
Valores en **horas por día** (h:mm convertido a decimal). Cuando la fuente separa mujeres y hombres, el valor es el promedio simple de los dos.

**Nivel de verificación**
- **P-texto**: cita copiada del PDF o HTML original.
- **P-gráfico**: cita transcripta de un slide o gráfico de la fuente original.
- **Sec.**: la fuente original estaba bloqueada (403/Cloudflare/paywall/visor JS), así que la cita sale de un medio que la cita. **Hay que verificarla antes de publicar.**
- **Deriv.**: es una cuenta mía. La cuenta está en `notas`.

---

## Dataset 1 — Uso diario por grupo de edad

### Tabla recomendada para la app (una métrica "celular" por grupo)

| Grupo | Rango | Región | Métrica | h/día | Año | Fuente | Verif. |
|---|---|---|---|---|---|---|---|
| Niños | 0-8 | US | pantalla total | 2,45 | 2024 | Common Sense Census 0-8 (2025) | P-texto |
| Niños | 5-8 | US | pantalla total | 3,47 | 2024 | Common Sense Census 0-8 (2025) | P-texto |
| Niños (tweens) | 8-12 | US | pantalla total (entretenimiento) | 5,55 | 2021 | Common Sense Census 8-18 (2021) | P-texto |
| Adolescentes | 13-18 | US | pantalla total (entretenimiento) | 8,65 | 2021 | Common Sense Census 8-18 (2021) | P-texto |
| Adolescentes | 11-17 | US | **smartphone (medido, mediana)** | 4,5 | 2022-23 | Common Sense "Constant Companion" (2023) | P-texto |
| Adultos jóvenes | 18-24 | UK | **smartphone** | 5,08 | 2025 | Ofcom Online Nation 2025 | Sec. |
| Adultos jóvenes | 25-34 | UK | **smartphone** | 4,53 | 2025 | Ofcom Online Nation 2025 | Sec. |
| Adultos jóvenes | 16-24 | global | internet móvil | 4,50 | 2024 | DataReportal/GWI 2025 | Deriv. |
| Adultos jóvenes | 25-34 | global | internet móvil | 4,18 | 2024 | DataReportal/GWI 2025 | Deriv. |
| Adultos | 35-44 | global | internet móvil | 3,75 | 2024 | DataReportal/GWI 2025 | Deriv. |
| Adultos | 45-54 | global | internet móvil | 3,36 | 2024 | DataReportal/GWI 2025 | Deriv. |
| Adultos | 55-64 | global | internet móvil | 2,84 | 2024 | DataReportal/GWI 2025 | Deriv. |
| Adultos mayores | 65+ | global | internet móvil | 1,39 | 2024 | DataReportal/GWI 2025 | Deriv. |

Cómo sale "internet móvil" (Deriv.): tiempo diario de internet por edad y sexo (slide 71) × % de ese tiempo hecho en el móvil (slide 76), ambos de GWI Q3 2024. Ejemplo para 16-24: mujeres 455 min × 62,5% = 284,4 y hombres 431 × 59,3% = 255,6. El promedio da 270 min, o sea 4,50 h.

### Internet en cualquier dispositivo, por edad

| Rango | Global (GWI, usuarios de internet, Q3 2024) | UK (Ofcom, mayo 2025) |
|---|---|---|
| 16-24 / 18-24 | 7,38 | 6,33 |
| 25-34 | 7,25 | — |
| 35-44 | 6,67 | — |
| 45-54 | 6,09 | — |
| 55-64 | 5,33 | — |
| 65+ | 4,05 | 3,33 |
| Todos | 6,63 (16+) | 4,50 (18+) |

### TV por edad (como comparación)

| Rango | Global GWI (TV de cualquier tipo, autodeclarado) | Rango ATUS | US ATUS 2025 (TV como actividad principal) |
|---|---|---|---|
| 16-24 | 2,75 | 15-19 / 20-24 | 1,48 / 2,07 |
| 25-34 | 3,34 | 25-34 | 1,89 |
| 35-44 | 3,18 | 35-44 | 1,76 |
| 45-54 | 3,37 | 45-54 | 2,26 |
| 55-64 | 3,44 | 55-64 | 3,06 |
| 65+ | 4,28 | 65-74 / 75+ | 4,20 / 4,43 |

ATUS también trae "juegos y computadora por ocio": 1,53 h a los 15-19 años, 0,26 h a los 55-64. Esa categoría **no** mide el uso del celular.

### Argentina

| Métrica | h/día | Año | Fuente | Verif. |
|---|---|---|---|---|
| Internet, cualquier dispositivo (16+) | 8,73 (8:44) | 2024 | DataReportal Digital 2025 Argentina, vía Infobae | Sec. |
| Redes sociales | 3,08 (3:05) | 2024 | ídem | Sec. |
| Medios online, suma simple | 6,77 (47:23/semana ÷ 7) | 2025 | DataReportal Digital 2026 Global, slide 75 | P-gráfico + Deriv. |

**No hay dato confiable por edad para Argentina ni LATAM.** Tampoco conseguí tiempo en el celular para Argentina.

---

## Dataset 2 — Tiempo de pantalla por década

Casi todo lo histórico es **EE.UU.** Ojo: Nielsen y ATUS miden cosas distintas, así que no se pueden mezclar en una misma línea.
- **Nielsen hogar**: horas que el televisor del hogar está prendido.
- **Nielsen persona**: TV prendida con la persona presente (people meter).
- **ATUS**: diario de tiempo, cuenta solo la TV como actividad principal. Por eso da mucho menos.

| Año | TV | PC / internet | Celular |
|---|---|---|---|
| 1975 | **6,18 h/hogar** (Nielsen 1975-76) P-gráfico | sin dato | sin dato (no existía) |
| 1985 | **7,17 h/hogar** (Nielsen 1985-86) P-texto | sin dato | sin dato |
| 1995 | **7,28 h/hogar** (Nielsen 1995-96) P-texto · 4,03 h/persona (Nielsen, oct 1999, de 28:13/semana) Deriv. | sin dato | sin dato |
| 2005 | 8,23 h/hogar (Nielsen 2005-06) Sec. · 4,58 h/persona (Nielsen) Sec. · **2,58 h/persona (ATUS)** P-texto | sin dato | sin dato |
| 2015 | **2,8 h/persona (ATUS)** P-texto | 0,42 h (ATUS, juegos y PC por ocio) P-texto · global: 6,33 h de internet en cualquier dispositivo (GWI, usuarios 16-64) P-gráfico | **1,52 h** (eMarketer, celular sin llamadas, adultos) P-texto |
| 2024/25 | **2,61 h/persona (ATUS 2025)** P-texto · global 3,22 h (GWI 2024) P-texto | 0,62 h (ATUS 2025) P-texto · global: 6,63 h de internet (GWI 2024) P-texto | US ~4,13 h (eMarketer 2025, móvil con tablets) Deriv./Sec. · global 3,77 h de internet móvil (GWI 2024) P-texto |

Series que tienen coherencia interna y se pueden graficar:
- **TV por hogar, Nielsen US**: 6:11 (1975) → 7:10 (1985) → 7:17 (1995) → 8:14 (2005).
- **TV por persona, ATUS US**: 2,58 (2005) → 2,8 (2015) → 2,61 (2025).
- **Internet de usuarios, GWI global**: 6:20 (2015) → 6:38 (2024).
- **Celular US, eMarketer**: 1:31 (2015) → ~4:08 (2025, derivado y con tablets).

---

## Limitaciones principales

1. **No hay un "tiempo en el smartphone" oficial por edad.** Ningún organismo estadístico (INDEC, BLS, Eurostat, CDC) lo mide en horas. Para adultos usé internet móvil derivado de GWI, que es autodeclarado y cubre solo usuarios de internet, y Ofcom, que es medición pasiva pero solo del Reino Unido.
2. **Las métricas cambian según el grupo.** En chicos la cifra es pantalla total de entretenimiento; en adolescentes es smartphone medido sobre una muestra chica; en adultos es internet móvil o smartphone de UK. Si la app las pone lado a lado, cada grupo tiene que llevar su etiqueta de métrica.
3. **Common Sense 2021 se midió en pandemia**, así que probablemente infla las cifras de tweens y teens. El 2019 daba 4:44 y 7:22.
4. **Lo de Ofcom y Argentina es secundario.** Las fuentes originales estaban bloqueadas (Cloudflare o visor Adobe). Hay que verificarlo a mano antes de publicar.
5. **Lo histórico es solo EE.UU.** y mezcla unidades (hogar vs. persona). No hay datos por persona de PC ni de celular antes de 2015 que se puedan citar.
6. **GWI cambió su metodología** en 2023 y en Q4 2024. Las series largas tienen cortes.
7. **No sumar tipos para armar un "total".** Hay multitarea y las fuentes son distintas. Si la app muestra un total, tiene que aclarar que es una suma ilustrativa.
