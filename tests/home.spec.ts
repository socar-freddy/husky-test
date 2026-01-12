import { test, expect } from '@playwright/test';

test('has landed to main page', async ({ page }) => {
  await page.goto('http://localhost:5173');

  await expect(page).toHaveURL('http://localhost:5173');
});

test('has a text', async ({ page }) => {
  await page.goto('http://localhost:5173');

  await expect(page.getByText('HomePage')).toBeVisible();
});
