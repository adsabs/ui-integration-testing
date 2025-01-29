import {configDotenv} from 'dotenv';
import {expect, test} from '@playwright/test';

configDotenv();

test.use({
  baseURL: 'https://qa.adsabs.harvard.edu'
});

const MODULE_TIMEOUT = 7000;
const NAVIGATION_TIMEOUT = 4000;
test.setTimeout(MODULE_TIMEOUT * 3 * 3 + 100);

test('Can load the home page', async ({page, context}) => {
  const requestCounts = {
    'discovery.config.js': 0,
    'landing-page.config.js': 0,
    'main.config.js': 0,
  }

  await page.route('**', async route => {

    if (route.request().url().match(/discovery\.config\.js/)) {
      requestCounts['discovery.config.js']++;
      await new Promise(resolve => setTimeout(resolve, MODULE_TIMEOUT + 100));
    }
    if (route.request().url().match(/landing-page\.config\.js/)) {
      requestCounts['landing-page.config.js']++;
    }
    if (route.request().url().match(/main\.config\.js/)) {
      requestCounts['main.config.js']++;
    }

    await route.continue();
  });
  await page.goto('/');

  // assert we have shown the user an error message and that we refreshed the page
  await page.getByTestId('app-error').waitFor({state: 'visible', timeout: MODULE_TIMEOUT * 2 + 100});
  expect(requestCounts).toStrictEqual({
    'discovery.config.js': 1,
    'landing-page.config.js': 1,
    'main.config.js': 1,
  })
  expect(await page.getByTestId('app-error').textContent()).toContain('Failed to load');
  await page.waitForTimeout(NAVIGATION_TIMEOUT + 1000);
  await page.waitForLoadState('domcontentloaded')

  // refresh 2
  await page.getByTestId('app-error').waitFor({state: 'visible', timeout: MODULE_TIMEOUT * 2 + 100});
  expect(requestCounts).toStrictEqual({
    'discovery.config.js': 2,
    'landing-page.config.js': 2,
    'main.config.js': 2,
  })
  expect(await page.getByTestId('app-error').textContent()).toContain('Failed to load');
  await page.waitForTimeout(NAVIGATION_TIMEOUT + 1000);
  await page.waitForLoadState('domcontentloaded')

  // final refresh, assert we see the error message but no longer will the page load
  await page.getByTestId('app-error').waitFor({state: 'visible', timeout: MODULE_TIMEOUT * 2 + 100});
  expect(await page.getByTestId('app-error').textContent()).toContain('Please try again later');
  expect(requestCounts).toStrictEqual({
    'discovery.config.js': 3,
    'landing-page.config.js': 3,
    'main.config.js': 3,
  })
});
