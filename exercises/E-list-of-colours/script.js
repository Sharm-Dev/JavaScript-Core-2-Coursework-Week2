function listOfColours(colours) {
  // Write your code here...
  const content = document.getElementById('content');

  const elementSelect = document.createElement('select');
  content.appendChild(elementSelect);

   const elementParagraph = document.createElement('p');
  content.appendChild(elementParagraph);
  
  
  colours.forEach(function(isColours){
    
    const elementOption = document.createElement('option');
    const onButtonClick = function(){
      if(elementOption === "red"){
        elementParagraph.innerHTML = 'hhh'
      
    }
  }
  elementOption.addEventListener('click', onButtonClick);
  
  elementOption.innerHTML = isColours;
  elementSelect.appendChild(elementOption);
  })

  
};

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
