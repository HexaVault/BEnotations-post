import type Decimal from "break_eternity.js";
import { Notation } from "./notation";
import { layerMagFormatting } from "./utils";
// Import { formatMantissaWithExponent, formatMantissaBaseTen } from "./utils";

export class ExtendedScientificNotation extends Notation {
  public get name(): string {
    return "Extended Scientific";
  }


  public formatLDecimal(value: Decimal, places: number): string {
    if (!value.isFinite) return `${value.sign === -1 ? "-" : ""}Infinity`;
    return layerMagFormatting(value, places, "E", "F");
  }

// Public formatDecimal(value: Decimal, places: number, placesExponent: number): string {
//   return formatMantissaWithExponent(formatMantissaBaseTen, this.formatExponent.bind(this),
//     10, 1, (x, _) => formatMantissaBaseTen(x, 0)
//   )(value, places, placesExponent);
// }
//
}
