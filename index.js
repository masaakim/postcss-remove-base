module.exports = function plugin () {
    return function (root) {
        root.each(function (rule) {
            if (rule.type === 'rule' && checkBase(rule) && !rule.change) rule.removeSelf()
            if (rule.type === 'atrule') {
                rule.each(function (node) {
                    if (node.type === 'rule' && checkBase(node)) node.removeSelf()
                })
            }
        })
    }
}

function checkBase (node) {
    if (node.nodes) {
        var children = node.nodes
        var text = ''
        children.forEach(function (child) {
            if (child.type === 'comment') text = child.text
        })
        if (text.match(/\@base/)) return true
    }
    return false
}
