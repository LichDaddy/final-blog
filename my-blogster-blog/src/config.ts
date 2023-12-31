// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "My Magic Blog";
export const SITE_DESCRIPTION =
  "Welcome to my blog! I Write about my Competitive MtG Journey.";
export const TWITTER_HANDLE = "@MichaelCrits";
export const MY_NAME = "My Magic Blog";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
