const submit = document.querySelector('#submit');
const fullNameError = document.querySelector('.fullNameError');
const subjectError = document.querySelector('.subjectError');
const emailError = document.querySelector('.emailError');
const messageError = document.querySelector('.messageError');

submit.onclick = function (event) {
	event.preventDefault();
	const fullName = document.querySelector('#fullname').value.trim();
	const subject = document.querySelector('#subject').value.trim();
	const email = document.querySelector('#email').value.trim();
	const message = document.querySelector('#message').value.trim();

	if (fullName.length >= 3) {
		fullNameError.classList.add('hide');
		fullNameError.classList.remove('show');
	} else {
		fullNameError.classList.add('show');
		fullNameError.classList.remove('hide');
	}

	if (subject.length >= 3) {
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

    if (message.length >= 3) {
		messageError.classList.add('hide');
		messageError.classList.remove('show');
	} else {
		messageError.classList.add('show');
		messageError.classList.remove('hide');
	}
};

function validateEmail(emailAddy) {
	const emailExpression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	const isEmailValid = emailExpression.test(emailAddy);
	return isEmailValid;
}