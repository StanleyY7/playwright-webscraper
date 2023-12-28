import { test } from "@playwright/test";

const originalName: string = "Tim Tszyus";

const name: string = originalName.replace(" ", "_");

test("scrape", async ({ page }) => {
  try {
    await page.goto(`https://en.wikipedia.org/wiki/${name}`, {
      timeout: 4000,
    });
    console.log("///////////////////// STARTING ////////////////////////");
    console.log("scraping totalFights");
    const age = (await page.getByText("(age").allInnerTexts())
      .join(" ")
      .replace(/\(|\)|age/g, "")
      .replace(/\s+/g, " ")
      .trim();
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
    const draws = await page
      .locator("tr")
      .filter({ hasText: "Draws 1" })
      .locator("td")
      .allTextContents();
    console.log("///////////////////// FINALLY ////////////////////////");
    console.log(
      `Fighter: ${originalName} Age: ${
        age ? age : "NOT FOUND"
      } Total Fights: ${totalFights} wins: ${wonFights} draws: ${
        draws[0] ? draws : "0"
      } losses: ${lostFights.toString().replace("hide", "")}`
    );
  } catch (e) {
    console.log(`ERROR: ${e}`);
  }
});
