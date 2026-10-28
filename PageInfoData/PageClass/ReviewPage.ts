import{Page} from '@playwright/test'
import Reviewjson from '../PageXapths/ReviewPage.json'
import { WebPage } from '../../CommonInfo/CommonUi'


export class ReviewPageclass
{
    page:Page;
    web:WebPage;
    constructor(page:Page)
    {
        this.page = page;
        this.web =new WebPage(page);

    }
async clickBack()
{
await this.web.clickDataFrame(Reviewjson.XFrame,Reviewjson.XBackButton)
}   
}
