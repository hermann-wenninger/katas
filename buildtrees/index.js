console.clear();

let input = document.querySelector("#input");
let output = ("#output");

// create a tree
const generateDataTree = (text) => {
  const array = text.split("\n");

  const objectArr = array.map((item, i) => {
    const level = item.match(/#/g)?.length;
    const text = item.replace(/#/g, "");
    return { text, level, id: i, children: [] };
  });

  let tree = [];
  for (let i = 0; i < objectArr.length; i++) {
    if (objectArr[i].level === 1) tree.push(objectArr[i]);

    for (let j = i - 1; j >= 0; j--) {
      if (objectArr[j].level < objectArr[i].level) {
        objectArr[j].children.push(objectArr[i]);
        break;
      }
    }
  }

  return tree;
};

// create the output text string
const render = (dataTree) => {
  const indent = "   ";
  const elbow = "└──";
  const tee = "├──";
  const bar = "|";
  let outputArray = []; // build the array of lines

  // indent for next node
  var siblingsAtThisLevel = true;
  // this is a list of the unclosed folders in the rows above
  // will stay unopened until a "last child" node closes it at that level
  let openedFolderRef = {}; //{1:"|", 2:" "}

  const traverse = (node) => {
    // add the first node
    if (node.level === 1) outputArray.push(node.text.trim());

    // if this node has children,
    if (node.children.length) {
      // process and then recursively call that nodes children
      node.children.forEach((child, i) => {
        const isLastChild = node.children.length - 1 === i; // is it the last node at this level
        const prefix = isLastChild ? elbow : tee;
        let filler = ""; // content before the prefix and the text itself

        // start at 2 bc thats the first level where there is a prefix
        for (var j = 2; j < child.level; j++) {
          filler += openedFolderRef[j] + indent;
          console.log("filler: " + filler);
        }

        outputArray.push(filler + prefix + child.text);

        // set this after push the current string, for use by the next row
        openedFolderRef[child.level] = isLastChild ? " " : "|";

        // recurvisely move from root to end nodes
        traverse(child);
      });
    }
  };
  traverse(dataTree[0]);
  return outputArray.join("\n");
};

const generate = () => {
  let nodeList = generateDataTree(input.value);
  let renderedString = render(nodeList);
  output.text(renderedString);
};

$input.addEventListener("keyup", (event) => {
  event.preventDefault();
  generate();
});

let input = `# home
## components
### header
### footer
## styles
### header
### footer
## utils
### timeHelpers
####helpers
#####lastitems`
input.trim();
console.log(input);


generate();



console.clear();

let input = document.querySelector("#input");
let output = ("#output");

// create a tree
    const generateDataTree = (text) => {
    const array = text.split("\n");

    const objectArr = array.map((item, i) => {
    const level = item.match(/#/g)?.length;
    const text = item.replace(/#/g, "");
    return { text, level, id: i, children: [] };
  });

  let tree = [];
  for (let i = 0; i < objectArr.length; i++) {
    if (objectArr[i].level === 1) tree.push(objectArr[i]);

    for (let j = i - 1; j >= 0; j--) {
      if (objectArr[j].level < objectArr[i].level) {
        objectArr[j].children.push(objectArr[i]);
        break;
      }
    }
  }

  return tree;
};

// create the output text string
const render = (dataTree) => {
  const indent = "   ";
  const elbow = "└──";
  const tee = "├──";
  const bar = "|";
  let outputArray = []; // build the array of lines

  // indent for next node
  var siblingsAtThisLevel = true;
  // this is a list of the unclosed folders in the rows above
  // will stay unopened until a "last child" node closes it at that level
  let openedFolderRef = {}; //{1:"|", 2:" "}

  const traverse = (node) => {
    // add the first node
    if (node.level === 1) outputArray.push(node.text.trim());

    // if this node has children,
    if (node.children.length) {
      // process and then recursively call that nodes children
      node.children.forEach((child, i) => {
        const isLastChild = node.children.length - 1 === i; // is it the last node at this level
        const prefix = isLastChild ? elbow : tee;
        let filler = ""; // content before the prefix and the text itself

        // start at 2 bc thats the first level where there is a prefix
        for (var j = 2; j < child.level; j++) {
          filler += openedFolderRef[j] + indent;
          console.log("filler: " + filler);
        }

        outputArray.push(filler + prefix + child.text);

        // set this after push the current string, for use by the next row
        openedFolderRef[child.level] = isLastChild ? " " : "|";

        // recurvisely move from root to end nodes
        traverse(child);
      });
    }
  };
  traverse(dataTree[0]);
  return outputArray.join("\n");
};

const generate = () => {
  let nodeList = generateDataTree(input.value);
  let renderedString = render(nodeList);
  output.text(renderedString);
};

$input.addEventListener("keyup", (event) => {
  event.preventDefault();
  generate();
});

let input = `# home
## components
### header
### footer
## styles
### header
### footer
## utils
### timeHelpers
####helpers
#####lastitems`
input.trim();
console.log(input);


generate();

