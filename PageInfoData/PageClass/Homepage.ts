import{Page} from '@playwright/test'
import Homepagejson from '../PageXapths/Homepage.json'
import Configuration from '../../MyConfigurationData/MyConfiguration.json'
import {WebPage} from '../../CommonInfo/CommonUi'

export class Homepageclass
{
    page:Page;
    web:WebPage;
    constructor(page:Page)
    {
        this.page = page;
        this.web =new WebPage(page);

    }
async myApp()
{
await this.web.lanchMyApp(Configuration.url,Configuration.homepagetitle)
 }

async orangeLogo()
{
await this.web.checkElement(Homepagejson.XHeadingLogo)
}
async EmpLogo()
{
await this.web.checkElement(Homepagejson.XEmployeeLogo)
}
async HomepageText()
{
await this.web.textElement(Homepagejson.XHeadingText)
    }

async username()
{
await this.web.enterData(Homepagejson.XUserName,Configuration.username)
    }

async password()
{

await this.web.enterData(Homepagejson.XUserPassword,Configuration.password)
 }
 async LoginButton()
 {
await this.web.clickOn(Homepagejson.XLoginButton)
 } 
 
async myscreenshot(myphoto:string)
{
await this.web.screenphoto(myphoto)

}
 
}





 
    