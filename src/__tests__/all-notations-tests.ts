/* eslint-disable linebreak-style */
/* eslint-disable max-lines */
import Decimal from "break_eternity.js";
import { ExtendedLogarithmNotation } from "../extended-logarithm";
import { ExtendedScientificNotation } from "../extended-scientific";
import { HyperENotation } from "../hyper-e-notation";
import { SemiStackedScientificNotation } from "../semi-stacked-scientific";
import { StackedScientificNotation } from "../stacked-scientific";
import { TetrationalNotation } from "../tetrational";
import { TrueTetrationalNotation } from "../true-tetrational";
import { SimpleExtendedScientificNotation } from "../simple-extended-scientific";
import { StackedMixedScientificNotation } from "../stacked-mixed-scientific";

describe("Semi-Stacked Scientific Notation", () => {
  const notation = new SemiStackedScientificNotation();

  it("should return the expected name", () => {
    expect(notation.name).toBe("Semi-Stacked Scientific");
  });


  it("should format values from e9e15 to ee100 as eXeY", () => {
    expect(notation.formatLDecimal(new Decimal("e7e23"), 2)).toBe("e7.00e23");
    expect(notation.formatLDecimal(new Decimal("e7.15e23"), 2)).toBe("e7.15e23");
    expect(notation.formatLDecimal(new Decimal("e7e23"), 0)).toBe("e7e23");
    expect(notation.formatLDecimal(new Decimal("e7e47"), 2)).toBe("e7.00e47");
    expect(notation.formatLDecimal(new Decimal("e7e99"), 2)).toBe("e7.00e99");
  });

  it("should format values from ee9e15 to eee100 as eeXeY", () => {
    expect(notation.formatLDecimal(new Decimal("ee7e23"), 2)).toBe("ee7.00e23");
    expect(notation.formatLDecimal(new Decimal("ee7.15e23"), 2)).toBe("ee7.15e23");
    expect(notation.formatLDecimal(new Decimal("ee7e23"), 0)).toBe("ee7e23");
    expect(notation.formatLDecimal(new Decimal("ee7e47"), 2)).toBe("ee7.00e47");
    expect(notation.formatLDecimal(new Decimal("ee7e99"), 2)).toBe("ee7.00e99");
  });

  it("should format values from eee9e15 to eeee100 as eeeXeY", () => {
    expect(notation.formatLDecimal(new Decimal("eee7e23"), 2)).toBe("eee7.00e23");
    expect(notation.formatLDecimal(new Decimal("eee7.15e23"), 2)).toBe("eee7.15e23");
    expect(notation.formatLDecimal(new Decimal("eee7e23"), 0)).toBe("eee7e23");
    expect(notation.formatLDecimal(new Decimal("eee7e47"), 2)).toBe("eee7.00e47");
    expect(notation.formatLDecimal(new Decimal("eee7e99"), 2)).toBe("eee7.00e99");
  });

  it("should format values above eeee9e15 as FxEy", () => {
    expect(notation.formatLDecimal(new Decimal("eeee7e23"), 2)).toBe("F4E7.00e23");
    expect(notation.formatLDecimal(new Decimal("eeee7.15e23"), 2)).toBe("F4E7.15e23");
    expect(notation.formatLDecimal(new Decimal("eeee7e23"), 0)).toBe("F4E7e23");
    expect(notation.formatLDecimal(new Decimal("eeee7e47"), 2)).toBe("F4E7.00e47");
    expect(notation.formatLDecimal(new Decimal("eeee7e99"), 2)).toBe("F4E7.00e99");
  });
});

