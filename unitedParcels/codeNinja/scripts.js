var root = document.getElementById("root");

function addMessage(element, message) {
  var messageElement = document.createElement("li");
  messageElement.textContent = message;
  element.appendChild(messageElement);
}

let ninja = {
  a: 10,
};
let arrayA = [];

console.log(ninja);
ninja.data = function () {
  return 10;
};
console.log(ninja.data());
arrayA.push(ninja);
console.log("arrayA", arrayA);

function visible(para) {
  ninja.visibility = para !== null || para !== undefined ? true : false;
}
visible(1);
console.log(ninja);
ninja.name = "abcde";
console.log(ninja);

let x = () => (ninja.attribute = 1234);
x();

console.log(ninja);

function call(func) {
  func();
}
call(() => (ninja.pull = 9999));

let ninjaFunction = function (ninjaName) {};
ninjaFunction.ninjaName = "ninjaName";
console.log(ninjaFunction.ninjaName);

//callback
console.log("callback's #################################");
let text = "hallo und guten tag";
let report = (a) => console.log(a);
report("vor definieren der function");

function useless(callback) {
  report("innerhalb der useless function");
  return callback();
}
function getText() {
  report("innerhalb der gettext function");
  return text;
}
report("before making the calls");
function assert(a, b) {
  console.log(a, b);
  if (a === true) return console.log(b);
  else {
    return console.log("shiiit");
  }
}
assert(useless(getText) === text, "the useless works " + text);
//add event listener to document.body

document.body.addEventListener("click", function () {
  let second = document.getElementById("root");
  addMessage(second, "Event CLICK");
});
var first = document.getElementById("root");
addMessage(first, "Page loading");

//sort
let values = [2, 4, 8, 17, 38, 121, 366, 966, 2700, 7700, 23023];
console.log(values.sort((a, b) => a * Math.sin(b)));
//store functions to cache
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
let testcache1 = () => console.log("this is testcache1");
let testcache2 = () => console.log("this is testcache2");
store.add(testcache1);
store.add(testcache2);
console.log(store);
store.cache[1]();
store.cache[2]();

//declarate functions
function myfunci() {
  return true;
}
const myfunctifunc = function () {
  return true;
};
(meyFunc) => meyFunc * 2;
//is like
let my = (a) => a * 2;

let funfunc = new Function("a=232", "b=333", "return a+b");
console.log(funfunc(2, 3));

//enclosed
function outer(fn) {
  function inner() {
    return fn();
  }
  return inner();
}
console.log(outer(funfunc));

+(function (a) {
  return a;
})(3);
-(function () {})();
!(function () {})();
~(function () {})();

//pfeilfunctions
let mi = (name) => name + "so ist der name";
function nonStrict() {
  return this;
}
function inStrict() {
  "use strict";
  return this;
}
console.log("nonstrict this", nonStrict());
console.log("instrict this", inStrict());

function whatsMyContext() {
  return this;
}

store.add(whatsMyContext);
let b = store.cache[3];

console.log(b().innerHeight + "px");

var ninja2 = {
  getMyThis: whatsMyContext,
};

assert(ninja2.getMyThis() === ninja2, "Working with 2nd ninja");

let nin2 = {};
nin2['halllachio']=1111111111111111111111;
nin2.a = 1;
nin2.b = 2;
nin2.c = 3;
nin2.d = function s() {
  let x = 0;
  for (i in nin2) {
    nin2[i] = 'zuckermuggelmizenscheiß';

    console.log(nin2[i], x);
    console.log("oobj:", this);
  }
};
nin2.d();
function white() {}
let xs = new white();
console.log("xs", xs);

let flex = Object.create(null);
flex['aa aa']=222;
console.log(flex);

function NinjaXXL() {
  this.skulk = function () {
    console.log('console',this);
    return this;
  };
}
var n1 = new NinjaXXL();
var n2 = new NinjaXXL();
n1.skulk();
assert(n1.skulk() === n1, "The 1st ninja is skulking");
assert(n2.skulk() === n2, "The 2nd ninja is skulking");

let puppet = {
    rules:false,
};
function Emperor(){
    this.rules = true;
    return puppet;
};
let haha = new Emperor();
console.dir(haha.rules=9089090);
console.log('log',haha);

var emperor = new Emperor();
assert(emperor === puppet, "The emperor is merely a puppet!");
assert(emperor.rules === false, "The puppet does not know how to rule!");
function Ninja() {
  this.skulk = function () {
    return this;
  };
}
var whatever = new NinjaXXL();
var whatever2 = new NinjaXXL();
whatever['aa']=8887;
whatever2['bbb']=8787;
console.log(whatever,whatever2);