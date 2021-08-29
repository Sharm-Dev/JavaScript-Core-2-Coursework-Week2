function listOfColours(colours) {
  // Write your code here...
  const content = document.getElementById('content');
  const elementSelect = document.createElement('select');
  content.appendChild(elementSelect);
  const elementParagraph = document.createElement('p');
  content.appendChild(elementParagraph);
  
  
  colours.forEach(function(isColours){
    const elementOption = document.createElement('option');
    elementOption.value = isColours
    elementOption.innerText = isColours;
    elementSelect.appendChild(elementOption);
  })

    // elementParagraph.innerText = `You have selected ${elementSelect.value}`;
    // elementParagraph.style.color = elementSelect.value;

    // select.addEventListener('pick',() => {
    //   elementParagraph.style.color = elementSelect.value;
    //   elementParagraph.innerText = `You have selected: ${elementParagraph.value}`
    // })
  
  
  }

  


const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
