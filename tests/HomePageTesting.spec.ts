import {test, expect} from '@playwright/test'
import {Homepageclass} from '../PageInfoData/PageClass/Homepage'


let hp : Homepageclass;

test.describe("Test Scenario to validate Home Page", async()=>
{
    test.beforeEach(async({page})=>
    {
        hp = new Homepageclass(page);
    })

    test("Test case1 - Test Case to check the Home Page Title", async({page})=>
    {
        await page.waitForTimeout(1000);
        hp.myApp();
        await page.waitForTimeout(3000);
    })

    test("Test case2 - Test Case to check the Home Page Orange HRM Logo", async({page})=>
    {
        await page.waitForTimeout(1000);
        hp.myApp();
        await page.waitForTimeout(3000);
        hp.orangeLogo();
        await page.waitForTimeout(2000);
    })

    test("Test case3 - Test Case to check the Home Page Employee Logo", async({page})=>
    {
        await page.waitForTimeout(3000);
        hp.myApp();
        await page.waitForTimeout(1000);
        hp.EmpLogo();
        await page.waitForTimeout(2000);
    })

    test("Test case4 - Test Case to check the Home Page Text", async({page})=>
    {
        await page.waitForTimeout(4000);
        hp.myApp();
        await page.waitForTimeout(1000);
        hp.HomepageText();
        await page.waitForTimeout(3000);
    })
})


