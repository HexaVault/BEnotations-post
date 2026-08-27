/* eslint-disable newline-per-chained-call */
import type Decimal from "break_eternity.js";
import { Notation } from "./notation";
import { formatNumber } from "./utils";

export class ExtendedLogarithmNotation extends Notation {
  public get name(): string {
    return "Extended Logarithm";
  }

  public get isSlog(): boolean {
    return true;
  }

  public formatLDecimal(value: Decimal, places: number): string {
    if (value.isNan()) return "NaN";
    if (!value.isFinite()) return `${value.sign === -1 ? "-" : ""}Infinity`;
    return `${value.sign === -1 ? "-" : ""}F${formatNumber(value.abs().slog().toNumber(), places + 1, false)}`;
  }
//  Public formatDecimal(value: Decimal, places: number, placesExponent: number): string {
//    const log10 = value.log10();
//    return `e${this.formatExponent(log10, places, (n, p) => n.toFixed(p), placesExponent)}`;
//  }
}
