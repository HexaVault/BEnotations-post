/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type Decimal from "break_eternity.js";
import { Notation } from "./notation";
import { layerMagFormatting, formatNumber} from "./utils";
// Import { formatMantissaWithExponent, formatMantissaBaseTen } from "./utils";


export class SemiStackedScientificNotation extends Notation {
  public get name(): string {
    return "Semi-Stacked Scientific";
  }

  public get isSlog(): boolean {
    return false;
  }

  public formatLDecimal(value: Decimal, places: number): string {
    if (value.isNan()) return "NaN";
    if (!value.isFinite()) return `${value.sign === -1 ? "-" : ""}Infinity`;
    if (value.layer <= 4) {
      let str = "";
      str += "e".repeat(value.layer - 1);
      return `${str}${formatNumber(10 ** (value.mag % 1), places + 1, false)}e${formatNumber(Math.floor(value.mag), 22, true)}`;
    }
    return layerMagFormatting(value, places + 1, "E", "F");
  }

// Public formatDecimal(value: Decimal, places: number, placesExponent: number): string {
//   return formatMantissaWithExponent(formatMantissaBaseTen, this.formatExponent.bind(this),
//     10, 1, (x, _) => formatMantissaBaseTen(x, 0)
//   )(value, places, placesExponent);
// }
//
}
