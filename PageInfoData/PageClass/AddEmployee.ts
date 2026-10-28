import{Page} from '@playwright/test'
import AddEmployeejson from '../PageXapths/AddEmployee.json'
import {WebPage} from '../../CommonInfo/CommonUi'


export class AddEmployeeclass
{
    page:Page;
    web:WebPage;
    constructor(page:Page)
    {
        this.page = page;
        this.web =new WebPage(page);

    }

async AddImage()
{
 await this.web.checkElement(AddEmployeejson.XRightImage)
}
async frameEnterdata(employeeID:string,eFirst:string,elast:string,emiddle:string,enick:string)
{
 await this.web.enterDataFrame(AddEmployeejson.XFrame,AddEmployeejson.XID,employeeID)
 await this.page.waitForTimeout(500)
 await this.web.enterDataFrame(AddEmployeejson.XFrame,AddEmployeejson.XFirstName,eFirst)
 await this.page.waitForTimeout(500)
 await this.web.enterDataFrame(AddEmployeejson.XFrame,AddEmployeejson.XLastName,elast)
 await this.page.waitForTimeout(500)
 await this.web.enterDataFrame(AddEmployeejson.XFrame,AddEmployeejson.XMiddleName,emiddle)
 await this.page.waitForTimeout(500)
 await this.web.enterDataFrame(AddEmployeejson.XFrame,AddEmployeejson.XNickName,enick)
 await this.page.waitForTimeout(500)
 
}
async photoUpload(photofile:string)
{
await this.web.uploadImageFrame(AddEmployeejson.XFrame,AddEmployeejson.XPhoto,photofile)
}
async clickSave()
{
await this.web.clickDataFrame(AddEmployeejson.XFrame,AddEmployeejson.XSaveButton)
}
}