describe("Stacked Scientific Notation", () => {
  const notation = new StackedScientificNotation();

  it("should return the expected name", () => {
    expect(notation.name).toBe("Stacked Scientific");
  });


  it("should format values from e9e15 to ee100 as eXeY", () => {
    expect(notation.formatLDecimal(new Decimal("e7e23"), 2)).toBe("e7.00e23");
    expect(notation.formatLDecimal(new Decimal("e7.15e23"), 2)).toBe("e7.15e23");
    expect(notation.formatLDecimal(new Decimal("e7e23"), 0)).toBe("e7e23");
    expect(notation.formatLDecimal(new Decimal("e7e47"), 2)).toBe("e7.00e47");
    expect(notation.formatLDecimal(new Decimal("e7e99"), 2)).toBe("e7.00e99");
  });

  it("should format values from ee9e15 to eee100 as eeXeY", () => {
    expect(notation.formatLDecimal(new Decimal("ee7e23"), 2)).toBe("ee7.00e23");
    expect(notation.formatLDecimal(new Decimal("ee7.15e23"), 2)).toBe("ee7.15e23");
    expect(notation.formatLDecimal(new Decimal("ee7e23"), 0)).toBe("ee7e23");
    expect(notation.formatLDecimal(new Decimal("ee7e47"), 2)).toBe("ee7.00e47");
    expect(notation.formatLDecimal(new Decimal("ee7e99"), 2)).toBe("ee7.00e99");
  });

  it("should format values from eee9e15 to eeee100 as eeeXeY", () => {
    expect(notation.formatLDecimal(new Decimal("eee7e23"), 2)).toBe("eee7.00e23");
    expect(notation.formatLDecimal(new Decimal("eee7.15e23"), 2)).toBe("eee7.15e23");
    expect(notation.formatLDecimal(new Decimal("eee7e23"), 0)).toBe("eee7e23");
    expect(notation.formatLDecimal(new Decimal("eee7e47"), 2)).toBe("eee7.00e47");
    expect(notation.formatLDecimal(new Decimal("eee7e99"), 2)).toBe("eee7.00e99");
  });

  it("should format values above eeee9e15 as [e^x]y", () => {
    expect(notation.formatLDecimal(new Decimal("eeee7e23"), 2)).toBe("[e^4]7.00e23");
    expect(notation.formatLDecimal(new Decimal("eeee7.15e23"), 2)).toBe("[e^4]7.15e23");
    expect(notation.formatLDecimal(new Decimal("eeee7e23"), 0)).toBe("[e^4]7e23");
    expect(notation.formatLDecimal(new Decimal("eeee7e47"), 2)).toBe("[e^4]7.00e47");
    expect(notation.formatLDecimal(new Decimal("eeee7e99"), 2)).toBe("[e^4]7.00e99");
  });
});

describe("Extended Scientific Notation", () => {
  const notation = new ExtendedScientificNotation();

  it("should return the expected name", () => {
    expect(notation.name).toBe("Extended Scientific");
  });


  it("should format all values as FxEy", () => {
    expect(notation.formatLDecimal(new Decimal("e7e23"), 2)).toBe("F1E7.00e23");
    expect(notation.formatLDecimal(new Decimal("e7.15e23"), 2)).toBe("F1E7.15e23");
    expect(notation.formatLDecimal(new Decimal("e7e23"), 0)).toBe("F1E7e23");
    expect(notation.formatLDecimal(new Decimal("e7e47"), 2)).toBe("F1E7.00e47");
    expect(notation.formatLDecimal(new Decimal("e7e99"), 2)).toBe("F1E7.00e99");
    expect(notation.formatLDecimal(new Decimal("ee7e23"), 2)).toBe("F2E7.00e23");
    expect(notation.formatLDecimal(new Decimal("ee7.15e23"), 2)).toBe("F2E7.15e23");
    expect(notation.formatLDecimal(new Decimal("ee7e23"), 0)).toBe("F2E7e23");
    expect(notation.formatLDecimal(new Decimal("ee7e47"), 2)).toBe("F2E7.00e47");
    expect(notation.formatLDecimal(new Decimal("ee7e99"), 2)).toBe("F2E7.00e99");
    expect(notation.formatLDecimal(new Decimal("eee7e23"), 2)).toBe("F3E7.00e23");
    expect(notation.formatLDecimal(new Decimal("eee7.15e23"), 2)).toBe("F3E7.15e23");
    expect(notation.formatLDecimal(new Decimal("eee7e23"), 0)).toBe("F3E7e23");
    expect(notation.formatLDecimal(new Decimal("eee7e47"), 2)).toBe("F3E7.00e47");
    expect(notation.formatLDecimal(new Decimal("eee7e99"), 2)).toBe("F3E7.00e99");
    expect(notation.formatLDecimal(new Decimal("eeee7e23"), 2)).toBe("F4E7.00e23");
    expect(notation.formatLDecimal(new Decimal("eeee7.15e23"), 2)).toBe("F4E7.15e23");
    expect(notation.formatLDecimal(new Decimal("eeee7e23"), 0)).toBe("F4E7e23");
    expect(notation.formatLDecimal(new Decimal("eeee7e47"), 2)).toBe("F4E7.00e47");
    expect(notation.formatLDecimal(new Decimal("eeee7e99"), 2)).toBe("F4E7.00e99");
  });

  // This is purely to make sure formatting works fine for these super large inputs, and
  // if these work then all the others should aswell, so dont bother testing all of them
  it("should format all super-large values as FxEy correctly", () => {
    expect(notation.formatLDecimal(new Decimal("(e^2.34e15)1234"), 2)).toBe("F2.34e15E1.00e1234");
    expect(notation.formatLDecimal(new Decimal("(e^2.34e15)1234"), 0)).toBe("F2e15E1e1234");
  });
});

