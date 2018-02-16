var editBtn = document.querySelector('#edit');
var input = document.querySelectorAll('input')[0];
var date = document.querySelectorAll('input')[1];

var deleteBtn = document.querySelectorAll('.test');

editBtn.addEventListener('click', function () {
  input.classList.toggle('hide');
  date.classList.toggle('hide');
});

for (var i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener('click', function () {
    this.parentElement.style.display = 'none';
  });
}

input.addEventListener('keypress', function (e) {
  var enter = 13;
  if (e.which === enter) {

    var li = document.createElement('li');
    var i = document.createElement('i');
    var span = document.createElement('span');
    span.className = 'test';
    i.className = 'fas fa-trash-alt';
    span.addEventListener('click', function () {
      this.parentElement.style.display = 'none';
    });

    // refers to the input for a new todo
    var liText = document.createTextNode(this.value);
    var liSpace = document.createTextNode(' ');
    span.appendChild(i);
    li.appendChild(span);
    li.appendChild(liSpace);
    li.appendChild(liText);
    document.querySelector('.todoList').appendChild(li);
    this.value = '';

  }
});
