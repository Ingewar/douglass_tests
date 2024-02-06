import { Locator, Page } from "@playwright/test";

export class CookiesModal {
    private page: Page;
    readonly acceptAllButton: Locator
    readonly moreInfoButton: Locator
    readonly denyAllButton: Locator

    constructor(page: Page) {
        this.page = page;

        this.acceptAllButton = page.locator('button.uc-list-button__accept-all');
        this.moreInfoButton = page.locator('uc-list-button__more-information');
        this.denyAllButton = page.locator('uc-list-button__more-information');
    }

}