describe("Extended Logarithm Notation", () => {
  const notation = new ExtendedLogarithmNotation();

  it("should return the expected name", () => {
    expect(notation.name).toBe("Extended Logarithm");
  });


  it("should format all values as Fx", () => {
    expect(notation.formatLDecimal(new Decimal("e7e23"), 2)).toBe("F3.19");
    expect(notation.formatLDecimal(new Decimal("e7.15e23"), 2)).toBe("F3.19");
    expect(notation.formatLDecimal(new Decimal("e7e23"), 0)).toBe("F3");
    expect(notation.formatLDecimal(new Decimal("e7e47"), 2)).toBe("F3.30");
    expect(notation.formatLDecimal(new Decimal("e7e99"), 2)).toBe("F3.39");
    expect(notation.formatLDecimal(new Decimal("ee7e23"), 3)).toBe("F4.188");
    expect(notation.formatLDecimal(new Decimal("ee7.15e23"), 3)).toBe("F4.188");
    expect(notation.formatLDecimal(new Decimal("ee7e23"), 0)).toBe("F4");
    expect(notation.formatLDecimal(new Decimal("ee7e47"), 3)).toBe("F4.300");
    expect(notation.formatLDecimal(new Decimal("ee7e99"), 3)).toBe("F4.393");
    expect(notation.formatLDecimal(new Decimal("eee7e23"), 4)).toBe("F5.1880");
    expect(notation.formatLDecimal(new Decimal("eee7.15e23"), 4)).toBe("F5.1881");
    expect(notation.formatLDecimal(new Decimal("eee7e23"), 0)).toBe("F5");
    expect(notation.formatLDecimal(new Decimal("eee7e47"), 4)).toBe("F5.2999");
    expect(notation.formatLDecimal(new Decimal("eee7e99"), 4)).toBe("F5.3927");
    expect(notation.formatLDecimal(new Decimal("eeee7e23"), 5)).toBe("F6.18799");
    expect(notation.formatLDecimal(new Decimal("eeee7.15e23"), 5)).toBe("F6.18806");
    expect(notation.formatLDecimal(new Decimal("eeee7e23"), 0)).toBe("F6");
    expect(notation.formatLDecimal(new Decimal("eeee7e47"), 5)).toBe("F6.29987");
    expect(notation.formatLDecimal(new Decimal("eeee7e99"), 5)).toBe("F6.39273");
  });
});

