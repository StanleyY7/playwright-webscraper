import { test } from "@playwright/test";

const name: string = "Anthony_Joshua";

test("scrape", async ({ page }) => {
  try {
    await page.goto(`https://en.wikipedia.org/wiki/${name}`, {
      timeout: 4000,
    });
    console.log("///////////////////// STARTING ////////////////////////");
    console.log("scraping totalFights");
    const totalFights = await page
      .getByRole("cell", { name: "fights" })
      .allTextContents();
    console.log("scraping wonFights");
    const wonFights = await page
      .getByRole("cell", { name: "wins" })
      .allTextContents();
    console.log("scraping lostFights");
    const lostFights = await page
      .getByRole("cell", { name: "losses" })
      .allTextContents();
    console.log("///////////////////// FINALLY ////////////////////////");
    console.log(
      `Fighter: ${name} Total Fights: ${totalFights} wins: ${wonFights} losses: ${lostFights
        .toString()
        .replace("hide", "")}`
    );
  } catch (e) {
    console.log(`ERROR: ${e}`);
  }
});