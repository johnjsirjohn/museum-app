//validation
function doesNotPassAllValidations(name, msg) {
	if (!name && !msg) {
		alert('You forgot to fill in your name and message!');
		return true;
	} else if (!name && msg) {
		//if there is no name filled in
		alert('You forgot to fill in your name!');
		return true;
	} else if (name && !msg) {
		//if there is no message filled in
		alert('You forgot to fill in your mesage!');
		return true;
	} else if (msg.length > 280) {
		alert('Your comment is too long');
		return true;
	} else if (
		msg.includes('crap') ||
		msg.includes('idiot') ||
		msg.includes('stupid') ||
		msg.includes('asshole') ||
		msg.includes('cretin')
	) {
		alert('Warning: this comment has been flagged as offensive');
		return true;
	} else {
		return false;
	}
}
//add event handler
function submitComment() {
	//gather data
	const inputField = document.getElementById('name');
	const name = inputField.value;
	const textArea = document.getElementById('msg');
	const msg = textArea.value;

	//check if user input passes validations
	if (doesNotPassAllValidations(name, msg)) {
		return null;
	}
	//create the elements that I need
	const comment = document.createElement('section');
	const h3 = document.createElement('h3');
	const p = document.createElement('p');
	//adjust the elements I created
	//Capitalize the first letter of the name and message
	h3.innerHTML = `${name[0].toUpperCase()}${name.slice(1)} said:`;
	p.innerHTML = `${msg[0].toUpperCase()}${msg.slice(1)}`;
	comment.classList.add('comment');
	comment.appendChild(h3);
	comment.appendChild(p);

	//display the elements on the page
	const commentSection = document.getElementById('comments');
	commentSection.appendChild(comment);

	//reset form values
	inputField.value = null;
	textArea.value = null;

	console.log(name);
	console.log(msg);
}
