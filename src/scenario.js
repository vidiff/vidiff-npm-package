module.exports = `async function scenario(browser, url) {
  await browser.get(url);
  await browser.takeScreenshot('Home');
}

module.exports = scenario;
`
