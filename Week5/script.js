var checkbox1 = document.getElementById('checkbox1');
var checkbox2 = document.getElementById('checkbox2');
var checkbox3 = document.getElementById('checkbox3');
var result = document.getElementById('result');

// console.log(!checkbox1.checked);

if (!checkbox1.checked && !checkbox2.checked && !checkbox3.checked){
	result.innerHTML = '<p>You must be choosen at least one option</p>';
} else if (checkbox1.checked && !checkbox2.checked && !checkbox3.checked) {
	result.innerHTML = '<p>You have choosen Health</p>';
} else if (checkbox2.checked && !checkbox1.checked && !checkbox3.checked) {
	result.innerHTML = '<p>You have choosen Wealth</p>';
} else if (checkbox3.checked && !checkbox1.checked && !checkbox2.checked) {
	result.innerHTML = '<p>You have choosen Happiness</p>';
} else if (checkbox1.checked && checkbox2.checked && !checkbox3.checked) {
	result.innerHTML = '<p>You have choosen Health, Wealth</p>';
} else if (checkbox1.checked && !checkbox2.checked && !checkbox3.checked) {
	result.innerHTML = '<p>You have choosen Health</p>';
} else if (checkbox1.checked && !checkbox2.checked && checkbox3.checked) {
	result.innerHTML = '<p>You have choosen Health, Happiness</p>';
}else if (!checkbox1.checked && checkbox2.checked && checkbox3.checked) {
	result.innerHTML = '<p>You have choosen Wealth, Happiness</p>';
} else {
	result.innerHTML = '<p>You have choosen Health, Wealth, Happiness</p>';
}