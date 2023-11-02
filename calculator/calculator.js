const button = document.querySelectorAll('button');
const result = document.getElementById('result');

let calcText = "";

function buttonClick(event) {
  const text = event.target.textContent;

  if(text === "=") {
    calcText = eval(calcText);
  } 
  else if(text === "AC") {
    calcText = "";
  }
  else {
    calcText = calcText += text;
  }
  result.textContent = calcText;
}

function symbol(target) {
  var last = result.textContent.slice(-1);　//末尾の文字列を取得
  var first = result.textContent.slice(0, 1);　//先頭の文字列を取得
  
  if (last === "+" || last === "-" || last === "*" || last === "/"){
    let str = result.textContent.slice(0, -1);
    result.textContent += target.value;
    console.log(str)
   }
}
//*/


button.forEach(button => button.addEventListener('click', buttonClick));
