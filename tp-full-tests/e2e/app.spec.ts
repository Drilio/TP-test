import { test, expect } from '@playwright/test';
import { describe } from 'node:test';

test.beforeEach(async({page})=>{
    await page.goto('http://localhost:5173/')
})
describe('mesTests',()=>{
    test('test', async ({ page }) => {
      await page.locator('#lune').fill('');
      await expect(page.locator('#solution')).toBeDisabled();
      await page.locator('#lune').fill('2');
      await page.locator('#solution').click();
      await expect(page.locator('#result')).toBeVisible()
})
})