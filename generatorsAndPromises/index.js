function* Generator(){
    yield 'gurken';
    yield 'tomaten';
    yield 'blumenkohl';
    yield 'kartoffeln';
    
}
function* Lexer(){
    yield 'LUPINIEN';
    yield 'ROSEN';
    yield 'TULPEN'
}

for(let gemuese of Generator()){
    addMessage(root,gemuese);
}
function addMessage(element, message) {
  var messageElement = document.createElement("li");
  messageElement.textContent = message;
  element.appendChild(messageElement);
}
const weaponsIterator = Generator();
console.log(weaponsIterator.next());

function addMessIterator(element, message) {
    for(let i of message){
  var messageElement = document.createElement("li");
  messageElement.textContent = i;
  element.appendChild(messageElement);}
}
addMessIterator(root,Lexer());

function addStyle(){
    let style = document.createElement('style');
    let head = document.head || document.getElementsByTagName('head')[2];
    let css =  `ul {background-color:red}`
    head.appendChild(style);
    style.nodeType ='text/css';
    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }

}
addStyle();