const card = (project)=>{
    return `<a href="./project.html" id="${project.name}">
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="https://placehold.co/600x400" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${project.name}</h5>
                    </div>
                </div>
            </a>
`};



export function display_cards_html(fetched_data,parent_object){
    const projects_cards = fetched_data.map((project)=>{return card(project);}).join('');
    parent_object.innerHTML = projects_cards;

};





// async function getCities(db) {
//     const citiesCol = collection(db, 'Projects');
//     const citySnapshot = await getDocs(citiesCol);
//     cityList = citySnapshot.docs.map(doc => doc.data());
//     // console.log(cityList);

//     // mapping over data
//     const projects_cards = cityList.map((project)=>{
//         return card(project);
//     }).join('');

//      //inserting mapped data into parent element
//     section.innerHTML = projects_cards;
//     section.addEventListener("click", on_card_click);
// }
