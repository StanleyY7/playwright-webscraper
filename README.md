# playwright-webscraper

A simple webscraper to scrape fight record data from wikipedia using Playwright.

Problem:

- Viewing fighter records on Boxrec will lead to a hard registration wall requiring sign up to view any further fighter records.

Workaround:

- Created this webscraper, doesn't rely on Boxrec, instead on wikipedia. Involves changing the name attribute and then running the relevant commands (i.e. npm run scraper) as per the scripts in package.json . It is able to scrape fight record data (total fights, wins and losses).

How to Build & Run:

- clone the repository
- run "npm i"
- change name attribute as required
- run relevant command
