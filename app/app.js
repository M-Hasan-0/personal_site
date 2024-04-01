// importing fireBase
import {getCities} from "./firebase.js"
// importing bootstrap js files
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
// utility functions
import { display_cards_html} from "./card.js"


const section = document.getElementById("projectsCards");
let fetched_projects;



async function display_cards(parentElement){
    
    fetched_projects = await getCities();
    // console.log(fetched_projects); 
    display_cards_html(fetched_projects,parentElement);

    parentElement.addEventListener("click", on_card_click);
}





function on_card_click(event){

    // on card click get card id 
    // console.log(event.target.parentElement.parentElement.attributes.id.value);
    const event_target_id  = event.target.parentElement.parentElement.attributes.id.value;
    // filter projects from fetched data using card id 
    const clicked_project = fetched_projects.filter((project)=>{
        return project.name == event_target_id;
    });
    // store project into local storage
    window.localStorage.setItem("clicked_project", JSON.stringify(clicked_project));

    console.log(localStorage);
};



window.onload = display_cards(section);