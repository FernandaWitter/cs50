const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  let total = itemCountSpan.innerHTML;
  let newTodo = '<div class="'+ classNames.TODO_ITEM +'" id="todo'+total+'"><span><input type="checkbox" id="todoCheck'+total+'" class="' + classNames.TODO_CHECKBOX + '" onclick="onCheck('+total+')"><label for="todoCheck'+total+'" class="'+ classNames.TODO_TEXT +'">New TODO</label></span><span style="margin-left:40px;"><button type="button" onclick="deleteTodo('+total+')">Delete</button></span></div>';
  list.innerHTML = list.innerHTML + newTodo;
  itemCountSpan.innerHTML = parseInt(itemCountSpan.innerHTML) + 1
  uncheckedCountSpan.innerHTML = parseInt(uncheckedCountSpan.innerHTML) + 1
}

function onCheck(count) {
	let checkBox = document.getElementById('todoCheck'+count)
	let unchecked = parseInt(uncheckedCountSpan.innerHTML)
	if(checkBox.checked === true)
		unchecked = unchecked - 1
	else
		unchecked = unchecked + 1
	uncheckedCountSpan.innerHTML = unchecked;
}

function deleteTodo(count){
	let toDelete = document.getElementById('todo'+count)
	let checkBox = document.getElementById('todoCheck'+count)
	if(checkBox.checked === false)
		uncheckedCountSpan.innerHTML = parseInt(uncheckedCountSpan.innerHTML) - 1
	itemCountSpan.innerHTML = parseInt(itemCountSpan.innerHTML) - 1
	toDelete.remove()
}
