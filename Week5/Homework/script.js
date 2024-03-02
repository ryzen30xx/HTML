var value_input = document.getElementById('select_input');
var upper_check = document.getElementById('uppercase');
var number_check = document.getElementById('numbercase');
var extra_check = document.getElementById('extracase');
var result = document.getElementById('result');

var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numberChars = '0123456789';
var extraChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

var password = '';
var characterSet = lowercaseChars;

if (upper_check.checked) {
    characterSet += uppercaseChars;
}

if (number_check.checked) {
    characterSet += numberChars;
}

if (extra_check.checked) {
    characterSet += extraChars;
}

for (var i = 0; i < value_input.value; i++) {
    var randomIndex = Math.floor(Math.random() * characterSet.length);
    password += characterSet[randomIndex];
}

result.innerHTML = "<strong>" + password + "</strong>";
