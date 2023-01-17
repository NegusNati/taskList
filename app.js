

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')

//load all even listeners

loadAllEventListeners();



//load all even listeners
function loadAllEventListeners(){
    //add task event
    form.addEventListener('submit', addTask);
}

//add task
function addTask(e){
   

    if( taskInput.value.length === 0 ){
        alert("Add a Task")
    } 

    //Create a list item
    const li = document.createElement('li');
    li.className = "collection-item";
    //-create a text node
    li.appendChild(document.createTextNode(taskInput.value));

// create a new link element
    const link = document.createElement('a');
    //add class
    link.className = 'delete-item secondary-content';
    //add the icon 
    link.innerHTML = '<i class="fa fa-remove></i>';
    //apepend the link to the li
    console.log(link)
    li.appendChild(link);

    //Append the li to ul
     taskList.appendChild(li);

     //clear input

     taskInput.value = "";


    console.log(li);


    e.preventDefault();
}