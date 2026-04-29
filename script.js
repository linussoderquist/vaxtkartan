const species = [
  {
    id: "guckusko",
    name: "Guckusko",
    latin: "Cypripedium calceolus",
    group: "Växter",
    subgroup: "Orkidé",
    family: "Orchidaceae",
    flowering: "Juni – juli",
    status: "Fridlyst i hela Sverige",
    signalLevel: 3,
    flags: ["Alla", "Växter", "Orkidéer", "Fridlyst", "Signalart"],
    habitat: "Äldre, fuktiga skogar med kalkrik mark",
    distribution: "Förekommer spritt i Sverige, främst där marken är kalkrik. Arten är lokalt sällsynt och ofta knuten till äldre, halvöppna skogsmiljöer.",
    description: "Guckuskon är en av våra mest karismatiska orkidéer. Den stora gula läppen fungerar som en tillfällig fälla för insekter, som leds ut förbi pollinierna och därmed hjälper till med pollineringen.",
    ecology: "Arten är beroende av rätt markkemi, fungerande mykorrhizasvampar och stabila växtplatser. Den kan finnas kvar länge på samma plats men är känslig för tramp, igenväxning och förändrad hydrologi.",
    lookFor: ["Stor gul toffelformad blomläpp", "Brunröda kalkblad", "Breda veckade blad", "Ofta i kalkpåverkad skog"],
    viewerUrl: "https://superspl.at/s?id=b46fcc5b",
    localImage: "./assets/Cyp_cal.png",
    accent: "yellow",
    illustrationClass: "guckusko"
  },
  {
    id: "tallticka",
    name: "Tallticka",
    latin: "Porodaedalea pini",
    group: "Svampar",
    subgroup: "Ticka",
    family: "Hymenochaetaceae",
    flowering: "Flerårig fruktkropp",
    status: "Signalart",
    signalLevel: 1,
    flags: ["Alla", "Svampar", "Signalart", "Tall", "Vedlevande"],
    habitat: "Gamla levande tallar, ofta i äldre tallskogar",
    distribution: "Finns främst i landskap där det fortfarande finns gamla tallar. Den är vanligast i äldre barrskogsmiljöer men saknas i många brukade bestånd.",
    description: "Talltickan är en flerårig ticka som växer på levande tallar. Den är ofta diskret men viktig eftersom den berättar något om skogens ålder, kontinuitet och förekomsten av gamla träd.",
    ecology: "Svampen orsakar kärnröta i tall och skapar livsmiljöer för andra arter. Den är därför både en art i sig och en ekologisk motor i gamla tallmiljöer.",
    lookFor: ["Hård hovformad fruktkropp", "Växer på levande tall", "Ofta högt upp på stammen", "Kopplad till gamla tallar"],
    viewerUrl: "https://superspl.at/s?id=22d49954",
    localImage: "./assets/Por_pin.png",
    accent: "green",
    illustrationClass: "tallticka"
  },
  {
    id: "lunglav",
    name: "Lunglav",
    latin: "Lobaria pulmonaria",
    group: "Lavar",
    subgroup: "Bladlav",
    family: "Lobariaceae",
    flowering: "Flerårig lavbål",
    status: "Signalart",
    signalLevel: 2,
    flags: ["Alla", "Lavar", "Signalart", "Lövträd", "Fuktig skog"],
    habitat: "Stammar av äldre lövträd och ibland klippor i fuktiga, halvöppna miljöer",
    distribution: "Lunglav förekommer från Skåne till nordligaste Sverige, men ojämnt fördelat. Den har flest lokaler i nederbördsrika västra och sydvästra Sverige samt i Norrlands kust- och inland. Arten är i dag sparsam i landskapet och starkt knuten till gamla, ej slutavverkade skogar.",
    description: "Lunglav är en stor, karaktäristisk bladlav med djupt inskurna lober och ett nätlikt mönster av åsar och gropar på bålytan. Den är rent grön i väta men blir brun till gråbrun i torrt tillstånd.",
    ecology: "Arten växer främst på äldre lövträd i miljöer med hög och jämn luftfuktighet. I södra och mellersta Sverige finns den ofta på ädellövträd och asp, medan den längre norrut även växer på sälg, asp, rönn och klippor. Den gynnas av gamla lövträd, sena successioner efter brand och fuktiga skogsmiljöer.",
    lookFor: ["Stor bladlav med djupt inskurna lober", "Grön i väta, brun eller gråbrun i torka", "Nätlikt mönster av åsar och gropar", "Växer ofta på äldre lövträd i fuktiga miljöer"],
    viewerUrl: "https://superspl.at/s?id=212eb1fd",
    localImage: "./assets/Pul_lob.png",
    accent: "green",
    illustrationClass: "lunglav"
  },
  {
  id: "tibast",
  name: "Tibast",
  latin: "Daphne mexereum",
  group: "Växter", // eller "Svampar"
  subgroup: "Kärlväxt", // t.ex. "Ticka", "Kärlväxt", "Mossa"
  family: "Thymelaeaceae",
  flowering: "april", // eller annan säsongsinfo
  status: "Signalart",
  signalLevel: 3, // 1 = lägst, 2 = mellan, 3 = högst
  flags: ["Växter", "Signalart", "Blomväxt"],
  habitat: "Mullrika, friska till fuktiga skogar, särskilt lundar, kalkbarrskogar, lövträdslundar, bäckraviner och sluttningar. Gillar ofta kalkrik mark.",
  distribution: "Finns spridd i stora delar av Sverige men är inte vanlig. Mest typisk i kalkrika trakter, bland annat i södra Sverige, Uppland och Jämtlands kambrosilurområden.",
  description: "Tibast är en liten, vacker men mycket giftig buske som blommar tidigt på våren med rosa, väldoftande blommor direkt på bar kvist. Senare får den klarröda bär som är lockande men farliga.",
  ecology: "Arten är en signal om rikare skogsmiljöer, särskilt där marken är kalkpåverkad och fuktig. Blommorna är viktiga för tidiga pollinatörer, medan frukterna sprids av fåglar.",
  lookFor: [
    "Rosa/lila blommor på bar kvist tidigt på våren.",
    "Smal, låg buske med upprätta grenar.",
    "Bladen sitter samlade mot skottspetsarna.",
    "Klarröda bär på sommaren/hösten – mycket giftiga."
  ],
  viewerUrl: "https://superspl.at/s?id=26d31db2",
  localImage: "assets/Dap_mez.png", // valfritt. Om den saknas används iNaturalist/fallback
  accent: "green", // eller "yellow"
  illustrationClass: "guckusko" // fallback-stil: "guckusko", "tallticka" eller annan du byggt
},
];

