function showHaffmanCode(string) {
    class Node {
        constructor(value, variation, left, right) {
            this.value = value;
            this.variation = variation;
            this.left = left;
            this.right = right;
        }
    }
    let letterVariation = string.split('').reduce((acc, l) => acc[l] ? (acc[l]++, acc) : (acc[l] = 1, acc), {}),
        arrayKeyValue = Object.entries(letterVariation)
            .sort((x, y) => x[1] - y[1]),
        arrayNodes = arrayKeyValue.map(el => new Node(el[0], el[1], null, null)),
        lastNode = arrayNodes[arrayNodes.length-1];
    console.log( 'letterVariation: ' + JSON.stringify(letterVariation));
    console.log('arrayKeyValue: ' + JSON.stringify(arrayKeyValue));
    console.log('arrayNodes: ' + JSON.stringify(arrayNodes));
    console.log('lastNode: ' + JSON.stringify(lastNode));
    arrayNodes.pop();
    while(arrayNodes.length > 1) {
        const nextNode = new Node(null, arrayNodes[0].variation + arrayNodes[1].variation, arrayNodes[0], arrayNodes[1])
        arrayNodes.push(nextNode);
        arrayNodes = arrayNodes.slice(2);
    }
    const treeNodes = new Node(null, null, lastNode, arrayNodes[0]);
    console.log('treeNodes: ' + JSON.stringify(treeNodes));
    function getSumVariation(node) {
        return !node.right && !node.left ? node.variation : node.variation + getSumVariation(node.left) + getSumVariation(node.right);
    }
    return getSumVariation(treeNodes);
}
console.log(showHaffmanCode('abacabad'))
