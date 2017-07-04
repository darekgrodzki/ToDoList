/**
 * Created by Jacek on 2015-12-16.
 */
document.addEventListener("DOMContentLoaded", function() {

    var placeholder = document.querySelector('#taskInput');
    var span = document.querySelector('#counter');

    var submit = document.querySelector('#addTaskButton');
    var taskList = document.querySelector('#taskList');
    var removeFinishedTasksButton = document.querySelector('#removeFinishedTasksButton');
    var counter = 0;

    removeFinishedTasksButton.addEventListener('click', function() {

        var completeList = document.querySelectorAll('.complete');
        for (var i = 0; i < completeList.length; i++) {
            completeList[i].parentElement.removeChild(completeList[i]);
            counter--;
            span.innerHTML = "number of tasks " + counter;

        }
    })

    submit.addEventListener('click', function() {

        var task = placeholder.value;
        if (task.length < 2 || task.length > 100) {
            return;
        }
        var newLi = document.createElement('div');
        var tempLi = taskList.appendChild(newLi);
        var newh1 = document.createElement('h2');
        newh1.innerHTML = task;
        placeholder.value = "";
        var h1done = tempLi.appendChild(newh1);
        var button1 = document.createElement('button');
        button1.innerHTML = "Complete";
        button1.classList.add('green');
        var completeBtn = tempLi.appendChild(button1);
        var button = document.createElement('button');
        button.classList.add('red');
        button.innerHTML = "Delete";
        var deleteBtn = tempLi.appendChild(button);
        counter++;
        span.innerHTML = "number of tasks: " + counter;

        completeBtn.addEventListener('click', function() {
            this.parentElement.classList.add('complete');
            this.classList.add('grey');

        })
        deleteBtn.addEventListener('click', function() {

            this.parentElement.parentElement.removeChild(this.parentElement);
            counter--;
            span.innerHTML = "number of tasks: " + counter;


        })
    })

});





// znaleźć submit i pole do wpisywania walidacja inputa
// zapiąć event - zebrać info z pola i klonować zadanie
