import {test,expect} from "@playwright/test";

//fixtures - global variable : page , browser

// test("verify page title",async({page})=>{

//     await page.goto("https://www.physiocity.org");
//     let title: string=await page.title();
//     console.log("file",title);
//     //assertion to verify title
//     await expect(page).toHaveTitle("Home | Physiocity Academy");

// })

test("verify page url",async({page})=>{

    await page.goto("https://www.engineerdiaries.com/selenium");
    let url: string=await page.url();
    console.log("file",url);
        // Assert the expected URL
        await expect(page).toHaveURL("https://www.engineerdiaries.com/selenium");

})