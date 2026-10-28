import {test, expect} from '@playwright/test'
import {Homepageclass} from '../PageInfoData/PageClass/Homepage'
import {PimPageclass} from '../PageInfoData/PageClass/PimPage'
import {AddEmployeeclass} from '../PageInfoData/PageClass/AddEmployee'
import {ReviewPageclass} from '../PageInfoData/PageClass/ReviewPage'
import exceldata from 'xlsx'



let hp :Homepageclass;
let pp :PimPageclass;
let ae:AddEmployeeclass;
let rp:ReviewPageclass;
 
test.describe("Test Scenario to validate Home Page",async()=>
{
 function excelinput(filepath:string,sheetname:string,)
 {
    const workBook = exceldata.readFile(filepath);
    const worksheet : any = workBook.Sheets[sheetname];
    return exceldata.utils.sheet_to_json(worksheet,{header:1})

 }
test.beforeEach(async({page})=>
{
 hp = new Homepageclass(page);
 pp = new PimPageclass(page);
 ae = new AddEmployeeclass(page);
 rp = new ReviewPageclass(page);

})
test("Test case on Adding Multiple Employees",async({page})=>
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
await page.waitForTimeout(1000);
 hp.myscreenshot('./TestEvidences/AfterLogin.jpg')
const edata :any = excelinput('./ExcelEmp/EmpData.xlsx','EmpDetails');

for(let t :number = 1; t< edata.length;t++)
{

await page.waitForTimeout(3000);
pp.PimMouseHover();
await page.waitForTimeout(3000);
pp.ClickOnAddEmployee();
await page.waitForTimeout(1000);

// ae.frameEnterdata( edata[1][0].toString(),edata[1][1],edata[1][2],edata[1][3],edata[1][4]);
ae.frameEnterdata( edata[t][0].toString(),edata[t][1],edata[t][2],edata[t][3],edata[t][4]);

await page.waitForTimeout(5000);
ae.photoUpload("./EmpPhotos/"+ edata[t][1]+".png");
await page.waitForTimeout(500);
hp.myscreenshot('./TestEvidences/'+edata[t][1] +'_BeforeSave.jpg')
ae.clickSave();
await page.waitForTimeout(3000);
hp.myscreenshot('./TestEvidences/'+edata[t][1] +'_AfterSave.jpg')
rp.clickBack();
await page.waitForTimeout(2000);
hp.myscreenshot('./TestEvidences/'+edata[t][1] +'_AfterAdd.jpg')
console.log("The Employee with Name as : " +edata[t][1] +", added successfully");
 
}
await page.waitForTimeout(5000);
})
})
