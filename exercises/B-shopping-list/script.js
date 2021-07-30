function shoppingList(arrayOfPeople) {
  // Write your code here...

  // To get the div ID that I want to add elements too
  const content  = document.getElementById("content");
  // To create a new element 
  const ulEl = document.createElement("ul");
  // To create a loop, to look at each element in the array 
  shopping.forEach(function(isList){
    // To create a list item
    const liEl = document.createElement("li");
    // To get the HTML element li and connect the function name   
    liEl.innerHTML = isList;
    // puts the li into the ul
    ulEl.appendChild(liEl);
  })
  // puts the ul into the conent div
  content.appendChild(ulEl);


}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
