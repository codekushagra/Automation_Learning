import {test,expect,Locator} from "@playwright/test";

test("DYnamic elements",async({page},testInfo)=>{
    await page.goto("https://testautomationpractice.blogspot.com");
    await page.waitForTimeout(3000);

    await page.locator("//button[@name='start']").click();
    await page.waitForTimeout(3000);

    //using css
    await page.locator('button[name="start"],button[name="stop"]').click();
    await page.waitForTimeout(3000);
    // await testInfo.attach('final-screenshot', {
    //     body: await page.screenshot(),
    //     contentType: 'image/png'
    // });

    //using playwright specific locators
    await page.getByRole('button',{name: /START|STOP/}).click();
    await page.waitForTimeout(3000);
})