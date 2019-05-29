//add event handler
function submitComment() {
	//gather data
	const inputField = document.getElementById('name');
	const name = inputField.nodeValue;
	const textArea = document.getElementById('msg');
	const msg = textArea.nodeValue;
	//create the elements that I need
	const comment = document.createElement('section');
	const h3 = document.createElement('h3');
	const p = document.createElement('p');
	//adjust the elements I created
	h3.innerHTML = `${name} said:`;
	p.innerHTML = msg;
	comment.classList.add('comment');
	comment.appendChild(h3);
	comment.appendChild(p);

	console.log(comment);
}
