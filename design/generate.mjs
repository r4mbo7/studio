import { writeFileSync } from "node:fs";

const FONT = {
  B: ["11110", "10001", "10001", "11110", "10001", "10001", "11110"],
  R: ["11110", "10001", "10001", "11110", "10100", "10010", "10001"],
  O: ["01110", "10001", "10001", "10001", "10001", "10001", "01110"],
  T: ["11111", "00100", "00100", "00100", "00100", "00100", "00100"],
  H: ["10001", "10001", "10001", "11111", "10001", "10001", "10001"],
  E: ["11111", "10000", "10000", "11110", "10000", "10000", "11111"],
  C: ["01111", "10000", "10000", "10000", "10000", "10000", "01111"],
  S: ["01111", "10000", "10000", "01110", "00001", "00001", "11110"],
};

const WARM = ["#f3e9d2", "#f2c063", "#e2a034", "#d97a35", "#be5737", "#8a3a6a", "#504580"];
const BLOCKS = { C: "#2fb8e8", O: "#6cc644", S: "#e0459b" };
const U = 10;

function tile(x, y, color, delay) {
  const px = x * U, py = y * U;
  const d = delay === undefined ? "" : ` style="--d:${delay}ms"`;
  return `<g class="t"${d}><rect x="${px}" y="${py}" width="${U - 1}" height="${U - 1}" fill="${color}"/>` +
    `<rect x="${px}" y="${py}" width="${U - 1}" height="2" fill="#fff" fill-opacity=".32"/>` +
    `<rect x="${px + U - 3}" y="${py}" width="2" height="${U - 1}" fill="#000" fill-opacity=".22"/></g>`;
}

function word(text, colorFor, ox = 0, oy = 0, anim = false) {
  let out = "";
  [...text].forEach((ch, i) => {
    FONT[ch].forEach((row, y) =>
      [...row].forEach((bit, x) => {
        if (bit !== "1") return;
        const col = i * 6 + x;
        const delay = anim ? col * 22 + (6 - y) * 55 : undefined;
        out += tile(ox + col, oy + y, colorFor(ch, i, y), delay);
      }),
    );
  });
  return out;
}

const brandColor = (ch, i, y) => (i >= 7 ? BLOCKS[ch] : WARM[y]);

function wordmark({ anim = false, pad = 0, bg = null } = {}) {
  const w = 59 * U + pad * 2, h = 7 * U + pad * 2;
  const back = bg ? `<rect x="${-pad}" y="${-pad}" width="${w}" height="${h}" fill="${bg}"/>` : "";
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${-pad} ${-pad} ${w} ${h}" role="img" aria-label="BrotherCos">${back}${word("BROTHERCOS", brandColor, 0, 0, anim)}</svg>`;
}

function monogram() {
  const n = 13, w = n * U;
  let grid = "";
  for (let i = 1; i < n; i++) grid += `<path d="M${i * U - 0.5} 0V${w}M0 ${i * U - 0.5}H${w}" stroke="#262326" stroke-width="1"/>`;
  const stack = [
    [0, 11, "#e8403a"], [1, 11, "#e8403a"], [1, 12, "#e8403a"], [2, 12, "#e8403a"],
    [3, 12, "#f5c518"], [4, 12, "#f5c518"], [3, 11, "#f5c518"], [4, 11, "#f5c518"],
    [5, 12, "#3a5bd9"], [6, 12, "#3a5bd9"], [7, 12, "#3a5bd9"], [7, 11, "#3a5bd9"],
    [8, 12, "#6cc644"], [9, 12, "#6cc644"], [9, 11, "#6cc644"], [10, 11, "#6cc644"],
    [11, 12, "#a24ad0"], [12, 12, "#a24ad0"], [12, 11, "#a24ad0"], [11, 10, "#2fb8e8"],
  ].map(([x, y, c]) => tile(x, y, c)).join("");
  const letters = word("B", (ch, i, y) => WARM[y], 1, 2) + word("C", () => BLOCKS.C, 7, 2);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${w}" role="img" aria-label="Monogramme BrotherCos"><rect width="${w}" height="${w}" fill="#171614"/>${grid}${letters}${stack}</svg>`;
}

const out = new URL("./logo/", import.meta.url).pathname;
writeFileSync(out + "brothercos-logo.svg", wordmark({ pad: 20, bg: "#171614" }));
writeFileSync(out + "brothercos-logo-transparent.svg", wordmark());
writeFileSync(out + "brothercos-monogramme.svg", monogram());
