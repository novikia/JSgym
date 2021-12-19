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
        arrayNodes = Object.entries(letterVariation).map(el => new Node(el[0], el[1], null, null)),
        lastNode = arrayNodes.sort((a, b) => a.variation - b.variation).pop();

    while(arrayNodes.length > 1) {
        const nextNode = new Node(null, arrayNodes[0].variation + arrayNodes[1].variation, arrayNodes[0], arrayNodes[1])
        arrayNodes.push(nextNode);
        arrayNodes = arrayNodes.slice(2);
        arrayNodes.sort((a, b) => a.variation - b.variation);
    }

    const treeNodes = new Node(null, null, lastNode, arrayNodes[0]);

    function getSumVariation(node) {
        return !node.right && !node.left ? node.variation : node.variation + getSumVariation(node.left) + getSumVariation(node.right);
    }

    function printCode(node, code, obj) {
        if(!node.left && !node.right) {
            return code;
        } else if(node.left) {
            printCode(node.left, code + '0')
            obj[node.value] = code;
        } else if(node.right) {
            printCode(node.right, code + '1')
        }
        return obj;
    }

    let obj = {};
    printCode(treeNodes, '', obj);


    return  [letterVariation, treeNodes, obj];

}
console.log(showHaffmanCode('abacabad'))
