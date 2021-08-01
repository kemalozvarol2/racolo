const hexValues = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const color = document.getElementsByClassName('color')[0];
const copyText = document.getElementById("hexcode");

function changeColor(){
          let hexColor = '#'
          for (let i = 0; i < 6; i++){
               hexColor += hexValues[randomNumber()]
          }
          var r = document.querySelector(':root');
          r.style.setProperty('--accent-color', hexColor);
          color.textContent = hexColor;
          copyText.value = hexColor;
}

function randomNumber(){
     return Math.floor(Math.random() * hexValues.length)
}

function copyColor(){
     copyText.select();
     document.execCommand("copy");
     alert("Color Copied: " + copyText.value);
}
