// const{test,expect} = require('@playwright/test')
// test("Locators Script", async({page})=>{

//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
//     await page.getByPlaceholder("Username").fill("Admin");
//     await page.waitForTimeout(4000);
//     await page.getByPlaceholder("Password").fill("admin123");
//     await page.getByRole("button",{type:"submit"}).click();
//     //const link=await page.locator("//a[text()='OrangeHRM, Inc']").textContent()
//     //await expect(await page.getByText(link)).toBeVisible();
//     await page.waitForTimeout(4000);
// })
const { test, expect } = require('@playwright/test');

test('Check static page title', async ({ page }) => {
  await page.goto('file://' + __dirname + '/../index.html');
  await expect(page.locator('#title')).toHaveText('Hello CI CD');
});
