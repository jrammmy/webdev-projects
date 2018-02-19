var addBtn = document.querySelector('#add');
var input = document.querySelectorAll('input')[0];
var deleteIcon = document.querySelectorAll('.trash');
var editText = document.querySelectorAll('.editText');

addBtn.addEventListener('click', function() {
  input.classList.toggle('hide');
});

for (var i = 0; i < deleteIcon.length; i++) {
  deleteIcon[i].addEventListener('click', function() {
    this.parentElement.remove();
  });
}

for (var i = 0; i < editText.length; i++) {
  editText[i].addEventListener('dblclick', edit);
}

input.addEventListener('keypress', function(e) {
  var enter = 13;
  if (e.which === enter) {

    var li = document.createElement('li');
    var iTrash = document.createElement('i');
    var trashSpan = document.createElement('span');
    var editSpan = document.createElement('span');
    var input = document.createElement('input');
    var taskLabel = document.createElement('label');
    var dateLabel = document.createElement('small');

    var liText = document.createTextNode(this.value); // refers to the input for a new todo
    var date = document.createTextNode('Posted: ' + getDate());
    var space = document.createTextNode(" ");

    trashSpan.className = 'trash';
    editSpan.className = 'editText';
    iTrash.className = 'fas fa-trash-alt';
    taskLabel.className = 'task';
    input.setAttribute('type', 'text');
    dateLabel.setAttribute('style', 'float: right;');

    trashSpan.addEventListener('click', function() {
      this.parentElement.remove();
    });

    trashSpan.appendChild(iTrash);
    li.addEventListener('mouseenter', function() {
      editSpan.appendChild(trashSpan);
    });

    li.addEventListener('mouseleave', function() {
      editSpan.removeChild(trashSpan);
    });

    editSpan.addEventListener('dblclick', edit);

    li.appendChild(editSpan);
    taskLabel.appendChild(liText);
    dateLabel.appendChild(date);
    editSpan.appendChild(taskLabel);
    editSpan.appendChild(dateLabel);
    editSpan.appendChild(input);
    document.querySelector('.todoList').appendChild(li);
    this.value = '';
  }
});

function edit() {
  var editInput = this.parentElement.querySelector('input[type=text]');
  var label = this.parentElement.querySelector('label');
  var containsClass = this.parentElement.classList.contains('editMode');
  var deleteIcon = document.querySelectorAll('.trash');
  var date = document.querySelector('small');

  for (var i = 0; i < deleteIcon.length; i++) {
    deleteIcon[i].classList.toggle('hide');
  }

  if (containsClass) {
    label.innerText = editInput.value;
  } else {
    editInput.value = label.innerText;
  }

  date.innerText = 'Updated: ' + getDate();
  this.parentElement.classList.toggle('editMode');
}

function getDate() {
  var now = new Date();
  var month = now.getMonth() + 1;
  var day = now.getDate();
  var year = now.getFullYear();

  var date = + month + "-" + day + "-" + year;

  return date;
}
