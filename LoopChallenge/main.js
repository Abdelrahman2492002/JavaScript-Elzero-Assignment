let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Rana", "Hady"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Anwar",
  "Samir", // Added new employee "Samir"
  "Sami", // Added new employee "Sami"
];

let adminNumbers = 0;
for (let i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === "Stop") break;
  adminNumbers++;
}

document.write(`We Have ${adminNumbers} Admins <hr>`);

for (let i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === "Stop") break;
  let teamMembers = "";
  let counter = 1;
  for (let j = 0; j < myEmployees.length; j++) {
    if (myAdmins[i][0] === myEmployees[j][0]) {
      teamMembers += `<p>- ${counter} ${myEmployees[j]}</p>`;
      counter++;
    }
  }
  counter = 1;
  document.write(`<div>
    The Admin For Team ${i + 1} Is ${myAdmins[i]}
    <h3>Team Members: </h3>
     ${teamMembers}
    </div>
    <hr>`);
}
