//document.addEventListener("scroll", alert("first test"))
let calculation = 0;
let x = "0";
let display = document.getElementById("display");


let key1 = document.getElementById('key1');
let key2 = document.getElementById('key2');
let key3 = document.getElementById('key3');
let key4 = document.getElementById('key4');
let key5 = document.getElementById('key5');
let key6 = document.getElementById('key6');
let key7 = document.getElementById('key7');
let key8 = document.getElementById('key8');
let key9 = document.getElementById('key9');
let key0 = document.getElementById('key0');
let keyComa = document.getElementById('key-coma');


function keyPressed(p) {
  let keyElement = p;
  keyElement.classList.add("button-active");

  function pressEffect() {
    keyElement.classList.toggle("button-active");
  }
  setTimeout(pressEffect, 100);
}


function licz(k) {
  x += k;
  //console.log(x)
  display.textContent = x;
}

//DZIAŁANIE KLAWISZY Z CYFRAMI
document.addEventListener("keydown", () => {
  //console.log("Key pressed");
  switch (event.code) {
    case "Numpad1":
    case "Digit1":
      licz("1");
      keyPressed(key1);
      break;
    case "Numpad2":
    case "Digit2":
      licz("2");
      keyPressed(key2);
      break;
    case "Numpad3":
    case "Digit3":
      licz("3");
      keyPressed(key3);
      break;
    case "Numpad4":
    case "Digit4":
      licz("4");
      keyPressed(key4);
      break;
    case "Numpad5":
    case "Digit5":
      licz("5");
      keyPressed(key5);
      break;
    case "Numpad6":
    case "Digit6":
      licz("6");
      keyPressed(key6);
      break;
    case "Numpad7":
    case "Digit7":
      licz("7");
      keyPressed(key7);
      break;
    case "Numpad8":
    case "Digit8":
      licz("8");
      keyPressed(key8);
      break;
    case "Numpad9":
    case "Digit9":
      licz("9");
      keyPressed(key9);
      break;
    case "Numpad0":
    case "Digit0":
      licz("0");
      keyPressed(key0);
      break;
    case "NumpadDecimal":
    case "Period":
    case "Comma":
      licz(".");
      keyPressed(keyComa);
      //console.log("coma is working");
      break;
    default:
      console.log("Different key!")
  }
})

//KLIKANIE MYSZĄ NA CYFRY
key1.addEventListener("click", () => {
  keyPressed(key1);
  licz("1")
});
key2.addEventListener("click", () => {
  keyPressed(key2);
  licz("2")
});
key3.addEventListener("click", () => {
  keyPressed(key3);
  licz("3")
});
key4.addEventListener("click", () => {
  keyPressed(key4);
  licz("4")
});
key5.addEventListener("click", () => {
  keyPressed(key5);
  licz("5")
});
key6.addEventListener("click", () => {
  keyPressed(key6);
  licz("6")
});
key7.addEventListener("click", () => {
  keyPressed(key7);
  licz("7")
});
key8.addEventListener("click", () => {
  keyPressed(key8);
  licz("8")
});
key9.addEventListener("click", () => {
  keyPressed(key9);
  licz("9")
});
key0.addEventListener("click", () => {
  keyPressed(key0);
  licz("0")
});
keyComa.addEventListener("click", () => {
  keyPressed(keyComa);
  licz(".")
});
//let key = document.getElementById('key')



// ======== DODAWANIE ============
