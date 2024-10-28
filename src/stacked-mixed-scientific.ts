/* eslint linebreak-style: ["error", "unix"]*/
import type Decimal from "break_eternity.js";
import { Notation } from "./notation";
// Import { layerMagFormatting} from "./utils";
// Import { formatMantissaWithExponent, formatMantissaBaseTen } from "./utils";

function formatStandard(exp: number, places: number): string {
  if (exp <= 3) return String(exp);
  const STANDARD_ABBREVIATIONS = ["K", "M", "B", "T", "Qa", "Qt", "Sx", "Sp", "Oc", "No"];

  const STANDARD_PREFIXES = [
    ["", "U", "D", "T", "Qa", "Qt", "Sx", "Sp", "O", "N"],
    ["", "Dc", "Vg", "Tg", "Qd", "Qi", "Se", "St", "Og", "Nn"],
    ["", "Ce", "Dn", "Tc", "Qe", "Qu", "Sc", "Si", "Oe", "Ne"]
  ];

  // Const STANDARD_PREFIXES_2 = ["", "MI-", "MC-", "NA-", "PC-", "FM-", "AT-", "ZP-"];

  if (exp < 33) {
    return `${(10 ** (exp % 3)).toFixed(places)}${STANDARD_ABBREVIATIONS[Math.floor(exp / 3) - 1]}`;
  }

  if (exp < 3003) {
    let suffix = "";
    suffix += STANDARD_PREFIXES[0][Math.floor((exp - 3) % 30 / 3)];
    suffix += STANDARD_PREFIXES[1][Math.floor((exp - 3) % 300 / 30)];
    suffix += STANDARD_PREFIXES[2][Math.floor((exp - 3) / 300)];
    return `${(10 ** (exp % 3)).toFixed(places)}${suffix}`;
  }

  let adjustedValue = exp;
  if (exp < 3e6 + 3) {
    let suffixA = "";
    suffixA += STANDARD_PREFIXES[0][Math.floor((exp - 3) % 30 / 3)];
    suffixA += STANDARD_PREFIXES[1][Math.floor((exp - 3) % 300 / 30)];
    suffixA += STANDARD_PREFIXES[2][Math.floor((exp - 3) % 3000 / 300)];
    let suffixB = "MI-";
    adjustedValue /= 1000;
    suffixB += STANDARD_PREFIXES[0][Math.floor((adjustedValue - 3) % 30 / 3)];
    suffixB += STANDARD_PREFIXES[1][Math.floor((adjustedValue - 3) % 300 / 30)];
    suffixB += STANDARD_PREFIXES[2][Math.floor((adjustedValue - 3) % 3000 / 300)];
    return `${(10 ** (exp % 3)).toFixed(places)}${suffixB}${suffixA}`;
  }
  let suffixA = "";
  suffixA += STANDARD_PREFIXES[0][Math.floor((exp - 3) % 30 / 3)];
  suffixA += STANDARD_PREFIXES[1][Math.floor((exp - 3) % 300 / 30)];
  suffixA += STANDARD_PREFIXES[2][Math.floor((exp - 3) % 3000 / 300)];
  let suffixB = "MI-";
  adjustedValue /= 1000;
  suffixB += STANDARD_PREFIXES[0][Math.floor((adjustedValue - 3) % 30 / 3)];
  suffixB += STANDARD_PREFIXES[1][Math.floor((adjustedValue - 3) % 300 / 30)];
  suffixB += STANDARD_PREFIXES[2][Math.floor((adjustedValue - 3) % 3000 / 300)];
  let suffixC = "MC-";
  adjustedValue /= 1000;
  suffixC += STANDARD_PREFIXES[0][Math.floor((adjustedValue - 3) % 30 / 3)];
  suffixC += STANDARD_PREFIXES[1][Math.floor((adjustedValue - 3) % 300 / 30)];
  suffixC += STANDARD_PREFIXES[2][Math.floor((adjustedValue - 3) % 3000 / 300)];
  return `${(10 ** (exp % 3)).toFixed(places)}${suffixC}${suffixB}${suffixA}`;
}
export class StackedMixedScientificNotation extends Notation {
  public get name(): string {
    return "Stacked Mixed Scientific";
  }

  public get isSlog(): boolean {
    return false;
  }

  public formatLDecimal(value: Decimal, places: number): string {
    if (value.isNan()) return "NaN";
    if (!value.isFinite) return `${value.sign === -1 ? "-" : ""}Infinity`;
    if (value.layer <= 4) {
      let str = "";
      str += "e".repeat(value.layer - 1);
      if (value.mag >= 1e9) {
        str += "e";
        return `${str}${formatStandard(Math.log10(value.mag), places)}`;
      }
      return `${str}${formatStandard(value.mag, places)}`;
    }
    let num = value.layer - 2;
    let str = "";
    if (value.mag >= 1e9) {
      num += 1;
      str = `${formatStandard(Math.log10(value.mag), places)}`;
    } else {
      str = `${formatStandard(value.mag, places)}`;
    }
    return `[e^${num}]e${str}`;
  }
}

// Public formatDecimal(value: Decimal, places: number, placesExponent: number): string {
//   return formatMantissaWithExponent(formatMantissaBaseTen, this.formatExponent.bind(this),
//     10, 1, (x, _) => formatMantissaBaseTen(x, 0)
//   )(value, places, placesExponent);
// }
//
