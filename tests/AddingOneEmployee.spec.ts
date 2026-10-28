import {test, expect} from '@playwright/test'
import {Homepageclass} from '../PageInfoData/PageClass/Homepage'
import {PimPageclass} from '../PageInfoData/PageClass/PimPage'
import {AddEmployeeclass} from '../PageInfoData/PageClass/AddEmployee'
import {ReviewPageclass} from '../PageInfoData/PageClass/ReviewPage'

let hp :Homepageclass;
let pp :PimPageclass;
let ae:AddEmployeeclass;
let rp:ReviewPageclass;
 
test.describe("Test Scenario to validate Home Page",async()=>
{
test.beforeEach(async({page})=>
{
 hp = new Homepageclass(page);
 pp = new PimPageclass(page);
 ae = new AddEmployeeclass(page);
 rp = new ReviewPageclass(page);

})
test("Test case on Adding one Employee",async({page})=>
{
test.setTimeout(1000000);
await page.waitForTimeout(2000);
hp.myApp();
await page.waitForTimeout(1000);
hp.username();
await page.waitForTimeout(500);
hp.password();
await page.waitForTimeout(500);
hp.LoginButton();
await page.waitForTimeout(3000);
pp.PimMouseHover();
await page.waitForTimeout(3000);
pp.ClickOnAddEmployee();
await page.waitForTimeout(1000);

ae.frameEnterdata("90001","Tiger","Lion","Elephant","Hyoo");
await page.waitForTimeout(500);
ae.photoUpload("./EmpPhotos/Albert.png");
await page.waitForTimeout(8000);
ae.clickSave();
await page.waitForTimeout(8000);
rp.clickBack();
await page.waitForTimeout(5000);
})
})
