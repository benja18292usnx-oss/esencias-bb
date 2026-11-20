/* Esencias BB — interactive catalog
 * WhatsApp real: https://wa.me/5492915277169 (Bahía Blanca, 291)
 */
"use strict";

const WHATSAPP_NUMBER = "5492915277169";

const FORMATS = [
  { id: "spray",   name: "Home Spray 250 ml",          short: "Home Spray",          price: "$9.990" },
  { id: "diffuser",name: "Difusor con varillas",       short: "Difusor",             price: "$10.499" },
  { id: "pocket",  name: "Spray de cartera / textil",  short: "Spray de cartera",    price: "$5.999" }
];

const FORMAT_ORDER = FORMATS.map((f) => f.id);

const SCENTS = [
  {
    id: "sandia-pepino",
    name: "Sandía y Pepino",
    tagline: "Frescura jugosa de verano",
    description: "Una brisa jugosa y refrescante. La dulzura de la sandía se encuentra con el pepino crujiente, ideal para los días de calor.",
    notes: {
      salida: ["Sandía", "Pepino"],
      corazon: ["Melón", "Hojas verdes"],
      fondo: ["Almizcle suave", "Madera clara"]
    },
    mood: "Fresco y luminoso",
    room: "Cocina, living y patios",
    colors: {
      bg: "#f4e4e6",
      bg2: "#e4efdf",
      accent: "#d45363",
      liquid: "#d24b5c",
      liquidDeep: "#a43244",
      ink: "#3a1e22"
    }
  },
  {
    id: "coco-vainilla",
    name: "Coco y Vainilla",
    tagline: "Un abrazo cálido y cremoso",
    description: "Coco suave y vainilla envolvente, como una tarde lenta. Una fragancia cálida que deja el ambiente dulce y sereno.",
    notes: {
      salida: ["Coco", "Leche"],
      corazon: ["Vainilla", "Almendra"],
      fondo: ["Sándalo", "Ámbar"]
    },
    mood: "Cálido y reconfortante",
    room: "Dormitorio y living",
    colors: {
      bg: "#f3e7d2",
      bg2: "#e8d5b5",
      accent: "#c49a5a",
      liquid: "#e0c48a",
      liquidDeep: "#c4a05a",
      ink: "#3a2c18"
    }
  },
  {
    id: "aquamarine",
    name: "Aquamarine",
    tagline: "Brisa limpia y acuática",
    description: "Una fragancia limpia y mineral, con un aire de brisa marina. Abre el ambiente y deja una sensación de amplitud.",
    notes: {
      salida: ["Notas acuáticas", "Bergamota"],
      corazon: ["Ozono", "Flor de loto"],
      fondo: ["Madera de deriva", "Almizcle"]
    },
    mood: "Calma y frescura",
    room: "Baño, living y espacios de trabajo",
    colors: {
      bg: "#d9eef0",
      bg2: "#c5e4e8",
      accent: "#2f8f9a",
      liquid: "#3aa8b8",
      liquidDeep: "#1f6f7c",
      ink: "#16363a"
    }
  },
  {
    id: "lavanda-menta",
    name: "Lavanda y Menta",
    tagline: "Calma con un toque despierto",
    description: "Lavanda serena y menta fresca para equilibrar el ambiente. Relaja sin apagar, ideal para cerrar el día o empezar con calma.",
    notes: {
      salida: ["Menta", "Eucalipto suave"],
      corazon: ["Lavanda", "Hierbas"],
      fondo: ["Cedro", "Almizcle"]
    },
    mood: "Relajado y equilibrado",
    room: "Dormitorio y rincón de lectura",
    colors: {
      bg: "#ebe4f3",
      bg2: "#dcefe6",
      accent: "#7a5ea0",
      liquid: "#8b6db0",
      liquidDeep: "#5a3f7a",
      ink: "#2c1e3a"
    }
  },
  {
    id: "uva-frutos-rojos",
    name: "Uva y Frutos Rojos",
    tagline: "Jugoso y con carácter",
    description: "Uva madura con un bouquet de frutos rojos que llena el ambiente de carácter. Vibrante, ideal para compartir una mesa.",
    notes: {
      salida: ["Uva", "Frambuesa", "Grosella"],
      corazon: ["Mora", "Rosa suave"],
      fondo: ["Ámbar", "Madera"]
    },
    mood: "Vibrante y convivial",
    room: "Comedor, living y reuniones",
    colors: {
      bg: "#f0dfe8",
      bg2: "#e4d0dc",
      accent: "#8a2f5a",
      liquid: "#7a2f58",
      liquidDeep: "#4e1636",
      ink: "#351424"
    }
  },
  {
    id: "sandia-melon",
    name: "Sandía y Melón",
    tagline: "Dulce, luminosa y tropical",
    description: "Sandía y melón en un acorde jugoso que evoca meriendas de verano. Dulce, luminosa y fácil de querer.",
    notes: {
      salida: ["Sandía", "Melón cantalupo"],
      corazon: ["Durazno", "Néctar"],
      fondo: ["Azúcar suave", "Almizcle"]
    },
    mood: "Alegre y veraniego",
    room: "Cocina, quincho y living",
    colors: {
      bg: "#fde6d8",
      bg2: "#f5d4c4",
      accent: "#e07555",
      liquid: "#ef8a6b",
      liquidDeep: "#c45a40",
      ink: "#3a2218"
    }
  },
  {
    id: "peras-flores-blancas",
    name: "Peras y Flores Blancas",
    tagline: "Delicada y luminosa",
    description: "Pera jugosa envuelta en un ramo de flores blancas. Elegante y suave, perfuma sin llenar de más.",
    notes: {
      salida: ["Pera", "Bergamota"],
      corazon: ["Jazmín", "Flor de azahar", "Peonía"],
      fondo: ["Sándalo", "Almizcle blanco"]
    },
    mood: "Elegante y sereno",
    room: "Dormitorio, recibidor y living",
    colors: {
      bg: "#f3f0e4",
      bg2: "#e4ead8",
      accent: "#8a9a5a",
      liquid: "#e6e0bc",
      liquidDeep: "#c8c08a",
      ink: "#2c2a1c"
    }
  }
];

