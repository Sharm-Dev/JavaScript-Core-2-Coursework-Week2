function listOfNames(arrayOfPeople) {
  let content = document.getElementById("content")
  people.forEach(function(person){
    const h1El = document.createElement("h1");
    h1El.innerHTML = person.name;
    content.appendChild(h1El);
    const h2El = document.createElement("h2");
    h2El.innerHTML = person.job;
    content.appendChild(h2El)

  })
}
  





let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
