import { test, expect } from '@playwright/test';

test('has landed to counter page', async ({ page }) => {
  await page.goto('/counter');

  await expect(page).toHaveURL('/counter');
});

test('increase number value when increment button is clicked', async ({ page }) => {
  await page.goto('/counter');

  const countValue = page.getByTestId('count-value');
  const incrementButton = page.getByTestId('increment-button');

  await expect(countValue).toContainText('0');

  await incrementButton.click();

  await expect(countValue).toContainText('1');
});

test('decrease number value when decrement button is clicked', async ({ page }) => {
  await page.goto('/counter');

  const countValue = page.getByTestId('count-value');
  const decrementButton = page.getByTestId('decrement-button');

  await expect(countValue).toContainText('0');

  await decrementButton.click();

  await expect(countValue).toContainText('-1');
});
