import { test, expect } from "@playwright/test";

test.describe("navigation", () => {
  test("should navigate to the home page", async ({ page }) => {
    await page.goto("/");
  });
  test("should wait for the venues to load, the first to be visibile and clicked", async ({
    page,
  }) => {
    await page.goto("/");
    const venues = page.locator("#venue-container a");
    await expect(venues.first()).toBeVisible();

    await venues.first().click();
  });

  test("should navigate to the venue details page and display the venue details", async ({
    page,
  }) => {
    await page.goto("/");
    const venues = page.locator("#venue-container a");
    await expect(venues.first()).toBeVisible();
    await venues.first().click();
    await expect(page.locator("h1")).toContainText(/venue details/i);
  });
});
