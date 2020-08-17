'use strict';

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
      name: "Hufflepuff",
      emblem: "/images/Gryffindor.png",
    },
  },
  {
    name: "Malfoy",
    hogwartsHouse: {
      name: "Ravenclaw",
      emblem: "/images/Slytherin.png",
    },
  },
  {
    name: "Neil",
    hogwartsHouse: {
      name: "Ravenclaw",
      emblem: "/images/Slytherin.png",
    },
  },
];

const expelledStudents = [];

const printToDom = (divId, textToPrint) => {
  let selectedDiv = document.getElementById(divId);

  return (selectedDiv.innerHTML = textToPrint);
};


const sortButton = () => {
  document.getElementById("sort-button").addEventListener("click", buildForm);
};

const formClicked = () => {
  document.getElementById("sort-student").addEventListener("click", () => {
    studentName(); 
    buildStudentsList();
  }) 
}

const expelButtonClicked = () => {
  document.getElementById("students").addEventListener("click", expelStudent);
};

const buildForm = () => {
  let sortButton = document.getElementById("sort-button-landing-page");
  sortButton.remove();
  let domString = "";

    domString = ` <form>
                    <div class="container" id="sorting-form">
                    <div class="form-group mb-2">
                    <h1>Tell Me Your Name</h1>
                    </div>
                    <div class="form-group mx-sm-3 mb-2">
                    <label for="student" class="sr-only sorting-form-information">Name</label>
                    <input type="name" required="required" class="form-control sorting-form-information" id="student" placeholder="Name" :required>
                    <button type="submit" class="btn btn-light mb-2 sorting-form-information" id="sort-student" onClick="formClicked()">Sort!</button>
                    </div>
                   </div>
                </form>`;

  printToDom("form", domString);
  formClicked();
};

const buildStudentsList = (listOfStudents) => {
  let domString = "";
  console.log(listOfStudents)

  if(listOfStudents === undefined) {
  students.forEach((s) => {

    domString += `<div class="card m-3" style="width: 18rem;">`;
    domString += `<img src="${s.hogwartsHouse.emblem}" class="card-img-top" alt="house">`;
    domString += `<div class="card-body student-card ${s.hogwartsHouse.name}">`;
    domString += ` <h1 class="card-title">${s.name}</h1>`;
    domString += `<p class="card-text">${s.hogwartsHouse.name}</p>`;
    domString += `<input type="hidden" id="${s.id}" name="custId" value="3487">`;
    domString += `<button type="button" class="btn btn-dark" id="${s.name}">EXPEL</button>`;
    domString += `</div>`;
    domString += `</div>`;
  }) } else {
    listOfStudents.forEach((s) => {
    domString += `<div class="card m-3" style="width: 18rem;">`;
    domString += `<img src="${s.hogwartsHouse.emblem}" class="card-img-top" alt="house">`;
    domString += `<div class="card-body student-card ${s.hogwartsHouse.name}">`;
    domString += ` <h1 class="card-title">${s.name}</h1>`;
    domString += `<p class="card-text">${s.hogwartsHouse.name}</p>`;
    domString += `<input type="hidden" id="${s.id}" name="custId" value="3487">`;
    domString += `<button type="button" class="btn btn-dark" id="${s.name}">EXPEL</button>`;
    domString += `</div>`;
    domString += `</div>`;
  })
}

  printToDom("students", domString);
  buildHouseColors();
  expelButtonClicked();
};

const buildHouseColors = () => {
  students.forEach((s) => {
      if (s.hogwartsHouse.name === 'Gryffindor'){
          document.querySelector('.Gryffindor').classList.add("Gryffindor");
      } else if (s.hogwartsHouse.name === 'Slytherin') {
          document.querySelector('.Slytherin').classList.add("Slytherin");
      } else if (s.hogwartsHouse.name === 'Hufflepuff'){
          document.querySelector('.Hufflepuff').classList.add("Hufflepuff");
      } else if (s.hogwartsHouse.name === 'Ravenclaw'){
          document.querySelector('.Ravenclaw').classList.add("Ravenclaw");
      }
  });
}

const studentName = () => {
  let studentName = document.getElementById("student").value;

  let sortingForm = document.getElementById("sorting-form");
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
    const studentsStillInSchool = students.filter((s) => s.name !== student);
    buildStudentsList(studentsStillInSchool);
  }  
  }


const initializingPage = () => {
  let domString = `<h1 class="display-2">Welcome to Hogwarts!</h1>
    <h1 class="display-4">
    Congrats on being accepted! You now need to be sorted into your house. </h1>
    <button class="btn btn-light btn-lg" role="button" id="sort-button" onClick="sortButton()">Let's Begin</button>`;

  printToDom("sort-button-landing-page", domString);
};

const init = () => {
  initializingPage();
  sortButton();
};

init();