function waUrl(text) {
  return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(text);
}

function formatById(id) {
  return FORMATS.find((f) => f.id === id) || FORMATS[0];
}

function consultMessage(scent, format) {
  return "Hola! Quiero consultar por " + scent.name + ", " + format.name + " (" + format.price + ") de Esencias BB.";
}

function labelBlock(x, y, w, h, sub, i) {
  const cx = x + w / 2;
  return (
    '<g class="label">' +
      '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="5" fill="#f4ead8" stroke="#c4a35a" stroke-width="1"/>' +
      '<rect x="' + (x + 4) + '" y="' + (y + 4) + '" width="' + (w - 8) + '" height="' + (h - 8) + '" rx="3" fill="none" stroke="#c4a35a" stroke-width="0.4" opacity="0.55"/>' +
      '<circle cx="' + cx + '" cy="' + (y + h * 0.32) + '" r="' + Math.min(14, w * 0.22) + '" fill="none" stroke="#8a7033" stroke-width="0.8"/>' +
      '<text x="' + cx + '" y="' + (y + h * 0.32 + 5) + '" text-anchor="middle" font-family="Cormorant Garamond, Times New Roman, serif" font-size="' + Math.min(13, w * 0.2) + '" font-weight="700" fill="#8a7033">BB</text>' +
      '<text x="' + cx + '" y="' + (y + h * 0.58) + '" text-anchor="middle" font-family="Cormorant Garamond, Times New Roman, serif" font-size="' + Math.min(8, w * 0.125) + '" fill="#5a4a2a" letter-spacing="0.8">ESENCIAS BB</text>' +
      '<text x="' + cx + '" y="' + (y + h * 0.78) + '" text-anchor="middle" font-family="Outfit, Segoe UI, sans-serif" font-size="5.2" fill="#8a7033" letter-spacing="0.6">' + sub + "</text>" +
    "</g>"
  );
}

function reeds() {
  const angles = [-16, -10, -5, 0, 5, 11, 17];
  const lengths = [128, 146, 136, 158, 142, 132, 150];
  const fills = ["#cbb48a", "#b89a68", "#d2c19a", "#b09060", "#c4ac7a", "#a88858", "#cfc09a"];
  return angles.map((a, idx) => {
    const y = 188 - lengths[idx];
    return '<rect x="108.2" y="' + y + '" width="3.2" height="' + lengths[idx] + '" rx="1.6" fill="' + fills[idx] + '" transform="rotate(' + a + ' 110 188)"/>';
  }).join("");
}

