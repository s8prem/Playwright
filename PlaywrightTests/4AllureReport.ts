import {test, expect} from '@playwright/test'

test('Allure Report', async({page})=>{
    await page.goto("https://www.amazon.in/signin/");
    await page.type("input[name=email]", "8489575703");
    await page.type("input[name=password]", "Prem@123#");
    await page.click("input[id=signInSubmit]");
    await page.waitForLoadState();
    await page.click("button[id=inbContinueWithPersonalAccount]");
    await page.waitForLoadState();
    expect(page.url()).toContain("business_to_retail_welcome");
    // await page.hover('a[id=nav-link-accountList]');
    // await page.click('text=Sign Out');
    // await page.waitForLoadState();
    // expect(page.url()).toContain("signin");
})