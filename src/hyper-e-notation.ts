import type Decimal from "break_eternity.js";
import { Notation } from "./notation";
import { magLayerFormatting } from "./utils";
// Import { formatMantissaWithExponent, formatMantissaBaseTen } from "./utils";

export class HyperENotation extends Notation {
  public get name(): string {
    return "Hyper E";
  }

  public get isSlog(): boolean {
    return false;
  }

  public formatLDecimal(value: Decimal, places: number): string {
    if (value.isNan()) return "NaN";
    if (!value.isFinite()) return `${value.sign === -1 ? "-" : ""}Infinity`;
    return magLayerFormatting(value, places + 1, "E", "#");
  }

// Public formatDecimal(value: Decimal, places: number, placesExponent: number): string {
//   return formatMantissaWithExponent(formatMantissaBaseTen, this.formatExponent.bind(this),
//     10, 1, (x, _) => formatMantissaBaseTen(x, 0)
//   )(value, places, placesExponent);
// }
//
}