function bottleMarkup(s, eager) {
  const i = s.id;
  const photo = function (fmt, cls, load) {
    const src = "img/bot-" + fmt + "-" + i;
    return (
      '<span class="bottle-photo ' + cls + '">' +
        '<picture>' +
          '<source type="image/webp" srcset="' + src + '.webp">' +
          '<img src="' + src + '.png" alt="" width="200" height="400" decoding="async" loading="' + load + '">' +
        '</picture>' +
      "</span>"
    );
  };
  const load = eager ? "eager" : "lazy";
  return (
    photo("spray", "spray-only", load) +
    photo("diffuser", "diff-only", "lazy") +
    photo("pocket", "pocket-only", "lazy") +
    '<span class="mist" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i></span>'
  );
}

function decoSvg(kind) {
  switch (kind) {
    case "watermelon":
      return '<svg viewBox="0 0 80 52"><path d="M6 10 A40 40 0 0 0 74 10 L40 12 Z" fill="#2f7a45"/><path d="M11 11.5 A34 34 0 0 0 69 11.5 L40 13 Z" fill="#f3efe4"/><path d="M15 12.5 A30 30 0 0 0 65 12.5 L40 14 Z" fill="#e24b5c"/><ellipse cx="32" cy="26" rx="1.6" ry="2.6" fill="#2a1818" transform="rotate(-20 32 26)"/><ellipse cx="44" cy="24" rx="1.6" ry="2.6" fill="#2a1818" transform="rotate(16 44 24)"/><ellipse cx="38" cy="34" rx="1.5" ry="2.4" fill="#2a1818" transform="rotate(8 38 34)"/><ellipse cx="50" cy="32" rx="1.4" ry="2.2" fill="#2a1818" transform="rotate(-12 50 32)"/></svg>';
    case "cucumber":
      return '<svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="28" fill="#7da45a"/><circle cx="32" cy="32" r="24" fill="#d5e6b0"/><circle cx="32" cy="32" r="8" fill="#c3d89a"/><g fill="#7da45a" opacity="0.7"><circle cx="32" cy="18" r="2"/><circle cx="44" cy="26" r="2"/><circle cx="44" cy="40" r="2"/><circle cx="32" cy="46" r="2"/><circle cx="20" cy="40" r="2"/><circle cx="20" cy="26" r="2"/></g></svg>';
    case "coconut":
      return '<svg viewBox="0 0 80 56"><path d="M8 20 C8 8 72 8 72 20 L68 48 C60 56 20 56 12 48 Z" fill="#6b4226"/><path d="M14 20 C16 12 64 12 66 20 L62 44 C56 50 24 50 18 44 Z" fill="#f4efe4"/><ellipse cx="32" cy="28" rx="4" ry="5" fill="#e6d8c4"/><ellipse cx="48" cy="30" rx="3.5" ry="4.5" fill="#e6d8c4"/></svg>';
    case "vanilla":
      return '<svg viewBox="0 0 40 90"><path d="M18 8 C14 30 10 60 16 86" fill="none" stroke="#6a4424" stroke-width="5" stroke-linecap="round"/><path d="M24 10 C22 32 20 62 26 86" fill="none" stroke="#8a6238" stroke-width="4" stroke-linecap="round"/><circle cx="20" cy="10" r="6" fill="#f4ead0"/><circle cx="20" cy="10" r="2.4" fill="#c4a35a"/></svg>';
    case "wave":
      return '<svg viewBox="0 0 160 50" fill="none"><path d="M0 28 C20 8 36 8 56 28 C76 48 92 48 112 28 C132 8 148 8 160 28" stroke="#2f8f9a" stroke-width="3" opacity="0.7"/><path d="M0 38 C20 18 36 18 56 38 C76 58 92 58 112 38 C132 18 148 18 160 38" stroke="#4fb3be" stroke-width="2.4" opacity="0.55"/></svg>';
    case "bubble":
      return '<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="16" fill="none" stroke="#4fb3be" stroke-width="2" opacity="0.7"/><circle cx="14" cy="14" r="4" fill="#fff" opacity="0.45"/></svg>';
    case "lavender":
      return '<svg viewBox="0 0 40 100"><path d="M20 30 V96" stroke="#5a8a5a" stroke-width="2"/><g fill="#7a5ea0">' +
        [0,1,2,3,4,5,6,7].map(function (n) {
          const y = 8 + n * 8;
          const w = 7 - n * 0.35;
          return '<ellipse cx="13" cy="' + y + '" rx="' + w + '" ry="5"/><ellipse cx="27" cy="' + (y + 2) + '" rx="' + w + '" ry="5"/>';
        }).join("") +
        '<ellipse cx="20" cy="6" rx="5" ry="6"/></g></svg>';
    case "mint":
      return '<svg viewBox="0 0 80 60"><path d="M8 32 C20 8 44 8 40 32 C36 8 60 8 72 32 C60 52 20 52 8 32 Z" fill="#5ea878"/><path d="M8 32 C20 14 44 14 40 32 C36 14 60 14 72 32 C60 44 20 44 8 32 Z" fill="#8fd0a0" opacity="0.8"/><path d="M8 32 H72" stroke="#2f6b45" stroke-width="1.2"/></svg>';
    case "grapes":
      return '<svg viewBox="0 0 80 90"><path d="M40 8 C52 8 58 22 48 28 C60 16 70 22 62 8" fill="#3d7a3d"/><g>' +
        [[28,34,11],[44,32,11],[36,46,12],[22,50,10],[50,48,11],[32,62,11],[46,64,10],[38,76,10]].map(function (c) {
          return '<circle cx="' + c[0] + '" cy="' + c[1] + '" r="' + c[2] + '" fill="#6b2a58"/><circle cx="' + (c[0] - 3) + '" cy="' + (c[1] - 3) + '" r="3" fill="#fff" opacity="0.18"/>';
        }).join("") +
        "</g></svg>";
    case "berry":
      return '<svg viewBox="0 0 40 44"><circle cx="20" cy="24" r="16" fill="#a32d3e"/>' +
        [[14,18],[22,16],[28,22],[16,26],[24,28],[20,22],[12,24],[26,18]].map(function (p) {
          return '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="2.1" fill="#6a1824"/>';
        }).join("") +
        '<path d="M20 8 C16 14 12 12 14 8 C18 6 20 6 20 8 C20 6 24 6 26 8 C28 12 24 14 20 8 Z" fill="#3d7a3d"/></svg>';
    case "melon":
      return '<svg viewBox="0 0 80 52"><path d="M6 12 A40 40 0 0 0 74 12 L40 14 Z" fill="#d7b56a"/><path d="M12 13 A34 34 0 0 0 68 13 L40 15 Z" fill="#f3b07a"/><path d="M40 15 L22 36 M40 15 L40 40 M40 15 L58 36" stroke="#e89a62" stroke-width="1.2" opacity="0.7"/></svg>';
    case "pear":
      return '<svg viewBox="0 0 60 80"><path d="M30 16 C42 16 48 30 44 42 C56 46 58 70 30 74 C2 70 4 46 16 42 C12 30 18 16 30 16 Z" fill="#c5d47a"/><path d="M22 30 C24 22 28 20 30 18" fill="none" stroke="#fff" stroke-width="3" opacity="0.35"/><rect x="28" y="6" width="4" height="12" rx="2" fill="#6a4424"/><path d="M32 10 C42 6 46 16 36 18" fill="#5a8a45"/></svg>';
    case "flower":
      return '<svg viewBox="0 0 70 70"><g fill="#f7f3ea" stroke="#e6dfd0" stroke-width="0.6">' +
        [0, 72, 144, 216, 288].map(function (a) {
          return '<ellipse cx="35" cy="18" rx="10" ry="16" transform="rotate(' + a + ' 35 35)"/>';
        }).join("") +
        '</g><circle cx="35" cy="35" r="7" fill="#e8c96a"/><circle cx="35" cy="35" r="3" fill="#c4a35a"/></svg>';
    default:
      return "";
  }
}

