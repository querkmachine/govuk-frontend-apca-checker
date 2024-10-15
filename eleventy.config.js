import { calcAPCA, fontLookupAPCA } from "apca-w3";

export default function (eleventyConfig) {
  eleventyConfig.addNunjucksGlobal("apcaScore", (foreground, background) => {
    return calcAPCA(foreground, background, 2);
  });

  eleventyConfig.addNunjucksGlobal("fontSizeMinimum", (score) => {
    const c = fontLookupAPCA(score).slice(1);
    return c;
  });

  eleventyConfig.addFilter("toFixed", (num, decimals = 2) => {
    return Number(num).toFixed(decimals);
  });

  return {};
}
