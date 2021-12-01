var root = document.getElementById("root");
//adding to index.html->#root
function addMessage(element, message) {
  var messageElement = document.createElement("li");
  messageElement.textContent = message;
  element.appendChild(messageElement);
}
//little assert
function assert(a, b) {
  
  if (a === true) {console.log(b);return b;}
  else {
    console.log('shiit');return "shiiit";
  }
}
//store functions
let store = {
  nextId: 1,
  cache: {},
  add: function (fn) {
    if (!fn.id) {
      fn.id = this.nextId++;
      this.cache[fn.id] = fn;
      return true;
    }
  },
};
addMessage(root,'new eintrag');

//closures

let outerValue ='outer Value';
let later;
function outerfn(){
    let innerValue ='inner Value';

    function innerfn(){
        assert(outerValue === 'outer Value','i can see the outer');
        assert(innerValue === 'inner Value', 'i can see the inner')
    }
    later = innerfn;
};
outerfn();
later();

let x = assert(outerValue === "inner Value", "i can see the inner");
addMessage(root,addMessage(root,'wauwww'));
addMessage(root,assert(true,'noch ein eintrag'));
addMessage(root,later());

let xyz =document.getElementsByTagName('#root > li:nth-child(1)');
let z = root.appendChild(document.createElement('li'));
z.innerText='SDFGHJKLÖ'
console.log(xyz);
addMessage(root, "new eintrag");