import { expect, Page,Locator } from "@playwright/test"; 

export class WebPage
{
    page:Page;
    constructor(page:Page)
    {
        this.page = page
    }
async lanchMyApp(url:string,pagetitle:string)
{
 await this.page.waitForTimeout(1000);
 await this.page.goto(url);
 //page Title:OrangeHRM - New Level of HR Management
 expect(this.page).toHaveTitle(pagetitle);
}
element(loc:string):Locator
{
 return this.page.locator(loc)
}

async enterData(myloc:string, text:string)
{
 await this.element(myloc).fill(text)
}
async clickOn(myloc:string)
{
 await this.element(myloc).click();
}
async checkElement(myloc:string)
{
await expect(this.element(myloc)).toBeVisible();
}
async textElement(myloc:string)
{
console.log(await this.element(myloc).textContent());
}
async mouseHover(myloc:string)
{
 await this.element(myloc).hover();
}
async enterDataFrame(floc:string,myloc:string,text:string)
{
await this.page.frameLocator(floc).locator(myloc).fill(text)
}
async uploadImageFrame(floc:string,myloc:string,text:string)
{
await this.page.frameLocator(floc).locator(myloc).setInputFiles(text)
}
async uploadImage(myloc:string,text:string)
{
await this.element(myloc).locator(myloc).setInputFiles(text)
}
//save button
async clickDataFrame(floc:string,myloc:string)
{
await this.page.frameLocator(floc).locator(myloc).click();
}
async screenphoto(text : string)
{
await this.page.screenshot({path : text})
}

}



