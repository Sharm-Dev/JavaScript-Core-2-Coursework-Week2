function todoList(todos) {
  // Write your code here...
  const content = document.getElementById('content');
  const isShoppingList = document.createElement('ul');
  content.appendChild(isShoppingList);

  todos.forEach(function(isTasks){

  const listItems = document.createElement('li');

  const onButtonClick = function(){
    if(listItems.style.textDecoration === 'line-through'){
    listItems.style.textDecoration = 'none';
    }else{
      listItems.style.textDecoration = 'line-through';
    }
  }

  listItems.addEventListener("click", onButtonClick);




    
    listItems.className += 'listOfStuff';
    listItems.style.listStyleType = 'none';
    listItems.style.cursor = 'pointer'
    listItems.innerHTML = isTasks.todo
    isShoppingList.appendChild(listItems);
  });
}

  // const taskOne = document.getElementsByClassName('li')[0];
  // const taskTwo = document.getElementsByClassName('li')[1];
  // const taskThree = document.getElementsByClassName('li')[2];
  // const taskFour = document.getElementsByClassName('li')[3];
  







const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);