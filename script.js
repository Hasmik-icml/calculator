let display = document.getElementById('display');

let buttons = document.querySelectorAll('button');
let displayValue = '';

for(let item of buttons){
  item.addEventListener('click', (e)=>{
    let buttonText = e.target.innerText;
    // console.log(buttonText);

    if (buttonText === "x"){
      buttonText = "*";
      displayValue += buttonText;
      display.value = displayValue;
    }
     else if(buttonText === "AC" ){
       displayValue = "";
       display.value = displayValue;
     }
     else if (buttonText === "="){
       display.value = eval(displayValue);
       displayValue = "";
     } 
     else if(buttonText === "◄"){
      displayValue = displayValue.substring(0, displayValue.length-1);
      display.value = displayValue;   
     }
     else {
        displayValue += buttonText;
        display.value = displayValue;
     }


  });
}