describe("Hyper E Notation", () => {
  const notation = new HyperENotation();

  it("should return the expected name", () => {
    expect(notation.name).toBe("Hyper E");
  });


  it("should format all values as Ex#Y", () => {
    expect(notation.formatLDecimal(new Decimal("e7e23"), 2)).toBe("E7.00e23#1");
    expect(notation.formatLDecimal(new Decimal("e7.15e23"), 2)).toBe("E7.15e23#1");
    expect(notation.formatLDecimal(new Decimal("e7e23"), 0)).toBe("E7e23#1");
    expect(notation.formatLDecimal(new Decimal("e7e47"), 2)).toBe("E7.00e47#1");
    expect(notation.formatLDecimal(new Decimal("e7e99"), 2)).toBe("E7.00e99#1");
    expect(notation.formatLDecimal(new Decimal("ee7e23"), 2)).toBe("E7.00e23#2");
    expect(notation.formatLDecimal(new Decimal("ee7.15e23"), 2)).toBe("E7.15e23#2");
    expect(notation.formatLDecimal(new Decimal("ee7e23"), 0)).toBe("E7e23#2");
    expect(notation.formatLDecimal(new Decimal("ee7e47"), 2)).toBe("E7.00e47#2");
    expect(notation.formatLDecimal(new Decimal("ee7e99"), 2)).toBe("E7.00e99#2");
    expect(notation.formatLDecimal(new Decimal("eee7e23"), 2)).toBe("E7.00e23#3");
    expect(notation.formatLDecimal(new Decimal("eee7.15e23"), 2)).toBe("E7.15e23#3");
    expect(notation.formatLDecimal(new Decimal("eee7e23"), 0)).toBe("E7e23#3");
    expect(notation.formatLDecimal(new Decimal("eee7e47"), 2)).toBe("E7.00e47#3");
    expect(notation.formatLDecimal(new Decimal("eee7e99"), 2)).toBe("E7.00e99#3");
    expect(notation.formatLDecimal(new Decimal("eeee7e23"), 2)).toBe("E7.00e23#4");
    expect(notation.formatLDecimal(new Decimal("eeee7.15e23"), 2)).toBe("E7.15e23#4");
    expect(notation.formatLDecimal(new Decimal("eeee7e23"), 0)).toBe("E7e23#4");
    expect(notation.formatLDecimal(new Decimal("eeee7e47"), 2)).toBe("E7.00e47#4");
    expect(notation.formatLDecimal(new Decimal("eeee7e99"), 2)).toBe("E7.00e99#4");
  });
});

describe("Tetrational Notation", () => {
  const notation = new TetrationalNotation();

  it("should return the expected name", () => {
    expect(notation.name).toBe("Tetrational");
  });


  it("should format all values as 10^^x^y", () => {
    expect(notation.formatLDecimal(new Decimal("e7e23"), 2)).toBe("10^^1^7.00e23");
    expect(notation.formatLDecimal(new Decimal("e7.15e23"), 2)).toBe("10^^1^7.15e23");
    expect(notation.formatLDecimal(new Decimal("e7e23"), 0)).toBe("10^^1^7e23");
    expect(notation.formatLDecimal(new Decimal("e7e47"), 2)).toBe("10^^1^7.00e47");
    expect(notation.formatLDecimal(new Decimal("e7e99"), 2)).toBe("10^^1^7.00e99");
    expect(notation.formatLDecimal(new Decimal("ee7e23"), 2)).toBe("10^^2^7.00e23");
    expect(notation.formatLDecimal(new Decimal("ee7.15e23"), 2)).toBe("10^^2^7.15e23");
    expect(notation.formatLDecimal(new Decimal("ee7e23"), 0)).toBe("10^^2^7e23");
    expect(notation.formatLDecimal(new Decimal("ee7e47"), 2)).toBe("10^^2^7.00e47");
    expect(notation.formatLDecimal(new Decimal("ee7e99"), 2)).toBe("10^^2^7.00e99");
    expect(notation.formatLDecimal(new Decimal("eee7e23"), 2)).toBe("10^^3^7.00e23");
    expect(notation.formatLDecimal(new Decimal("eee7.15e23"), 2)).toBe("10^^3^7.15e23");
    expect(notation.formatLDecimal(new Decimal("eee7e23"), 0)).toBe("10^^3^7e23");
    expect(notation.formatLDecimal(new Decimal("eee7e47"), 2)).toBe("10^^3^7.00e47");
    expect(notation.formatLDecimal(new Decimal("eee7e99"), 2)).toBe("10^^3^7.00e99");
    expect(notation.formatLDecimal(new Decimal("eeee7e23"), 2)).toBe("10^^4^7.00e23");
    expect(notation.formatLDecimal(new Decimal("eeee7.15e23"), 2)).toBe("10^^4^7.15e23");
    expect(notation.formatLDecimal(new Decimal("eeee7e23"), 0)).toBe("10^^4^7e23");
    expect(notation.formatLDecimal(new Decimal("eeee7e47"), 2)).toBe("10^^4^7.00e47");
    expect(notation.formatLDecimal(new Decimal("eeee7e99"), 2)).toBe("10^^4^7.00e99");
  });
});

