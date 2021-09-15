var hamburger = document.getElementById("hamburger");
var colorTitle = document.getElementById("title");
//NOTE HAMBURGER ICON FROM FONTAWESOME
hamburger.innerHTML = "&#xf0c9";
var toggle = true;
var checkedColor;
var list = document.querySelector('#list');
hamburger.addEventListener("click", function () {
    toggle = !toggle;
    if (!toggle) {
        addColors({ colorName: "red", colorCode: "#FF0000" });
        addColors({ colorName: "blue", colorCode: "#0000FF" });
        addColors({ colorName: "orange", colorCode: "#FFA500" });
    }
    else {
        removeColors();
    }
});
var addColors = function (colors) {
    // NOTE CREATE A LIST
    var li = document.createElement("li");
    var colorName = colors.colorName;
    li.style.backgroundColor = colors.colorCode;
    li.setAttribute("id", colorName);
    list.appendChild(li);
    // NOTE CREATE THE RADIO BUTTON
    var input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("name", "color");
    input.setAttribute("value", colorName);
    input.setAttribute("id", colorName + "input");
    li.appendChild(input);
    input.checked = checkedColor === colorName;
    // NOTE CREATE THE LABEL
    var label = document.createElement("label");
    label.setAttribute("for", colorName);
    label.innerHTML = colorName;
    li.appendChild(label);
    var listItem = document.getElementById(colorName);
    listItem.addEventListener("click", function () { return backgroundColor(colorName, colors.colorCode); });
};
var removeColors = function () {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
};
var selecRadioButton = function (colorName) {
    var radioItem = document.getElementById(colorName + "input");
    radioItem.checked = true;
    checkedColor = radioItem.value;
    removeColors();
};
var backgroundColor = function (colorName, colorCode) {
    document.body.style.transition = "all 2s";
    document.body.style.background = colorCode;
    colorTitle.innerHTML = colorName;
    toggle = !toggle;
    selecRadioButton(colorName);
};
