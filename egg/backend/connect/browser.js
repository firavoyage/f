import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { chromium } from "patchright";

/**
 * base directory for egg browser profiles
 */
const base_dir = path.join(os.homedir(), ".egg", "browser");

/**
 * resolve profile directory
 *
 * @param {object} params
 * @param {string} params.profile
 * @returns {string}
 */
const path_profile = ({ profile }) =>
  path.join(base_dir, profile);

/**
 * ensure directory exists
 *
 * @param {object} params
 * @param {string} params.dir
 */
const ensure = async ({ dir }) => {
  await fs.promises.mkdir(dir, { recursive: true });
};

/**
 * open persistent browser context
 *
 * @param {object} params
 * @param {import("patchright").Page} [params.page]
 * @param {string} [params.profile="default"]
 * @returns {Promise<import("patchright").Page>}
 */
export const open = async ({ page, profile = "default" } = {}) => {
  if (page) return page;

  const dir = path_profile({ profile });

  await ensure({ dir });

  const context = await chromium.launchPersistentContext(dir, {
    headless: false,
  });

  const current = context.pages()[0] ?? await context.newPage();

  return current;
};