describe("True Tetrational Notation", () => {
  const notation = new TrueTetrationalNotation();

  it("should return the expected name", () => {
    expect(notation.name).toBe("True Tetrational");
  });


  it("should format all values as Fx", () => {
    expect(notation.formatLDecimal(new Decimal("e7e23"), 2)).toBe("10^^3.19");
    expect(notation.formatLDecimal(new Decimal("e7.15e23"), 2)).toBe("10^^3.19");
    expect(notation.formatLDecimal(new Decimal("e7e23"), 0)).toBe("10^^3");
    expect(notation.formatLDecimal(new Decimal("e7e47"), 2)).toBe("10^^3.30");
    expect(notation.formatLDecimal(new Decimal("e7e99"), 2)).toBe("10^^3.39");
    expect(notation.formatLDecimal(new Decimal("ee7e23"), 3)).toBe("10^^4.188");
    expect(notation.formatLDecimal(new Decimal("ee7.15e23"), 3)).toBe("10^^4.188");
    expect(notation.formatLDecimal(new Decimal("ee7e23"), 0)).toBe("10^^4");
    expect(notation.formatLDecimal(new Decimal("ee7e47"), 3)).toBe("10^^4.300");
    expect(notation.formatLDecimal(new Decimal("ee7e99"), 3)).toBe("10^^4.393");
    expect(notation.formatLDecimal(new Decimal("eee7e23"), 4)).toBe("10^^5.1880");
    expect(notation.formatLDecimal(new Decimal("eee7.15e23"), 4)).toBe("10^^5.1881");
    expect(notation.formatLDecimal(new Decimal("eee7e23"), 0)).toBe("10^^5");
    expect(notation.formatLDecimal(new Decimal("eee7e47"), 4)).toBe("10^^5.2999");
    expect(notation.formatLDecimal(new Decimal("eee7e99"), 4)).toBe("10^^5.3927");
    expect(notation.formatLDecimal(new Decimal("eeee7e23"), 5)).toBe("10^^6.18799");
    expect(notation.formatLDecimal(new Decimal("eeee7.15e23"), 5)).toBe("10^^6.18806");
    expect(notation.formatLDecimal(new Decimal("eeee7e23"), 0)).toBe("10^^6");
    expect(notation.formatLDecimal(new Decimal("eeee7e47"), 5)).toBe("10^^6.29987");
    expect(notation.formatLDecimal(new Decimal("eeee7e99"), 5)).toBe("10^^6.39273");
  });
});

