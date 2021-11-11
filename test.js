const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");

async function example(){
    var searchString = "Automation testing with Selenium";
 
    let driver = await new Builder().forBrowser("chrome").build();
    try{
    await driver.get("http://www.calculator.net/");

    await driver.findElement(By.xpath("/html/body/div[4]/div/table/tbody/tr/td[3]/div[2]/a")).click();

    await driver.findElement(By.xpath("/html/body/div[3]/div[1]/table[2]/tbody/tr/td/div[3]/a")).click();

    await driver.findElement(By.id("cpar1")).sendKeys("uh");

    await driver.findElement(By.id("cpar2")).sendKeys("1pl");

    await driver.findElement(By.xpath(".//*[@id = 'content']/table/tbody/tr[2]/td/input[2]")).click();
 
    var result = await driver.findElement(By.xpath("/html/body/div[3]/div[1]/p[2]/font/b")).getText();

    console.log("the result is " + result);
    }
    finally{
    await driver.quit();
    }
}

example();