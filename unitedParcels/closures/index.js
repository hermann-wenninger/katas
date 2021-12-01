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


let xyz =document.getElementsByTagName('#root > li:nth-child(1)');
let z = root.appendChild(document.createElement('li'));
z.innerText='tonale Def-list\'s'
console.log(xyz);


function Nony(){
  let fino = 'auserlitz';
  let num = 0;
  this.getFino = function(){
    return this.finox();
  };
  this.finox = function(){
    num++;
    return fino + "-" + num;
  };
}
let nony1 = new Nony();

console.log('##############')
assert(nony1.fino === undefined, 'the private data is not accessiible')
for(let i =0; i<=2; i++){
  addMessage(root, nony1.finox());
}
console.log(nony1.getFino());
console.log(nony1);

function animate(elementId){
  let el = document.getElementById(elementId);
  let tick = 0;
  let timer = setInterval(function(){
    if(tick<100){
      el.style.left = el.style.top = tick +'px';
      tick++;}else{clearInterval(timer);}
      
  },2000);}
  animate('box');