const DECOS = {
  "sandia-pepino": [
    { kind: "watermelon", w: 110, top: "8%", left: "-2%", rot: -18, depth: 0.22 },
    { kind: "watermelon", w: 80, top: "58%", right: "-4%", rot: 28, depth: 0.14 },
    { kind: "cucumber", w: 70, top: "18%", right: "4%", rot: 10, depth: 0.18 },
    { kind: "cucumber", w: 54, top: "58%", left: "2%", rot: -12, depth: 0.1 }
  ],
  "coco-vainilla": [
    { kind: "coconut", w: 120, top: "8%", left: "-8%", rot: -8, depth: 0.2 },
    { kind: "vanilla", w: 48, top: "16%", right: "8%", rot: 18, depth: 0.16 },
    { kind: "coconut", w: 80, top: "58%", right: "-2%", rot: 16, depth: 0.12 },
    { kind: "vanilla", w: 40, top: "52%", left: "6%", rot: -14, depth: 0.1 }
  ],
  aquamarine: [
    { kind: "wave", w: 180, top: "10%", left: "-4%", rot: 0, depth: 0.12 },
    { kind: "wave", w: 160, top: "62%", right: "-8%", rot: 4, depth: 0.18 },
    { kind: "bubble", w: 44, top: "22%", right: "10%", rot: 0, depth: 0.22 },
    { kind: "bubble", w: 28, top: "40%", left: "8%", rot: 0, depth: 0.14 },
    { kind: "bubble", w: 36, top: "70%", left: "14%", rot: 0, depth: 0.1 }
  ],
  "lavanda-menta": [
    { kind: "lavender", w: 52, top: "4%", left: "4%", rot: -8, depth: 0.18 },
    { kind: "lavender", w: 44, top: "10%", right: "6%", rot: 12, depth: 0.14 },
    { kind: "mint", w: 90, top: "58%", left: "-4%", rot: -16, depth: 0.2 },
    { kind: "mint", w: 70, top: "48%", right: "-6%", rot: 20, depth: 0.1 }
  ],
  "uva-frutos-rojos": [
    { kind: "grapes", w: 96, top: "4%", left: "-2%", rot: -8, depth: 0.2 },
    { kind: "berry", w: 48, top: "18%", right: "6%", rot: 12, depth: 0.16 },
    { kind: "grapes", w: 72, top: "58%", right: "-4%", rot: 14, depth: 0.12 },
    { kind: "berry", w: 40, top: "52%", left: "4%", rot: -6, depth: 0.1 }
  ],
  "sandia-melon": [
    { kind: "watermelon", w: 100, top: "6%", left: "-6%", rot: -14, depth: 0.2 },
    { kind: "melon", w: 96, top: "16%", right: "-4%", rot: 18, depth: 0.16 },
    { kind: "melon", w: 72, top: "58%", left: "2%", rot: -10, depth: 0.12 },
    { kind: "watermelon", w: 70, top: "52%", right: "2%", rot: 24, depth: 0.1 }
  ],
  "peras-flores-blancas": [
    { kind: "pear", w: 70, top: "6%", left: "4%", rot: -8, depth: 0.18 },
    { kind: "flower", w: 80, top: "10%", right: "2%", rot: 16, depth: 0.16 },
    { kind: "flower", w: 56, top: "58%", left: "4%", rot: -12, depth: 0.12 },
    { kind: "pear", w: 60, top: "54%", right: "4%", rot: 10, depth: 0.1 }
  ]
};

