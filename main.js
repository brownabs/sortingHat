"use strict";

const hogwartsHouses = [
  {
    id: 1,
    name: "Gryffindor",
    emblem: "/images/Gryffindor.png",
  },
  {
    id: 2,
    name: "Slytherin",
    emblem: "/images/Slytherin.png",
  },
  {
    id: 3,
    name: "Hufflepuff",
    emblem: "/images/Hufflepuff.png",
  },
  {
    id: 4,
    name: "Ravenclaw",
    emblem: "/images/Ravenclaw.png",
  },
];

const students = [
  {
    name: "Abbey",
    hogwartsHouse: {
      name: "Slytherin",
      emblem: "/images/Slytherin.png",
    },
  },
  {
    name: "Harry",
    hogwartsHouse: {
      name: "Gryffindor",
      emblem: "/images/Gryffindor.png",
    },
  },
  {
    name: "Hermoine",
    hogwartsHouse: {
      name: "Slytherin",
      emblem: "/images/Slytherin.png",
    },
  },
  {
    name: "Ron",
    hogwartsHouse: {
      name: "Gryffindor",
      emblem: "/images/Gryffindor.png",
    },
  },
];

const printToDom = (divId, textToPrint) => {
  let selectedDiv = document.getElementById(divId);

  return (selectedDiv.innerHTML = textToPrint);
};

const initializingPage = () => {
  let domString = `

    <h1 class="display-2">Welcome to Hogwarts!</h1>
    <h1 class="display-4">
    Congrats on being accepted! You now need to be sorted into your house. </h1>
    <a class="btn btn-light btn-lg" href="#" role="button" id="sortButton">Let's Begin</a>
`;
  printToDom("sortButtonForLandingPage", domString);
};

const sortButton = () => {
  document.getElementById("sortButton").addEventListener("click", buildForm);
};

const formClicked = () => {
  document.getElementById("sortStudent").addEventListener("click", studentName);
  document
    .getElementById("sortStudent")
    .addEventListener("click", buildStudentsList);
};

const expelButtonClicked = () => {
  document.getElementById("students").addEventListener("click", expelStudent);
};

const buildForm = (e) => {
  let sortButton = document.getElementById("sortButtonForLandingPage");
  sortButton.remove();
  const buttonId = e.target.id;
  let domString = "";

  if (buttonId === "sortButton") {
    domString = ` <form>
      <div class="container" id="sortingForm">
                    <div class="form-group mb-2">
                    <h1>Tell Me Your Name</h1>
                    </div>
                    <div class="form-group mx-sm-3 mb-2">
                    <label for="student" class="sr-only sortingFormInformation">Name</label>
                    <input type="name" required="required" class="form-control sortingFormInformation" id="student" placeholder="Name" :required>
                    <button type="submit" class="btn btn-light mb-2 sortingFormInformation" id="sortStudent" onClick="formClicked()">Sort!</button>
                    </div>
                </div>
                </form>`;
  }

  printToDom("form", domString);
};

const buildStudentsList = () => {
  let domString = "";

  students.forEach((s) => {
    domString += `<div class="card m-3" style="width: 18rem;">`;
    domString += `<img src="${s.hogwartsHouse.emblem}" class="card-img-top" alt="house">`;
    domString += `<div class="card-body studentCard">`;
    domString += ` <h1 class="card-title">${s.name}</h1>`;
    domString += `<p class="card-text">${s.hogwartsHouse.name}</p>`;
    domString += `<input type="hidden" id="${s.id}" name="custId" value="3487">`;
    domString += `<button type="button" class="btn btn-dark" id="${s.name}">EXPEL</button>`;
    domString += `</div>`;
    domString += `</div>`;
  });

  printToDom("students", domString);
  expelButtonClicked();
};

const studentName = () => {
  let studentName = document.getElementById("student").value;

  let sortingForm = document.getElementById("sortingForm");
  sortingForm.remove();

  let student = {
    name: studentName,
    hogwartsHouse: Object.assign(hogwartsHouses[studentHouse()]),
  };

  students.push(student);
};

const studentHouse = () => {
  return Math.floor(Math.random() * 4);
};

const expelStudent = (e) => {
  let student = e.target.id;
  let button = e.target.type;

  if (button === "button") {
    students.forEach((s) => {
      if (s.name === student) {
        students.pop(student);
      }
    });

    buildStudentsList();
  }
};

const init = () => {
  initializingPage();
  sortButton();
};

init();
