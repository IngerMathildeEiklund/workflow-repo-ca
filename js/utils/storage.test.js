import { getUsername, saveUser, clearStorage } from "./storage.js";
import { describe, it, expect, beforeEach } from "vitest";

describe("getUsername", () => {
  beforeEach(() => {
    clearStorage();
  });

  it("Returns the name from the user object in storage", () => {
    saveUser({ name: "Banana Joe" });
    const result = getUsername();
    expect(result).toBe("Banana Joe");
  });
  it("Returns null when there is no user in storage", () => {
    const result = getUsername();
    expect(result).toBe(null);
  });
});