const selectedFlags = new Set(["Alla"]);
let selectedSignalLevel = null;
const allFlags = ["Alla", "Växter", "Svampar", "Lavar", "Orkidéer", "Fridlyst", "Signalart", "Tall", "Vedlevande", "Lövträd", "Fuktig skog"];
const photoCache = new Map();

console.assert(species.length >= 2, "Minst två arter ska finnas.");
console.assert(species.every(item => item.viewerUrl && item.latin && item.signalLevel), "Alla arter ska ha viewerUrl, latin och signalLevel.");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderFilters() {
  document.getElementById("filters").innerHTML = allFlags.map(flag => `
    <button type="button" class="filter-chip ${selectedFlags.has(flag) ? "active" : ""}" onclick="toggleFlag('${escapeHtml(flag)}')">${escapeHtml(flag)}</button>
  `).join("");
  document.getElementById("clear-filters").hidden = selectedFlags.size === 0 || (selectedFlags.size === 1 && selectedFlags.has("Alla"));
}

function toggleFlag(flag) {
  if (flag === "Alla") {
    selectedFlags.clear();
    selectedFlags.add("Alla");
  } else {
    selectedFlags.delete("Alla");
    selectedFlags.has(flag) ? selectedFlags.delete(flag) : selectedFlags.add(flag);
    if (selectedFlags.size === 0) selectedFlags.add("Alla");
  }
  renderFilters();
  renderGallery();
}

function clearFilters() {
  selectedFlags.clear();
  selectedFlags.add("Alla");
  selectedSignalLevel = null;
  renderFilters();
  renderSignalFilter();
  renderGallery();
}

function setSignalFilter(level) {
  selectedSignalLevel = level;
  renderSignalFilter();
  renderGallery();
}

function renderSignalFilter() {
  document.querySelectorAll("[data-signal-filter]").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.signalFilter) === selectedSignalLevel);
  });
  const reset = document.getElementById("signal-reset");
  if (reset) reset.classList.toggle("active", selectedSignalLevel === null);
}

