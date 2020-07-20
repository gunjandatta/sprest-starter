import { Web } from "gd-sprest";
import * as HTML from "./main.html";

// Main project
export class Project {
    /**
     * Renders the project.
     * @param el - The element to render the main solution to.
     */
    constructor(el: Element) {
        // Render the solution
        this.render(el);
    }

    /**
     * Main render method
     * @param el - The element to render the main solution to.
     */
    private render(el: Element) {
        // Get the current user information
        Web().CurrentUser().execute(user => {
            // Append the html
            el.innerHTML += (HTML as any as string)
                .replace(/{UserName}/g, user.Title)
                .replace(/{IsAdmin}/g, user.IsSiteAdmin ? "Yes" : "No");
        });
    }
}