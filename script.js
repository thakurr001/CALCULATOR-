
const displayElm = document.querySelector(".display");

const allBtns = document.querySelectorAll(".btn");
let strToDisplay = ""
const opeartors = ["%", "/", "*", "-", "+"];
allBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const value = btn.innerText;
        if (value === "AC") {
            strToDisplay = " "
            display()
           return
        }
        // const lc = strToDisplay[strToDisplay.length - 1];
        // if (opeartors.includes(lc)) {
        //     strToDisplay = strToDisplay.slice(0, -1);
        // }
        if (value === "=") {
            const lc = strToDisplay[strToDisplay.length - 1];
            if (opeartors.includes(lc)) {
                strToDisplay = strToDisplay.slice(0, -1);
            }

            return total()
        }
        if (value === "C") {
            strToDisplay=strToDisplay.slice(0,-1)
            return display(strToDisplay);
        }
        if (opeartors.includes(value)) {
            const lc = strToDisplay[strToDisplay.length - 1];
            if (opeartors.includes(lc)) {
                strToDisplay = strToDisplay.slice[0, -1];
            }
        }


        strToDisplay += value;
        console.log(strToDisplay);
        displayElm.innerText = strToDisplay;
    });
});
const display = (str) => {
    displayElm.innerText = str ||"0.0";
};
const total = () => {
    const ttl = eval(strToDisplay)
    strToDisplay = ttl.toString();
    display(ttl)
}


    