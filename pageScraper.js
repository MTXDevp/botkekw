
const { randomNumberRange } = require('ghost-cursor/lib/math')
const { createCursor, getRandomPagePoint } = require('ghost-cursor')

const pageLogin = require('./pageLogin');

const scraperObject = {
    //put url in data json
    url: 'https://www.pccomponentes.com/login',

    async scraper(browser){

        let user = ""
        let pass = ""

        let page = await browser.newPage();

        await page.waitForTimeout(randomNumberRange(1000, 3000))
        
        console.log(`Navigating to ${this.url}...`);

        await page.goto(this.url);

        const cursor = createCursor(page, await getRandomPagePoint(page))


        console.log("pre user", user);
        console.log("pre passs", pass);
        //LOGIN TO ACCOUNT
        await pageLogin(page, cursor, user, pass);
       
    }

}


module.exports = scraperObject;