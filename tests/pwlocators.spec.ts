/*page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured). */


import {test,expect,Locator} from "@playwright/test";

//page.getByAltText()
test("Playwright Locators",async ({page})=>{
    await page.goto("https://engineerdiaries.com/ui-framework");
   
//     const logo:Locator = page.getByAltText("Rose");

//     await expect(logo).toBeVisible();

/*Get bY Text for non interactable elements */
// await expect(page.getByText("Providing Automation Testing Courses & Training")).toBeVisible();
    
/*Get by Role Demo */
// await page.getByRole('checkbox', {name: 'In Stock only'}).click();
// await page.getByRole('button', {name: 'Sign In / Sign Up'}).click();

/*Get By Label demo */
// await page.goto("https://engineerdiaries.com/contactus");
// await page.waitForTimeout(3000); 
// await page.getByLabel('Full Name').fill("Kushagra Chaturvedi");
// await page.waitForTimeout(3000); 
// await page.getByLabel('Email Address').fill("kushagra.chaturvedi.bhargava@gmail.com");
await page.waitForTimeout(3000); //used to give a pause for execution

// /*Get By Placeholder demo */
await page.getByPlaceholder('Search Flowers...').fill('Rose');
// await page.waitForTimeout(3000);
//  await page.getByTestId("right-click-box").click();
await page.waitForTimeout(3000); //used to give a pause for execution

})