function decorationsFor(id) {
  return (DECOS[id] || []).map(function (d) {
    const style = [
      "width:" + d.w + "px",
      d.top ? "top:" + d.top : "",
      d.bottom ? "bottom:" + d.bottom : "",
      d.left ? "left:" + d.left : "",
      d.right ? "right:" + d.right : "",
      "transform:rotate(" + (d.rot || 0) + "deg)"
    ].filter(Boolean).join(";");
    return '<div class="deco" data-depth="' + d.depth + '" data-rot="' + (d.rot || 0) + '" style="' + style + '">' + decoSvg(d.kind) + "</div>";
  }).join("");
}

function chips(list) {
  return list.map(function (n) { return '<span class="chip">' + n + "</span>"; }).join("");
}

function slideHTML(s, index) {
  const formatBtns = FORMATS.map(function (f, fi) {
    return (
      '<button type="button" class="format-btn' + (fi === 0 ? " is-on" : "") + '" data-format="' + f.id + '" aria-pressed="' + (fi === 0 ? "true" : "false") + '">' +
        '<span class="format-name">' + f.name + "</span>" +
        '<span class="format-price">' + f.price + "</span>" +
      "</button>"
    );
  }).join("");

  return (
    '<article class="slide' + (index === 0 ? " is-active" : "") + '" data-scent="' + s.id + '" data-format="spray" aria-hidden="' + (index === 0 ? "false" : "true") + '">' +
      '<div class="deco-layer" aria-hidden="true">' + decorationsFor(s.id) + "</div>" +
      '<div class="slide-main">' +
        '<h3 class="scent-name" id="scent-' + s.id + '">' + s.name + "</h3>" +
        '<p class="scent-tag">' + s.tagline + "</p>" +
        '<div class="name-rule" aria-hidden="true"></div>' +
        '<button type="button" class="bottle-stage" data-format="spray" aria-label="Cambiar formato de ' + s.name + '. Ahora Home Spray 250 ml.">' +
          bottleMarkup(s, index === 0) +
        "</button>" +
        '<p class="format-pill">Home Spray 250 ml</p>' +
        '<div class="scent-info">' +
          "<p>" + s.description + "</p>" +
          '<div class="notes">' +
            '<div class="note-row"><h3>Salida</h3><div class="chips">' + chips(s.notes.salida) + "</div></div>" +
            '<div class="note-row"><h3>Corazón</h3><div class="chips">' + chips(s.notes.corazon) + "</div></div>" +
            '<div class="note-row"><h3>Fondo</h3><div class="chips">' + chips(s.notes.fondo) + "</div></div>" +
          "</div>" +
          '<div class="meta">' +
            "<div><strong>Momento:</strong> " + s.mood + "</div>" +
            "<div><strong>Ideal para:</strong> " + s.room + "</div>" +
          "</div>" +
          '<div class="formats" role="group" aria-label="Formatos y precios">' + formatBtns + "</div>" +
          '<div class="slide-actions">' +
            '<a class="btn btn-whatsapp wa-scent" href="' + waUrl(consultMessage(s, FORMATS[0])) + '" target="_blank" rel="noopener noreferrer">Consultar por WhatsApp</a>' +
          "</div>" +
        "</div>" +
      "</div>" +
    "</article>"
  );
}

