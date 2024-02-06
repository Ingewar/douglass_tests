import { Locator, Page } from "@playwright/test";
import { NavMenu } from "./components/nav_menu";

export class ParfumPage {
    private page: Page;
    readonly navMenu: NavMenu;
    readonly productTile: Locator;

    constructor(page: Page) {
        this.page = page;
        this.navMenu = new NavMenu(page);

        this.productTile = page.locator('[data-testid="product-tile"]');
    }

    async applyFilter(filter: string, option: string) {
        await this.page.locator(`//div[text()="${filter}"][@class="facet__title"]`).click();
        await this.page.locator(`//div[@class="facet-option__checkbox--rating-stars"]//div[contains(text(), "${option}")]/parent::div/preceding-sibling::div`).click();
        await this.page.locator('button.facet__close-button').click();
    }
}