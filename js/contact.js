const form = document.querySelector("#inquiryForm");
const errorsList = document.querySelector("#errors");

form.addEventListener("submit", validateForm);

function validateForm(event) {
	event.preventDefault();

	errorsList.innerHTML = "";

	let firstName = document.querySelector("#first-name").value;
	if (firstName.length < 2) {
		addError("First name must be at least 2 characters");
	}

	let lastName = document.querySelector("#last-name").value;
	if (lastName.length < 2) {
		addError("Last name must be atleast 2 characters");
	}	
}

function addError(error) {
	let li = document.createElement("li");
	li.innerText = error;
	errorsList.appendChild(li);
}