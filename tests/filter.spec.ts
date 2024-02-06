import { test, expect } from '@playwright/test';
import { CookiesModal } from '../page-objects/components/cookies_modal';
import { HomePage } from '../page-objects/home_page';
import { ParfumPage } from '../page-objects/parfum_page';


test.beforeEach(async ({ page }) => {
  await page.goto('/de');
  const cookiesModal = new CookiesModal(page);
  await cookiesModal.acceptAllButton.click();
})

test('Filter', async ({ page }) => {
  await test.step('Open Parfum page', async () => {
    const homepage = new HomePage(page);
    await homepage.navMenu.openMenuItem('PARFUM');
  });

  await test.step('Filter', async () => {
    const parfumPage = new ParfumPage(page);
    await parfumPage.applyFilter('Produktart', 'Deodorant (106)');
    await parfumPage.applyFilter('Marke', 'Azzaro');
    await parfumPage.applyFilter('Für Wen', 'Männlich');
  });

  await test.step('Verify filter results', async () => {
    const parfumPage = new ParfumPage(page);
    await expect(parfumPage.productTile).toHaveCount(3);
  })

})


