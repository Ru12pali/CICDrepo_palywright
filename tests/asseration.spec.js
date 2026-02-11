// const{test,expect}=require('@playwright/test')
// test("Asserations test script",async({page})=>{

//     await page.goto("https://demo.nopcommerce.com/register");
    
// })

// const{test,expect}=require('@playwright/test')

// test("Page Titile",async({page})=>{

//     await page.goto("https://www.google.com/");
//     await expect(page).toHaveTitle("Google");
//     await page.waitForTimeout(3000);
// })

const { test, expect } = require('@playwright/test');

test('Handle dropdown and select value', async ({ page }) => {
  // Navigate to application
  await page.goto('https://the-internet.herokuapp.com/dropdown');

  // Locate the dropdown
  const dropdown = page.locator('#dropdown');

  // Select by value
  await dropdown.selectOption({ value: '1' });

  // Assertion
  await expect(dropdown).toHaveValue('1');

  // Select by visible text (label)
  await dropdown.selectOption({ label: 'Option 2' });

  await expect(dropdown).toHaveValue('2');

  // Select by index
  await dropdown.selectOption({ index: 1 });

  await expect(dropdown).toHaveValue('1');
});
