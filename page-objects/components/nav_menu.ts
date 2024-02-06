import { Page } from "@playwright/test";

export class NavMenu {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async openMenuItem(itemName: string) {
        await this.page.locator('a.navigation-main-entry__link').filter({ hasText: itemName }).click();
        await this.page.locator('a.navigation-main-entry__link').filter({ hasText: itemName }).blur();
    }
}