function matches(item, query) {
  const text = `${item.name} ${item.latin} ${item.group} ${item.subgroup} ${item.status} ${item.flags.join(" ")}`.toLowerCase();
  const activeFlags = [...selectedFlags].filter(flag => flag !== "Alla");
  return (!query || text.includes(query)) &&
    (activeFlags.length === 0 || activeFlags.every(flag => item.flags.includes(flag))) &&
    (selectedSignalLevel === null || item.signalLevel === selectedSignalLevel);
}

function renderGallery() {
  const query = document.getElementById("search").value.trim().toLowerCase();
  const filtered = species.filter(item => matches(item, query));
  document.getElementById("count").textContent = `${filtered.length} av ${species.length} arter visas`;
  document.getElementById("empty").hidden = filtered.length !== 0;
  document.getElementById("gallery").innerHTML = filtered.map(item => `
    <button class="card" type="button" onclick="showSpecies('${item.id}')">
      ${galleryPreviewHtml(item)}
      <div class="card-body">
        <h3>${escapeHtml(item.name)}</h3>
        <p class="latin">${escapeHtml(item.latin)}</p>
        <div class="tag-row">
          <span class="tag ${item.accent}">${escapeHtml(item.subgroup)}</span>
          <span class="tag">${escapeHtml(item.status.split(" i ")[0])}</span>
          <span class="open-arrow">→</span>
        </div>
      </div>
    </button>
  `).join("");
  loadGalleryPhotos(filtered);
}

function galleryPreviewHtml(item) {
  if (item.localImage) {
    return `<div class="taxon-thumb loaded"><img src="${escapeHtml(item.localImage)}" alt="${escapeHtml(item.name)}" loading="lazy" style="display:block;" /></div>`;
  }
  return `<div class="taxon-thumb" data-photo-for="${escapeHtml(item.id)}"><img alt="${escapeHtml(item.name)}" loading="lazy" /><div class="fallback-illustration">${illustrationHtml(item)}</div></div>`;
}

async function fetchINaturalistPhotos(item, count = 5) {
  const cacheKey = `${item.latin}:${count}`;
  if (photoCache.has(cacheKey)) return photoCache.get(cacheKey);

  const url = `https://api.inaturalist.org/v1/observations?taxon_name=${encodeURIComponent(item.latin)}&photos=true&quality_grade=research&per_page=${Math.max(count, 8)}&order_by=votes`;
  try {
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) throw new Error(response.status);
    const data = await response.json();
    const observations = Array.isArray(data.results) ? data.results : [];
    const urls = [];

    for (const obs of observations) {
      const photos = Array.isArray(obs.photos) ? obs.photos : [];
      for (const photo of photos) {
        let photoUrl = photo.url || photo.medium_url || photo.square_url;
        if (!photoUrl) continue;
        photoUrl = photoUrl.replace("square.", "medium.").replace("small.", "medium.");
        urls.push(photoUrl);
        if (urls.length >= count) break;
      }
      if (urls.length >= count) break;
    }

    photoCache.set(cacheKey, urls);
    return urls;
  } catch (error) {
    console.warn("Kunde inte hämta artbilder från iNaturalist", item.latin, error);
    photoCache.set(cacheKey, []);
    return [];
  }
}

async function loadGalleryPhotos(items) {
  for (const item of items) {
    if (item.localImage) continue;
    const thumb = document.querySelector(`[data-photo-for="${CSS.escape(item.id)}"]`);
    if (!thumb || thumb.classList.contains("loaded")) continue;
    const img = thumb.querySelector("img");
    const photos = await fetchINaturalistPhotos(item, 1);
    if (!photos[0] || !img) continue;
    img.src = photos[0];
    img.onload = () => thumb.classList.add("loaded");
  }
}

function illustrationHtml(item) {
  const symbolClass = item.id === "guckusko" ? "guckusko-symbol" : "tallticka-symbol";
  return `<div class="illustration ${item.illustrationClass}"><div class="${symbolClass}"></div></div>`;
}

function showSpecies(id) {
  if (location.hash !== `#${id}`) {
    history.pushState({ view: "species", id }, "", `#${id}`);
  }
  renderRoute();
}

function showGallery() {
  if (location.hash) {
    history.pushState({ view: "gallery" }, "", location.pathname);
  }
  renderRoute();
}

