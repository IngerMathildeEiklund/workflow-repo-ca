import { describe, expect, it } from "vitest";
import { isActivePath } from "./userInterface";

describe("isActivePath", () => {
  it("Returns true when the current path matches the href exactly", () => {
    const href = "/index.html";
    const currentPath = "/index.html";
    const result = isActivePath(href, currentPath);
    expect(result).toBe(true);
  });

  it('Returns true for root path "/" when path is "/" or "/index.html"', () => {
    const rootPath = "/";
    const href = "/";
    const indexPath = "/index.html";

    const result = isActivePath(href, rootPath);
    expect(result).toBe(true);

    const result2 = isActivePath(href, indexPath);
    expect(result2).toBe(true);
  });

  it("Returns true when the current path includes the href", () => {
    const href = "/about";
    const currentPath = "/about/tof.html";
    const result = isActivePath(href, currentPath);
    expect(result).toBe(true);
  });

  it("Returns false when paths do not match", () => {
    const href = "/index.html";
    const mismatchedPath = "/about.html";
    const result = isActivePath(href, mismatchedPath);
    expect(result).toBe(false);
  });
});
