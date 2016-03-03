var count = 0;
var list = [];

function addToList() {
	var addText = document.getElementById('addText').value;
	if(addText != ''){
		var li = document.createElement('li');
		var added = document.createTextNode(addText);
		li.appendChild(added);
		count += 1;
		li.id = 'list' + count;
		list.push(addText);
		li.onclick = function() {
			this.parentNode.removeChild(this);
			var index = list.indexOf(this.innerText);
			list.splice(index,1);
		};
		document.getElementById('list').appendChild(li);
	}
}

function clearList() {
	document.getElementById('list').innerHTML = '';
	list = [];
}

function submitForm() {
alert(JSON.stringify(list));
}

function printList() {
	console.log(list.toString());
}

