const { createCursor, getRandomPagePoint } = require('ghost-cursor')
const { randomNumberRange } = require('ghost-cursor/lib/math')
const { humanType } = require('./utils')

module.exports = async (page, cursor, user, pass) => {


  console.log("user", user);
  console.log("pass", pass);

  await cursor.click("input[name='username']", {
    waitForClick: randomNumberRange(1000, 3000),
    moveDelay: randomNumberRange(1000, 3000),
    paddingPercentage: 20
  })
  await humanType(page, user.trim())

  await cursor.click("input[name='password']", {
    waitForClick: randomNumberRange(1000, 3000),
    moveDelay: randomNumberRange(1000, 3000),
    paddingPercentage: 20
  })
  await humanType(page, pass.trim())

  await cursor.click("button[data-cy='log-in']", {
    waitForClick: randomNumberRange(1000, 3000),
    moveDelay: randomNumberRange(1000, 3000),
    paddingPercentage: 20
  })

  await page.waitForTimeout(10000)

  return page.url().includes('https://www.pccomponentes.com/')
}

