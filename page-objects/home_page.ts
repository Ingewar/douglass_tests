import { Locator, Page } from "@playwright/test";
import { NavMenu } from "./components/nav_menu";

export class HomePage {
    private page: Page;
    readonly navMenu: NavMenu;

    constructor(page: Page) {
        this.page = page;
        this.navMenu = new NavMenu(page);
    }


}