describe("Simple Extended Scientific Notation", () => {
  const notation = new SimpleExtendedScientificNotation();

  it("should return the expected name", () => {
    expect(notation.name).toBe("Simple Extended Scientific");
  });

  it("should format NaN, Infinity, and -Infinity correctly", () => {
    expect(notation.formatLDecimal(Decimal.dNaN, 2)).toBe("NaN");
    expect(notation.formatLDecimal(Decimal.dNaN, 10)).toBe("NaN");
    expect(notation.formatLDecimal(Decimal.dInf, 2)).toBe("Infinity");
    expect(notation.formatLDecimal(Decimal.dInf, 10)).toBe("Infinity");
    expect(notation.formatLDecimal(Decimal.dNegInf, 2)).toBe("-Infinity");
    expect(notation.formatLDecimal(Decimal.dNegInf, 10)).toBe("-Infinity");
  });

  it("should format all values from e9e15 up to eee9 as eXeY", () => {
    expect(notation.formatLDecimal(new Decimal("e9e15"), 2)).toBe("e9.00e15");
    expect(notation.formatLDecimal(new Decimal("ee100"), 2)).toBe("e1.00e100");
    expect(notation.formatLDecimal(new Decimal("ee100000"), 2)).toBe("e1.00e100000");
    expect(notation.formatLDecimal(new Decimal("ee1000000"), 2)).toBe("ee1,000,000");
    expect(notation.formatLDecimal(new Decimal("ee1325700"), 2)).toBe("ee1,325,700");
    expect(notation.formatLDecimal(new Decimal("ee1325700"), 10)).toBe("ee1,325,700");
    expect(notation.formatLDecimal(new Decimal("eee8"), 2)).toBe("ee100,000,000");
  });

  it("should format values from eeee1000 to F1e6 as xFy", () => {
    expect(notation.formatLDecimal(new Decimal("eeee10000"), 2)).toBe("5.10F5");
    expect(notation.formatLDecimal(new Decimal("eeee10000"), 3)).toBe("5.100F5");
    expect(notation.formatLDecimal(new Decimal("eeee100000"), 2)).toBe("6.17F5");
    expect(notation.formatLDecimal(new Decimal("eeeeee6"), 2)).toBe("7.09F6");
    expect(notation.formatLDecimal(new Decimal("(e^12)1234"), 2)).toBe("3.99F13");
    expect(notation.formatLDecimal(new Decimal("(e^12)1234"), 3)).toBe("3.994F13");
    expect(notation.formatLDecimal(new Decimal("(e^100)3283"), 2)).toBe("4.52F101");
    expect(notation.formatLDecimal(new Decimal("(e^100)3283"), 3)).toBe("4.518F101");
    expect(notation.formatLDecimal(new Decimal("(e^1.23e5)6969"), 2)).toBe("4.92F123,001");
    expect(notation.formatLDecimal(new Decimal("(e^1.23e5)6969"), 3)).toBe("4.919F123,001");
  });

  it("should format values from F1e6 to F1e9 as Fxxx,xxx", () => {
    expect(notation.formatLDecimal(new Decimal("(e^1.23e6)1"), 2)).toBe("1.00F1,230,000");
    expect(notation.formatLDecimal(new Decimal("(e^1.293e7)1"), 2)).toBe("1.00F12,930,000");
    expect(notation.formatLDecimal(new Decimal("(e^1.2344e8)1"), 3)).toBe("1.000F123,440,000");
  });

  it("should format values from F1e9 to F1.79e308 as xFyeZ", () => {
    expect(notation.formatLDecimal(new Decimal("(e^1e9)39"), 2)).toBe("1.86F1.0e9");
    expect(notation.formatLDecimal(new Decimal("(e^1e9)39"), 3)).toBe("1.859F1.00e9");
    expect(notation.formatLDecimal(new Decimal("(e^1.289e20)2"), 2)).toBe("1.00F1.3e20");
    expect(notation.formatLDecimal(new Decimal("(e^1.289e20)2"), 3)).toBe("1.000F1.29e20");
    expect(notation.formatLDecimal(new Decimal("(e^1.3923e80)39"), 2)).toBe("1.00F1.4e80");
    expect(notation.formatLDecimal(new Decimal("(e^1.3923e80)39"), 3)).toBe("1.000F1.39e80");
    expect(notation.formatLDecimal(new Decimal("(e^1.7583e163)100"), 2)).toBe("1.00F1.8e163");
    expect(notation.formatLDecimal(new Decimal("(e^1.7583e163)100"), 3)).toBe("1.000F1.76e163");
    expect(notation.formatLDecimal(new Decimal("(e^1.9203e274)85"), 2)).toBe("1.00F1.9e274");
    expect(notation.formatLDecimal(new Decimal("(e^1.9203e274)85"), 3)).toBe("1.000F1.92e274");
  });
});

describe("Stacked Mixed Scientific Notation", () => {
  const notation = new StackedMixedScientificNotation();

  it("should return the expected name", () => {
    expect(notation.name).toBe("Stacked Mixed Scientific");
  });


  it("should format all values appropriately", () => {
    expect(notation.formatLDecimal(new Decimal("e7e23"), 2)).toBe("e700.00Sx");
    expect(notation.formatLDecimal(new Decimal("e7e9"), 2)).toBe("e7.00B");
    expect(notation.formatLDecimal(new Decimal("ee3e3"), 2)).toBe("e1.00NNnNe");
    expect(notation.formatLDecimal(new Decimal("eee3e3"), 2)).toBe("ee1.00NNnNe");
    expect(notation.formatLDecimal(new Decimal("eeee3e3"), 2)).toBe("eee1.00NNnNe");
    expect(notation.formatLDecimal(new Decimal("eeeee3e3"), 2)).toBe("[e^3]e1.00NNnNe");
  });
});
