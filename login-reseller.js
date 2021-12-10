const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
      args: ['--start-maximized'], 
  });
  const data = [{
        phone: "085894099479",
        pass: "kurniati",
  }];

const page = await browser.newPage();
await page.goto("https://evermos.com/home/", {waitUntil: 'networkidle2'});

//await page.screenshot({ path: "corona-wiki.png" });
// masuk
let masuk = '#menu-1-b1a0ff7 > li.menu-item.menu-item-type-custom.menu-item-object-custom.menu-item-7570 > a'
await page.waitForSelector(masuk)
await page.click(masuk)

//no hp
let no_phone = '#__layout > div > div:nth-child(3) > form > label:nth-child(1) > span.inputText__inner > input'
await page.waitForSelector(no_phone)
await page.type(no_phone, data[0].phone);
// password
await page.type('#__layout > div > div:nth-child(3) > form > label:nth-child(2) > span.inputText__inner > input', data[0].pass);
// login
await page.click('#__layout > div > div:nth-child(4) > button')

// let success_message = "Today"
// await page.waitForSelector(success_message)
// const mes = "#root > div > div.flex.flex-row.pt-28 > div.flex.flex-grow.admin-content.expanded > div > div > div > div.flex.flex-row.items-center > button.btn.btn--secondary"
// let get_success_message = await page.waitForSelector(mes).getProperty();
// console.log(get_success_message)
// if (success_message == get_success_message)
//     tc.TestResult = "Pass"

  // await page.close();
})();