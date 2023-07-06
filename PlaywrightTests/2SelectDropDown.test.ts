import {test, expect} from '@playwright/test'

test('Select Option From DropDown', async({page})=>{

   await page.goto("https://letcode.in/dropdowns");
    // const elementDropDown = await page.$('#fruits')
    // await elementDropDown?.selectOption({label:'Orange'});
    await page.reload();
    await page.selectOption('#fruits', {label:'Orange'})
    await page.waitForTimeout(4000);
})