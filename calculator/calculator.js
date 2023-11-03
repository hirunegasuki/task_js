const button = document.querySelectorAll('button');
const result = document.getElementById('result');

var last = result.textContent.slice(-1);　//末尾の文字列を取得
var first = result.textContent.slice(0, 1);　//先頭の文字列を取得

let calcText = "";

function buttonClick(event) {
  const text = event.target.textContent;

  if(text === "=") {
    calcText = eval(calcText);
  } 
  else if(text === "AC") {
    calcText = "";
  }
  //else if(text === "+" || text === "-" || text === "*" || text === "/") {
  else if(text === symbol){
    calcText += symbol;
    //return;
  }
  else {
    calcText = calcText += text;
  }
  result.textContent = calcText;
}

function symbol(event) {
  if (last === "+"||"-"||"*"||"/"){
    let str = result.textContent.slice(0, -1);
    result.textContent = str + event.textContent;
  }
  else{
    result.textContent += event.textContent;
    ////let str = result.textContent.slice(0, -1);
    ////result.textContent += event.target.textContent;
    //console.log(event.textContent);
   }
}
//*/


button.forEach(button => button.addEventListener('click', buttonClick));
