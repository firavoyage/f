import { chromium } from "patchright";
import { launch } from "./sessions.js";

let context;
let page;

export async function get_page() {
  if (page) return page;

  context = await launch(chromium);
  page = context.pages()[0] ?? await context.newPage();

  return page;
}