/* ---------- carousel ---------- */
const track = document.getElementById("track");
const carousel = document.getElementById("carousel");
const dotsEl = document.getElementById("dots");
const counterEl = document.getElementById("counter");
const fragBg = document.getElementById("fragBg");
const fragSection = document.getElementById("fragancias");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

track.innerHTML = SCENTS.map(slideHTML).join("");

SCENTS.forEach(function (s, i) {
  const b = document.createElement("button");
  b.type = "button";
  b.className = "dot" + (i === 0 ? " is-on" : "");
  b.setAttribute("role", "tab");
  b.setAttribute("aria-label", s.name);
  b.addEventListener("click", function () { goTo(i, true); });
  dotsEl.appendChild(b);
});

let index = 0;
let width = 1;
let dragX = 0;
let startX = 0;
let startY = 0;
let startT = 0;
let dragging = false;
let locked = null; /* "x" | "y" | null */
let pointerId = null;

function setBg(fromIdx, toIdx, t) {
  const a = SCENTS[fromIdx].colors;
  const b = SCENTS[toIdx].colors;
  const mix = function (hex1, hex2, p) {
    const n = function (h) {
      const x = h.replace("#", "");
      return [parseInt(x.slice(0, 2), 16), parseInt(x.slice(2, 4), 16), parseInt(x.slice(4, 6), 16)];
    };
    const A = n(hex1), B = n(hex2);
    const r = Math.round(A[0] + (B[0] - A[0]) * p);
    const g = Math.round(A[1] + (B[1] - A[1]) * p);
    const bl = Math.round(A[2] + (B[2] - A[2]) * p);
    return "rgb(" + r + "," + g + "," + bl + ")";
  };
  const bg = mix(a.bg, b.bg, t);
  const bg2 = mix(a.bg2, b.bg2, t);
  const accent = mix(a.accent, b.accent, t);
  fragSection.style.setProperty("--frag-bg", bg);
  fragSection.style.setProperty("--frag-bg-2", bg2);
  fragSection.style.setProperty("--accent", accent);
  fragSection.style.backgroundColor = bg;
}

