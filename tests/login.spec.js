const{test,expect}=require('@playwright/test')
test("Login test",async({page})=>{

    await page.goto("https://demoblaze.com/index.html");
    await page.waitForTimeout(4000);
    await page.locator("//a[@id='login2']").click();
    await page.waitForTimeout(2000);
    await page.locator("//input[@id='loginusername']").fill("rupalimulje");
    await page.locator("//input[@id='loginpassword']").fill("123");
    await page.locator("//button[@onclick='logIn()']").click();
    await page.waitForTimeout(7000);

})