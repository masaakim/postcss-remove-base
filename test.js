var removeBase = require('./')
var fs = require('fs')
var postcss = require('postcss')
var test = require('tape')

var css = fs.readFileSync('fixture.css', 'utf-8').trim()

test('test', function (t) {
    var actual = postcss().use(removeBase()).process(css).css.trim()
    var expected = fs.readFileSync('expected.css', 'utf-8').trim()
    t.same(actual, expected)
    t.end()
})
