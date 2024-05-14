
// alert("Asalam-O-Alaikum!" +
// " Sir abhi pending hai");

var passBox = document.getElementById("passBox");
var inputSlider = document.getElementById("inputSlider");
var sliderValue = document.getElementById("sliderValue");
var genBtn = document.getElementById("genBtn");
var upperCase = document.getElementById("uppercase");
var lowerCase = document.getElementById("lowercase");
var numbers = document.getElementById("numbers");
var symbols = document.getElementById("symbols");

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', ()=>{
    sliderValue.textContent = inputSlider.value;
});

genBtn.addEventListener('click', ()=>{
    passBox.value = generatePassword();
})

var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var allNumbers = "1234567890";
var allSymbols = "~!@#$%^&*";


function generatePassword(){
    var genPassword = "";
    var allChars = "";

    allChars += upperCase.checked ? upperChars : "";
    allChars += lowerCase.checked ? lowerChars : "";
    allChars += numbers.checked ? allNumbers : "";
    allChars += symbols.checked ? allSymbols : "";

    if(allChars == "" || allChars.length == 0){
        return genPassword;
    }

    var i = 0; while(i <=inputSlider.value) { 
    genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
    i++; 
    }
    return genPassword;
}

