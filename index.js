//https://www.digitalocean.com/community/tutorials/how-to-scrape-a-website-using-node-js-and-puppeteer-es

const pc = require('./browser');
const browserObject = require('./browser');
const scraperController = require('./pageController');

//Start the browser and create a browser instance
let browserInstance = browserObject.startBrowser();

// Pass the browser instance to the scraper controller
scraperController(browserInstance)