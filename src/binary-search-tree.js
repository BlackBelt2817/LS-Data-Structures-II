// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
class BinarySearchTree {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;  

    function insert(val) {
      if ( (val < this.value) && (this.left) ) {
        this.left.insert(val);
      }
      if ( (val < this.value) && (!this.left) ) {
        this.left = new BinarySearchTree(val);
      }
      if ( (val > this.value) && (this.right) ) {
        this.right.insert(val);
      }
      if ( (val > this.value) && (!this.left) ) {
        this.right = new BinarySearchTree(val);
      }
    }

    function contains(searched) {
      if (this.value === searched) {
        return true;
      }
      return !!(this.left && this.left.contains(searched)) || !!(this.right && this.right.contains(searched));
    }

    function depthFirstForEach() {

    }

    function breadFirstForEach() {

    }
  }
}

module.exports = BinarySearchTree;

/*

* Should have the methods: `insert`, `contains`, `depthFirstForEach`, and `breadthFirstForEach`.
  * `insert(value)` inserts the new value at the correct location in the tree.
  * `contains(value)` searches the tree and returns `true` if the the tree contains the specified value.
  * `depthFirstForEach(cb)` should iterate over the tree using DFS and passes each node of the tree to the given callback function.
  * `breadthFirstForEach(cb)` should iterate over the tree using BFS and passes each node of the tree to the given callback function (hint: you'll need to either re-implement or import a queue data structure for this).

*/