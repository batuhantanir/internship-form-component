var usersData = [
  {
    "id": 0,
    "name": "Neil Sims",
    "email": "neil.sims@windster.com",
    "imgSrc": "https://demo.themesberg.com/windster/images/users/neil-sims.png",
    "position": "Frontend Developer",
    "country": "United States",
    "status": "Active"
  },
  {
    "id": 1,
    "name": "Roberta Casas",
    "email": "roberta.casas@windster.com",
    "imgSrc": "https://demo.themesberg.com/windster/images/users/neil-sims.png",
    "position": "Designer",
    "country": "Spain",
    "status": "Offline"
  },
  {
    "id": 2,
    "name": "Michael Gough",
    "email": "michael.gough@windster.com",
    "imgSrc": "https://demo.themesberg.com/windster/images/users/neil-sims.png",
    "position": "React Developer",
    "country": "United Kingdom",
    "status": "Active"
  },
  {
    "id": 3,
    "name": "Jese Leos",
    "email": "bonnie.green@windster.com",
    "imgSrc": "https://demo.themesberg.com/windster/images/users/neil-sims.png",
    "position": "Marketing",
    "country": "United States",
    "status": "Active"
  },
  {
    "id": 4,
    "name": "Bonnie Green",
    "email": "neil.sims@windster.com",
    "imgSrc": "https://demo.themesberg.com/windster/images/users/neil-sims.png",
    "position": "UI/UX Engineer",
    "country": "Australia",
    "status": "Offline"
  }
];
const data = JSON.parse(localStorage.getItem("users"));

//data yoksa
if (!data) {
  // JSON verisini localStorage'e kaydetme
  localStorage.setItem("usersData", JSON.stringify(usersData));
}