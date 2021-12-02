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
    if(tick<(innerWidth-55)){
      el.style.left  = tick +'px';
      
      tick++;}else{clearInterval(timer);}
      
  },10);}
  animate('box');

  function nino(nino,treff){
    report(nino +' ist unterwegs zur....' + treff);
  }
  function report(message){
    console.log(message);
  }
  nino('alfred','stadthalle');
  nony1.finox();
  const firstConst = "samurai";
  assert(firstConst === "samurai", "firstConst is a samurai");
  try {
    firstConst = "ninja";
    addMessage(root,"Shouldn't be here");
  } catch (e) {
    let x = String(e).split(':');
    addMessage(root,x[0]);
  }
  const firstRonin = "Kiyokawa";
  check(firstRonin);
  function check(ronin) {
    return assert(ronin === "Kiyokawa", "The ronin was checked! ");
  }
  addMessage(root,check(firstRonin));

   function animateIt(elementId) {
     var elem = document.getElementById(elementId);
     var tick = 0;
     var timer = setInterval(function () {
       if (tick < innerWidth - 55) {
         elem.style.left  = tick + "px";
         elem.style.top = Math.sin(tick)+'px';
         elem.style.backgroundColor = `rgba(${tick} ,${tick} ,${tick},0.5)`;
         tick++;
       } else {
         clearInterval(timer);
         assert(tick === 100, "Tick accessed via a closure.");
         assert(elem, "Element also accessed via a closure.");
         assert(timer, "Timer reference also obtained via a closure.");
       }
     }, 50);
   }
   animateIt("box1");
   animateIt("box2");