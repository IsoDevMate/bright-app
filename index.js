import puppeteer from "puppeteer-core";


async function run(){
let browser

try {
     const auth = 'USERNAME:PASSWORD'
    browser=await puppeteer.connect({browserWSEndpoint:`wss://${auth}@zproxy.lu-superproxy.io:9222`})//uses browser websocket Endpoint
   const page= await browser.newPage();
   page.setDefaultNavigationTimeout(2*60*1000)

   await package.goto('https://amazon.com')

   const body = await page.$('body')//$ used as tghe document.getQuerySelector() but for the browser to get contents from the DOM

   const html = await page.evaluate(()=>)
    
} catch (error) {
    console.error('scrape failed',erroe)
}
finally{
    await browser?.close
}
}
run()