const puppeteer = require('puppeteer');

(async ()=>{
var phone = [""];
var mensagem = "";

const browser = await puppeteer.launch({headless : false});
const page = await browser.newPage();

await page.goto('https://web.whatsapp.com/send?phone=+'+phone[0]+'&text='+mensagem+'');
await delay(40000);

console.log("Conectado com sucesso!");
console.log("Enviando mensagem");

await page.click("span[data-testid='send']");
await delay(20000);

for(var index = 1 ; index < phone.length ; index++){
await page.goto('https://web.whatsapp.com/send?phone=+'+phone[index]+'&text='+mensagem+'');
await delay(10000);
console.log("Enviando mensagem");
await page.click("span[data-testid='send']");
await delay(20000);
}

})();
function delay(time){
    return new Promise(function (resolve){
        setTimeout(resolve,time);
    });
}