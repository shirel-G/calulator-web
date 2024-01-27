const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } 
    else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText).toFixed(14);
    }
    else if (item.id == "sin") {
      display.innerText = Math.sin(display.innerText).toFixed(14);
    }
    else if (item.id == "cos") {
      display.innerText = Math.cos(display.innerText).toFixed(14);
    }
    else if (item.id == "tan") {
      display.innerText = Math.tan(display.innerText).toFixed(14);
    }
    else if (item.id == "pi") {
      display.innerText = Math.PI.toFixed(14);
      }
    else if (item.id == "log") {
      display.innerText = (Math.log10(display.innerText)).toFixed(14);
    }
    else if (item.id == "√") {
      display.innerText = (Math.sqrt(display.innerText)).toFixed(14);
    }
    else if (item.id == "squared") {
      display.innerText = (display.innerText * display.innerText);
    }
    else if (item.id == "exp") {
        display.innerText = (Math.exp(display.innerText)).toFixed(7);
    }
    else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    }
    else if (item.id == "n!") {
        display.innerText = calculateFactorial(parseFloat(display.innerText));
    }
    else if (item.id == "+/-") {
        display.innerText = (parseFloat(display.innerText) * -1).toFixed(14);
    }
    else if (item.id == "e") {
        display.innerText = Math.E.toFixed(14);   
    }     
    else if (item.id == "|x|") {
        var currentValue = parseFloat(document.getElementById('display').value);
        document.getElementById('display').value = Math.abs(currentValue);
         
    } else {
      display.innerText += item.id;
    }
  };
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};
function calculateFactorial(n) {
    if (n < 0 || !Number.isInteger(n)) {
      return "Invalid input";
    } else if (n === 0 || n === 1) {
      return 1;
    } else {
      let result = 1;
      for (let i = 2; i <= n; i++) {
        result *= i;
      }
      return result.toFixed(0);
    }
  }