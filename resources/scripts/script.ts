const hamburger = document.getElementById("hamburger");
const colorTitle = document.getElementById("title");

//NOTE HAMBURGER ICON FROM FONTAWESOME
hamburger.innerHTML = "&#xf0c9";
let toggle = true;
let checkedColor: string;

const list = document.querySelector('#list');

interface Colors {
    colorName: string;
    colorCode: string;
}

hamburger.addEventListener("click", () => {
    toggle = !toggle;
    if(!toggle){
        addColors({colorName: "red", colorCode: "#FF0000"});
        addColors({colorName: "blue", colorCode: "#0000FF",});
        addColors({colorName: "orange",colorCode: "#FFA500",});
    } else {
        removeColors()
    }
})

const addColors = (colors:Colors) => {
    // NOTE CREATE A LIST
    let li = document.createElement("li");
    const colorName = colors.colorName;
    li.style.backgroundColor = colors.colorCode;
    li.setAttribute("id", colorName);
    list.appendChild(li);
    // NOTE CREATE THE RADIO BUTTON
    let input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("name", "color");
    input.setAttribute("value", colorName);
    input.setAttribute("id", colorName + "input");
    li.appendChild(input);
    input.checked = checkedColor === colorName;

    // NOTE CREATE THE LABEL
    let label = document.createElement("label");
    label.setAttribute("for", colorName);
    label.innerHTML = colorName;
    li.appendChild(label);
  
    let listItem = document.getElementById(colorName);
    listItem.addEventListener("click", () => backgroundColor(colorName, colors.colorCode))
}

const removeColors = () => {
    while(list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

const selecRadioButton = (colorName: string) => {
    let radioItem = document.getElementById(colorName + "input")! as HTMLInputElement;
    radioItem.checked = true;
    checkedColor = radioItem.value;
    removeColors();
}

const backgroundColor = (colorName:string, colorCode:string) => {
    document.body.style.transition = "all 2s";
    document.body.style.background = colorCode;
    colorTitle.innerHTML = colorName;
    toggle = !toggle;
    selecRadioButton(colorName);
}




