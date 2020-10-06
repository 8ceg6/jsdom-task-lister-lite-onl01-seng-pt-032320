document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("form#create-task-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const inputTag = document.querySelector("input#new-task-description");
        const taskInput = inputTag.value;


        const newTask = document.createElement("li");
        newTask.innerText = taskInput;

        const ulTask = document.querySelector("ul#tasks");
        ulTask.append(newTask);
        inputTag.value = "";

    })

});