import { describe, expect, it } from "vitest";

import { applyDateInputMask } from "./date-input-mask";

function typeEach(sequence: string) {
  let previous = "";

  for (const character of sequence) {
    const next = previous + character;
    previous = applyDateInputMask(previous, next, next.length).text;
  }

  return previous;
}

describe("applyDateInputMask", () => {
  it("formats digits-only entry as MM/DD/YYYY", () => {
    expect(typeEach("0")).toBe("0");
    expect(typeEach("07")).toBe("07");
    expect(typeEach("071")).toBe("07/1");
    expect(typeEach("0712")).toBe("07/12");
    expect(typeEach("07123")).toBe("07/12/3");
    expect(typeEach("071232")).toBe("07/12/32");
    expect(typeEach("0712323")).toBe("07/12/323");
    expect(typeEach("07123232")).toBe("07/12/3232");
    expect(typeEach("071232323")).toBe("07/12/3232");
    expect(typeEach("07121992")).toBe("07/12/1992");
  });

  it("normalizes a manual slash after a single-digit month", () => {
    expect(applyDateInputMask("9", "9/", 2)).toEqual({ text: "09/", cursor: 3 });
    expect(applyDateInputMask("09", "09/", 3)).toEqual({ text: "09/", cursor: 3 });
  });

  it("keeps typing after a padded month", () => {
    expect(typeEach("9/1")).toBe("09/1");
    expect(typeEach("9/12")).toBe("09/12");
    expect(typeEach("9/12/")).toBe("09/12/");
    expect(typeEach("9/12/1992")).toBe("09/12/1992");
  });

  it("formats 09 + 1 as 09/1", () => {
    expect(applyDateInputMask("09", "091", 3).text).toBe("09/1");
  });

  it("normalizes a manual slash after a single-digit day", () => {
    expect(applyDateInputMask("09/1", "09/1/", 5).text).toBe("09/01/");
  });

  it("does not pad a leftover slash when deleting a month digit", () => {
    expect(applyDateInputMask("07/12", "0/12", 1).text).toBe("0/12");
  });

  it("keeps a trailing slash after deleting the day digit", () => {
    expect(applyDateInputMask("07/1", "07/", 3).text).toBe("07/");
  });

  it("removes a trailing slash with backspace", () => {
    expect(applyDateInputMask("07/", "07", 2).text).toBe("07");
  });

  it("places the cursor after an inserted slash when typing 071", () => {
    expect(applyDateInputMask("07", "071", 3)).toEqual({ text: "07/1", cursor: 4 });
  });

  it("ignores extra digits after a complete date", () => {
    expect(applyDateInputMask("07/12/1992", "07/12/19923", 11).text).toBe("07/12/1992");
  });

  it("normalizes a pasted complete date", () => {
    expect(applyDateInputMask("", "7/1/1992", 8).text).toBe("07/01/1992");
  });
});
