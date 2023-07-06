import { test, expect } from "@playwright/test";

test("Trace Viewer", async ({ browser }) => {
  const context = await browser.newContext();
  await context.tracing.start({
    screenshots: true,
    snapshots: true,
  });

  const page = await context.newPage();
  await page.goto("https://www.amazon.in/signin/");
  await page.type("input[name=email]", "8489575703");
  await page.type("input[name=password]", "Prem@123#");
  await page.click("input[id=signInSubmit]");
  await page.waitForLoadState();
  await page.click("button[id=inbContinueWithPersonalAccount]");
  await page.waitForLoadState();
  expect(page.url()).toContain("business_to_retail_welcome");

  await context.tracing.stop({path:'./trace.zip'})
});
