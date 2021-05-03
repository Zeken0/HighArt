const submit = document.querySelector('#submit');
const fullNameError = document.querySelector('.fullNameError');
const subjectError = document.querySelector('.subjectError');
const emailError = document.querySelector('.emailError');
const addressError = document.querySelector('.addressError');

submit.onclick = function (event) {
	event.preventDefault();
	const fullName = document.querySelector('#fullname').value.trim();
	const subject = document.querySelector('#subject').value.trim();
	const email = document.querySelector('#email').value.trim();
	const address = document.querySelector('#address').value.trim();

	if (fullName.length >= 5) {
		fullNameError.classList.add('hide');
		fullNameError.classList.remove('show');
	} else {
		fullNameError.classList.add('show');
		fullNameError.classList.remove('hide');
	}

	if (subject.length >= 25) {
		subjectError.classList.add('hide');
		subjectError.classList.remove('show');
	} else {
		subjectError.classList.add('show');
		subjectError.classList.remove('hide');
	}

	if (validateEmail(email)) {
		emailError.classList.add('hide');
		emailError.classList.remove('show');
	} else {
		emailError.classList.add('show');
		emailError.classList.remove('hide');
	}

    if (address.length >= 15) {
		addressError.classList.add('hide');
		addressError.classList.remove('show');
	} else {
		addressError.classList.add('show');
		addressError.classList.remove('hide');
	}
};

function validateEmail(emailAddy) {
	const emailExpression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	const isEmailValid = emailExpression.test(emailAddy);
	return isEmailValid;
}