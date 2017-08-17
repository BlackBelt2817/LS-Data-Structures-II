class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

module.exports = Tree;

function addChild(value) {
  this.children.push(new Tree(value));
}

function contains(newVal) {
  let contained = false;
  function inner(obj) {
    if(obj.value === newVal) {
      result = true;
    }
    obj.children.forEach(function(child) {
      inner(child);
    })
  }
  inner(this);
  return contained;
}