const passwordBox = document.getElementById("password");
const length = 16;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCse = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "~`!@#$%^&*()_+{}:;'<>?/.,=-";

const allChars = upperCase + lowerCse + number + symbol;

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCse[Math.floor(Math.random() * lowerCse.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

function copyPass(){
    passwordBox.select();
    document.execCommand("copy");
}