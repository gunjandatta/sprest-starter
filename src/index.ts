import { Configuration } from "./cfg";
import { Project } from "./components";
import Strings from "./strings";

/**
 * Global Variable
 */
window[Strings.GlobalVariable] = {
    Configuration
}

/**
 * Main
 */

// Get the main element to render the solution to
let el = document.getElementById(Strings.AppElementId);
if (el) {
    // Initialize the solution
    new Project(el);
} else {
    // Log
    console.log("[" + Strings.ProjectName + "] Error finding the element with id '" + Strings.AppElementId + "'");
}