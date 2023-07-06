import {expect,test} from '@playwright/test'

test("Navigate to Amazon Home Page", async ({page}) => {
  await page.goto("https://www.amazon.in/signin/");
  await page.type("input[name=email]", "8489575703");
  await page.type("input[name=password]", "Prem@123#");
  await page.click("input[id=signInSubmit]");
  await page.waitForLoadState();
  await page.click("button[id=inbContinueWithPersonalAccount]");
  await page.waitForLoadState();
  // console.log("Url Is:" + page.url());
  // console.log("Title Is:" + (await page.title()));
  expect(page.url()).toContain("business_to_retail_welcome");
});