function measure() {
  width = carousel.clientWidth || 1;
  apply(false);
}

function apply(animate) {
  const x = -index * width + dragX;
  track.style.transition = animate && !reduceMotion ? "transform 0.48s cubic-bezier(.22,.8,.28,1)" : "none";
  track.style.transform = "translate3d(" + x + "px,0,0)";
  const frac = width ? (-x / width) : index;
  const left = Math.max(0, Math.min(SCENTS.length - 1, Math.floor(frac)));
  const right = Math.max(0, Math.min(SCENTS.length - 1, Math.ceil(frac)));
  const t = Math.min(1, Math.max(0, frac - left));
  setBg(left, right, t);
  parallax(dragX);
}

function parallax(offset) {
  const slides = track.children;
  for (let i = 0; i < slides.length; i++) {
    if (Math.abs(i - index) > 1 && !offset) {
      continue;
    }
    const decos = slides[i].querySelectorAll(".deco");
    const local = offset + (index - i) * 0; /* only drag offset */
    decos.forEach(function (el) {
      const d = parseFloat(el.getAttribute("data-depth") || "0.1");
      const rot = el.getAttribute("data-rot") || "0";
      el.style.transform = "translate3d(" + (offset * d) + "px,0,0) rotate(" + rot + "deg)";
    });
  }
}

function restartEntrance(slide) {
  if (reduceMotion) {
    slide.classList.add("is-active");
    return;
  }
  slide.classList.remove("is-active");
  void slide.offsetWidth;
  slide.classList.add("is-active");
}

function goTo(i, animate) {
  const max = SCENTS.length - 1;
  index = Math.max(0, Math.min(max, i));
  dragX = 0;
  const slides = track.children;
  for (let s = 0; s < slides.length; s++) {
    const on = s === index;
    slides[s].classList.toggle("is-active", false);
    slides[s].setAttribute("aria-hidden", on ? "false" : "true");
  }
  dotsEl.querySelectorAll(".dot").forEach(function (d, di) {
    d.classList.toggle("is-on", di === index);
  });
  counterEl.textContent = (index + 1) + " / " + SCENTS.length + "  ·  " + SCENTS[index].name;
  apply(animate);
  restartEntrance(slides[index]);
  carousel.setAttribute("aria-label", "Fragancia " + (index + 1) + " de " + SCENTS.length + ": " + SCENTS[index].name);
}

function onDown(e) {
  if (e.target.closest("a, button, .format-btn, .menu, input, textarea")) return;
  if (e.pointerType === "mouse" && e.button !== 0) return;
  pointerId = e.pointerId;
  startX = e.clientX;
  startY = e.clientY;
  startT = performance.now();
  dragging = true;
  locked = null;
  dragX = 0;
  carousel.classList.add("is-grabbing");
  try { carousel.setPointerCapture(pointerId); } catch (err) {}
}

function onMove(e) {
  if (!dragging || e.pointerId !== pointerId) return;
  const dx = e.clientX - startX;
  const dy = e.clientY - startY;
  if (!locked) {
    if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return;
    locked = Math.abs(dx) > Math.abs(dy) * 1.05 ? "x" : "y";
    if (locked === "y") return;
  }
  if (locked !== "x") return;
  e.preventDefault();
  let next = dx;
  if ((index === 0 && next > 0) || (index === SCENTS.length - 1 && next < 0)) {
    next *= 0.32;
  }
  dragX = next;
  apply(false);
}

function onUp(e) {
  if (!dragging || (e.pointerId !== pointerId && e.type !== "pointercancel")) return;
  dragging = false;
  carousel.classList.remove("is-grabbing");
  try { carousel.releasePointerCapture(pointerId); } catch (err) {}
  const dx = dragX;
  const dt = Math.max(1, performance.now() - startT);
  const v = dx / dt;
  const threshold = width * 0.18;
  let next = index;
  if (locked === "x" && (Math.abs(dx) > threshold || Math.abs(v) > 0.45)) {
    next = dx < 0 ? index + 1 : index - 1;
  }
  dragX = 0;
  locked = null;
  pointerId = null;
  goTo(next, true);
  requestAnimationFrame(function () { parallax(0); });
}

