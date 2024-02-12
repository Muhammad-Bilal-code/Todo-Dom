// alert(5 + 5 + "5" + 5 + 5);

var x = 6;
// alert(x); //6
// alert(++x); //7
// alert(x++); //6
// alert(x); //7
// alert(--x); //6
// alert(x--); //6
// alert(x--); //5

// var y = 6;
// alert(y); //6
// alert((y += 1)); //7
// alert(y); //7
// alert(--y); //6
// alert(y--); //6
// alert(y--); //5

// var a = 5;
// console.log(a++, a);
// var a = 5;
// console.log(++a, a);

// var b = 5;
// console.log((b += 1), b);

// var c = 5;
// console.log((c = c + 1), c);

var x = 5;
// console.log(x-- + x - --x + x++ - ++x);
// 5 + 4 - 3 + 3 - 5
var num = 1.5;
var roundNum = Math.round(num);
// console.log(roundNum);

// console.log(5 + 5 + "5" + 5 + 5);

var months = [
  "jan",
  "feb",
  "march",
  "april",
  "may",
  "june",
  "july",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];
// var d = new Date();
// console.log(d);
// var month = d.getMonth();
// console.log(month);
// console.log(months[month]);

// function abc() {
//   var a = 20;
//   console.log(a);
//   console.log("test");
//   //   abc();
// }

// abc();

// var date = new Date("01,01,2024");
// console.log(date);
// console.log(date.getMonth());

// function abc(a = 100, b = 100) {
//   console.log("a-b = ", a - b);
//   console.log("a+b = ", a + b);
// }
// abc(500, 300);
// abc(400);
// abc("", 400);
// abc();

// var a = 10;
// function abc() {
//   //   var a = 20;
//   a = 40;
//   console.log(a);
// }
// console.log(a);

// abc();
// console.log(a);

function handleGet(elm) {
  console.log("test");
  console.log(elm.value);
}

function handleClick() {
  console.log("test");
  var elm = document.getElementById("inp");
  // console.log(elm);
  console.log(elm.value);
}

function handleShape(val) {
  console.log("test");
  document.getElementById("div").className = val;
  document.getElementById("btn-border").disabled = false;
}

function handleBorder() {
  document.getElementById("div").className += " border";
  document.getElementById("btn-border").disabled = true;
}

var prnt = document.getElementById("prnt");
console.log(prnt);

// var arr = [5, 10];
// console.log(arr.some((elm) => elm == 10));
// if (arr.some((elm) => elm == 10)) {
//   var newArr = arr.filter((elm) => elm !== 10);
// } else {
//   arr = [5, 10, 20];
// }
// console.log(newArr);

// var arr = [];
// function handleClick(e) {
//   console.log(e.value);
//   var checked = arr.some((elm) => elm != e.value);
//   console.log(checked);
//   if (checked) {
//     arr.push(e.value);
//     console.log(arr);
//   } else {
//     arr = arr.filter((elm) => elm !== e.value);
//     console.log(arr);
//   }
// }

var main = document.getElementById("main");
var inpt = document.getElementById("inpt");
function handleCreateElement() {
  console.log(inpt.value);
  var inptVal = inpt.value;
  var div = document.createElement("div");
  div.className = "elm";
  div.setAttribute("id", Math.random().toFixed(4));
  var p = document.createElement("input");
  p.value = inptVal;
  p.className = "bilal test";
  p.setAttribute("id", "hi");
  var btnEdit = document.createElement("button");
  btnEdit.innerText = "Edit";
  btnEdit.setAttribute("onclick", "handleEdit(this)");
  var btnDel = document.createElement("button");
  btnDel.innerText = "Delete";
  btnDel.setAttribute("onclick", "handleDel(this)");
  var btnUpdate = document.createElement("button");
  btnUpdate.innerText = "Update";
  btnUpdate.setAttribute("onclick", "handleUpdate(this)");
  btnUpdate.setAttribute("disabled", "true");
  div.appendChild(p);
  div.appendChild(btnEdit);
  div.appendChild(btnDel);
  div.appendChild(btnUpdate);
  div.appendChild(p);
  console.log(p);
  main.appendChild(div);

  inpt.value = null;
}

function handleDelAll() {
  main.innerHTML = "";
}

function handleDel(a) {
  console.log(a);
  console.log(a.parentNode);
  a.parentNode.remove();
}
function handleEdit(a) {
  a.disabled = true;
  console.log(a);
  console.log(a.parentNode);
  console.log(a.parentNode.childNodes[2]);
  a.parentNode.childNodes[2].disabled = false;
  a.parentNode.lastChild.value = "";
  a.parentNode.lastChild.style.border = "1px solid white";
  a.parentNode.lastChild.style.backgroundColor = "white";
}
function handleUpdate(a) {
  // console.log("Update");
  // console.log(a.parentNode.childNodes[0]);
  a.parentNode.childNodes[0].disabled = false;
  a.parentNode.childNodes[2].disabled = true;
  a.parentNode.lastChild.style.border = "0px solid white";
  a.parentNode.lastChild.style.backgroundColor = "transparent";
  // console.log(a.parentNode.lastChild.value);
  a.parentNode.lastChild.value = a.parentNode.lastChild.value;
}