function renderRoute() {
  const id = location.hash.replace("#", "");
  const item = species.find(entry => entry.id === id);

  if (item) {
    document.getElementById("gallery-page").style.display = "none";
    const page = document.getElementById("species-page");
    page.style.display = "block";
    page.innerHTML = speciesPageHtml(item);
    window.scrollTo({ top: 0, behavior: "instant" });
    loadSpeciesPhotos(item);
  } else {
    document.getElementById("gallery-page").style.display = "block";
    const page = document.getElementById("species-page");
    page.style.display = "none";
    page.innerHTML = "";
    window.scrollTo({ top: 0, behavior: "instant" });
  }
}

function pyramidHtml(item) {
  return `<div class="pyramid-box"><div class="pyramid">
    <div class="pyramid-part top ${item.signalLevel === 3 ? "active" : ""}"></div>
    <div class="pyramid-part mid ${item.signalLevel === 2 ? "active" : ""}"></div>
    <div class="pyramid-part base ${item.signalLevel === 1 ? "active" : ""}"></div>
  </div><div class="pyramid-note">Utifrån Nitare, 2020.</div></div>`;
}

function speciesPageHtml(item) {
  return `<div class="species-shell"><div class="species-layout">
    <aside>
      <button class="back-btn" type="button" onclick="showGallery()">← Tillbaka till galleri</button>
      <h1 class="species-title">${escapeHtml(item.name)}</h1>
      <p class="species-latin">${escapeHtml(item.latin)}</p>
      <div class="species-tags"><span class="tag ${item.accent}">${escapeHtml(item.subgroup)}</span><span class="tag">${escapeHtml(item.status.split(" i ")[0])}</span><span class="tag">${escapeHtml(item.group)}</span></div>
      <p class="species-desc">${escapeHtml(item.description)} ${escapeHtml(item.ecology)}</p>
      <div class="facts">
        <div class="fact"><span class="fact-icon">♧</span><div><strong>Grupp</strong>${escapeHtml(item.group)}</div></div>
        <div class="fact"><span class="fact-icon">✽</span><div><strong>Familj</strong>${escapeHtml(item.family)}</div></div>
        <div class="fact"><span class="fact-icon">☼</span><div><strong>Blomningstid</strong>${escapeHtml(item.flowering)}</div></div>
        <div class="fact"><span class="fact-icon">♧</span><div><strong>Livsmiljö</strong>${escapeHtml(item.habitat)}</div></div>
        <div class="fact"><span class="fact-icon">↓</span><div><strong>Status</strong>${escapeHtml(item.status)}</div></div>
      </div>
    </aside>
    <main>
      <div class="visual-card splat-wrap"><iframe title="Interaktiv 3D-modell av ${escapeHtml(item.name)}" allow="fullscreen; xr-spatial-tracking" src="${escapeHtml(item.viewerUrl)}"></iframe></div>
    </main>
    <aside class="right-col">
      <div class="mini-thumb" data-mini-photo="0"><img alt="${escapeHtml(item.name)} bild 1" />${illustrationHtml(item)}</div>
      <div class="mini-thumb" data-mini-photo="1"><img alt="${escapeHtml(item.name)} bild 2" />${illustrationHtml(item)}</div>
      <div class="mini-thumb" data-mini-photo="2"><img alt="${escapeHtml(item.name)} bild 3" />${illustrationHtml(item)}</div>
      ${pyramidHtml(item)}
    </aside>
    <section class="species-bottom">
      <article class="white-card"><div class="card-title">Utbredning</div><p>${escapeHtml(item.distribution)}</p><div class="map-placeholder">Här kan en fyndkarta eller Artportalen/GBIF-modul kopplas in senare.</div></article>
      <article class="white-card"><div class="card-title">Kännetecken</div><ul class="look-list">${item.lookFor.map(point => `<li><span class="dot ${item.accent === "yellow" ? "yellow" : ""}"></span>${escapeHtml(point)}</li>`).join("")}</ul></article>
    </section>
  </div></div>`;
}

async function loadSpeciesPhotos(item) {
  const photos = await fetchINaturalistPhotos(item, 3);

  document.querySelectorAll("[data-mini-photo]").forEach((thumb, index) => {
    const img = thumb.querySelector("img");
    if (!img) return;

    const photoUrl = photos[index] || item.localImage;
    if (!photoUrl) return;

    img.src = photoUrl;
    img.onload = () => thumb.classList.add("loaded");
  });
}

window.addEventListener("popstate", renderRoute);

renderFilters();
renderSignalFilter();
renderGallery();

if (location.hash) {
  history.replaceState({ view: "species", id: location.hash.replace("#", "") }, "", location.href);
} else {
  history.replaceState({ view: "gallery" }, "", location.pathname);
}
renderRoute();
