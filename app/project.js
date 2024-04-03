// importing bootstrap js files
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js";

const project_array = window.localStorage.getItem("clicked_project");
const project = JSON.parse(project_array)

// console.log(project[0]);

const {name , img , doc} = project[0];

// const project_html = document.getElementById("project");
const project_heading = document.getElementById("project-name");

project_heading.innerText = name;

// project_html.innerHTML = `
//                                                 <h1>${name}</h1>

//                                                 <a href="${doc}">Doc</a>

//                                                 <a href="${img}">Model</a>`