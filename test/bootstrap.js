import {$newEvent} from '../src/helpers'

const jsdom = require('jsdom')
const { JSDOM } = jsdom

// const expect = require('chai').expect

global.window = new JSDOM(`<!DOCTYPE html>
<html>
  <head>
    <title></title>
  </head>
  <body id="app">
    <button class="toggle-graph">Test</button>
  </body>
</html>`).window

global.document = global.window.document

require('../src/bootstrap')

describe('app', function () {
  it('app#toggleGraphBtnClicked()', function (done) {
    $newEvent('toggleGraphBtnClicked', () => {
      done()
    })
    document.querySelector('.toggle-graph').click()
  })
})
