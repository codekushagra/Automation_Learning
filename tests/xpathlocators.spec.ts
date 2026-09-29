import {test,expect,Locator} from "@playwright/test"

test("Xpath Locators",async({page})=>{ 
    await page.goto("https://demowebshop.tricentis.com/");
    await page.waitForTimeout(3000);
    //1. Relative xpath
    const logo:Locator =page.locator("//img[@alt='Tricentis Demo Web Shop']");
    await expect(logo).toBeVisible();
    //2., Absolute Path
    
    const abspath:Locator = page.locator("/html/body/div[4]/div[1]/div[1]/div[1]/a/img");
    await expect(logo).toBeVisible();

    //3. xpath with contains method - useful when trying to locate dynamic elements
    //Syntax : //*[contains(@class,'btn')]
    const products:Locator =  page.locator("//h2/a[contains(@href,'computer')]");
    const counter: number = await products.count();
    console.log("No of computer related products",counter);
    expect(counter).toBeGreaterThan(0);

    //console.log(await products.textContent()); //error : strict mode violatio because it contains multiple elements and we cannot perform action
    console.log("First computer related product",products.first().textContent());
    console.log("Nth computer rearted prodiucts",await products.nth(3).textContent()); //inde xtsrats from zero


    let productTitles:string[] = await products.allTextContents();
    for(let pt of productTitles){
        console.log(pt);

        //4 . starts with()
        const buildingProduct = page.locator("//h2/a[starts-with(@href,'/build')]");
        const count = await buildingProduct.count();
        expect(count).toBeGreaterThan(0);


    }

    //text() - return single element
    const button1:Locator = page.locator("//a[text()='Register']");
    expect(button1).toBeVisible();

    //normalize space
    const butto1:Locator = page.locator("//a[normalize-space()='Register']");
    await expect(butto1).toBeVisible();

    //last() method
    const link:Locator = page.locator("//div[@class='column follow-us']//li[last()]");
    console.log("Text content of last element",await link.textContent());
}) 