carousel.addEventListener("pointerdown", onDown);
carousel.addEventListener("pointermove", onMove);
carousel.addEventListener("pointerup", onUp);
carousel.addEventListener("pointercancel", onUp);
carousel.addEventListener("lostpointercapture", function (e) {
  if (dragging && e.pointerId === pointerId) onUp(e);
});

document.getElementById("prev").addEventListener("click", function () { goTo(index - 1, true); });
document.getElementById("next").addEventListener("click", function () { goTo(index + 1, true); });

carousel.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") { e.preventDefault(); goTo(index + 1, true); }
  if (e.key === "ArrowLeft") { e.preventDefault(); goTo(index - 1, true); }
});

window.addEventListener("resize", measure, { passive: true });
if (window.visualViewport) {
  window.visualViewport.addEventListener("resize", measure, { passive: true });
}

/* ---------- format toggle ---------- */
function playMist(stage) {
  if (reduceMotion) return;
  stage.classList.remove("is-spraying");
  void stage.offsetWidth;
  stage.classList.add("is-spraying");
  window.setTimeout(function () { stage.classList.remove("is-spraying"); }, 900);
}

function setFormat(slide, formatId, mist) {
  const scentId = slide.getAttribute("data-scent");
  const scent = SCENTS.find(function (s) { return s.id === scentId; });
  const format = formatById(formatId);
  slide.setAttribute("data-format", format.id);
  const stage = slide.querySelector(".bottle-stage");
  stage.classList.toggle("is-diffuser", format.id === "diffuser");
  stage.classList.toggle("is-pocket", format.id === "pocket");
  stage.classList.toggle("is-spray", format.id === "spray");
  stage.setAttribute("data-format", format.id);
  stage.setAttribute("aria-label", "Cambiar formato de " + scent.name + ". Ahora " + format.name + " (" + format.price + ").");
  const pill = slide.querySelector(".format-pill");
  if (pill) pill.textContent = format.name + "  ·  " + format.price;
  slide.querySelectorAll(".format-btn").forEach(function (btn) {
    const on = btn.getAttribute("data-format") === format.id;
    btn.classList.toggle("is-on", on);
    btn.setAttribute("aria-pressed", on ? "true" : "false");
  });
  const a = slide.querySelector(".wa-scent");
  if (a) a.href = waUrl(consultMessage(scent, format));
  if (mist && (format.id === "spray" || format.id === "pocket")) playMist(stage);
}

track.addEventListener("click", function (e) {
  const formatBtn = e.target.closest(".format-btn");
  if (formatBtn) {
    const slide = formatBtn.closest(".slide");
    setFormat(slide, formatBtn.getAttribute("data-format"), true);
    return;
  }
  const stage = e.target.closest(".bottle-stage");
  if (stage) {
    const slide = stage.closest(".slide");
    const cur = slide.getAttribute("data-format") || "spray";
    const next = FORMAT_ORDER[(FORMAT_ORDER.indexOf(cur) + 1) % FORMAT_ORDER.length];
    setFormat(slide, next, true);
  }
});

/* ---------- contact WhatsApp ---------- */
const generalMsg = "Hola! Quiero consultar por las fragancias de Esencias BB.";
const souvenirsMsg = "Hola! Quiero consultar por souvenirs para eventos de Esencias BB.";
const contactWa = document.getElementById("contact-wa");
const souvenirsWa = document.getElementById("souvenirs-wa");
if (contactWa) {
  contactWa.href = waUrl(generalMsg);
  contactWa.target = "_blank";
  contactWa.rel = "noopener noreferrer";
}
if (souvenirsWa) {
  souvenirsWa.href = waUrl(souvenirsMsg);
  souvenirsWa.target = "_blank";
  souvenirsWa.rel = "noopener noreferrer";
}

/* ---------- menu ---------- */
const menu = document.querySelector(".menu");
if (menu) {
  menu.addEventListener("click", function (e) {
    const link = e.target.closest("a");
    if (link) menu.removeAttribute("open");
  });
  document.addEventListener("click", function (e) {
    if (menu.open && !menu.contains(e.target)) menu.removeAttribute("open");
  });
}

/* init */
measure();
goTo(0, false);
