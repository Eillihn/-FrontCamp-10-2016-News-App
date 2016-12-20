module.exports = function({
    types: t
}) {

    return {
        visitor: {
            BinaryExpression(path) {
                if (path.node.operator === '==') {
                    path.node.operator = '===';
                }
            }
        }
    };
};