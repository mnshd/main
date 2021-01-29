document.querySelector('.btn1').onclick = check;

function check() {
	let a = document.querySelector('.inp1').value;
	let out = document.querySelector('#result');
	if (a == 21) {
		alert('Молодец, ты угадал!')
	}
	else {
		alert('Увы, ты не угадал число!')
	}
}