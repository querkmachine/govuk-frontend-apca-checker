import { calcAPCA, fontLookupAPCA } from "apca-w3";
import wcagContrast from "wcag-contrast";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("style.css");

  eleventyConfig.addNunjucksGlobal("apcaScore", (foreground, background) => {
    return calcAPCA(foreground, background, 2);
  });

  eleventyConfig.addNunjucksGlobal("wcagContrast", (color1, color2) => {
    return wcagContrast.hex(color1, color2);
  });

  eleventyConfig.addNunjucksGlobal("wcagScore", (contrastRatio) => {
    return wcagContrast.score(contrastRatio);
  });

  eleventyConfig.addNunjucksGlobal("fontSizeMinimum", (score) => {
    const c = fontLookupAPCA(score).slice(1);
    return c;
  });

  eleventyConfig.addFilter("toFixed", (num, decimals = 2) => {
    return Number(num).toFixed(decimals);
  });

  return {
    pathPrefix: "/govuk-frontend-apca-checker/",
  };
}
