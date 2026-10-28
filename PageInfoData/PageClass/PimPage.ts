import{Page} from '@playwright/test'
import Pimpagejson from '../PageXapths/PIMpage.json'
import {WebPage} from '../../CommonInfo/CommonUi'


export class PimPageclass
{
    page:Page;
    web:WebPage;
    constructor(page:Page)
    {
        this.page = page;
        this.web =new WebPage(page);

    }

async PimLogo()
{
 await this.web.checkElement(Pimpagejson.XPimLogo)
}
async PimMouseHover()
{
 await this.web.mouseHover(Pimpagejson.XPim)
}
async ClickOnAddEmployee()
{
 await this.web.clickOn(Pimpagejson.XAddEmployee)
}

}



