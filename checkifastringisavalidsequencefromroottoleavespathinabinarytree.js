//Objective is to see if a string follows a path from the root to leaf of a biary tree

class Node {
    constructor(val, left = null, right = null) {
      this.val = val
      this.left = left
      this.right = right
    }
}
  
class Tree {
    constructor(root) {
      this.root = null
    }
  
    createRoot(val) {
      this.root = new Node(null, null, val)
    }
  
    addLeftNode(node, val) {
      node.left = new Node(null, null, val)
    }
  
    addRightNode(node, val) {
      node.right = new Node(null, null, val)
    }
}

let tree = new Tree()
tree.createRoot(0)
tree.addLeftNode(tree.root, 1)
tree.addRightNode(tree.root, 0)
tree.addLeftNode(tree.root.right, 0)
tree.addLeftNode(tree.root.left, 0)
tree.addRightNode(tree.root.left, 1)
tree.addRightNode(tree.root.left.left, 1)
tree.addRightNode(tree.root.left.right, 0)
tree.addLeftNode(tree.root.left.right, 0)

let arr = [0,1,0,1]


//O(n) solution that uses DFS to traverse the tree to find the string

function dfs(node, index) {
    //If it's null
    if (!node) {
        return false
    }
    
    //If the value doesn't match or if the index grows too large
    if (node.val != arr[index] || index >= arr.length) {
        return false
    }
    
    //Check if the two lengths are the same
    if (!node.left && !node.right) {
        return index == arr.length - 1
    }
    
    //Similar to 'Path Sum'
    return dfs(node.left, index + 1) || dfs(node.right, index + 1)
}
return dfs(tree.root, 0)