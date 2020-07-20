/*
 * Required for the import statements to work for html files
 * This file MUST be html.d.ts
 */
declare module "*.html" {
    const HTML: string;
    export default HTML;
}