import { test, expect } from '@playwright/test';

test('has landed to counter page', async ({ page }) => {
  await page.goto('http://localhost:5173/counter');

  await expect(page).toHaveURL('http://localhost:5173/counter');
});
