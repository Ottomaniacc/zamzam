console.log("Main JS loaded");

const inputCtx = document.querySelector(".input-context");
const button = document.querySelector(".submitBtn");
const bsRow = document.querySelector('.row');



// Dit is je fetch
fetch("https://mbo-sd.nl/period3-fetch/clothes-jeans-levi")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    // Vanaf hier ga je wat met ontvangen data doen.
    // Bijvoorbeeld cards maken met data erin.
    createBootstrapCards(data);
  });



const resultElement = document.querySelector('.result');
const containerElement = document.querySelector('.container');

function createBootstrapCards(jsonData){

  // const row = createBootstrapRow();

  let cards = "";
    // deze for loop maakt 3 cards aan en zet elke card in een bootstrap column. Aan het einde wordt de column toegevoegd aan de row.
    for(let i = 0; i < jsonData.length; i++){
        
     
      const object = jsonData[i];
      cards += createCard(object);
      

    }

   bsRow.innerHTML += cards;
    
    //de row wordt toegevoegd aan het result element.
   
}

function createCard(item) {
  const card = `
 <div class="col-md-4"> 
    <div class="card" style="width: 18rem;">
    <img src="${item.imageUrl}" class="card-img-top" alt="...">
    <div class="card-body">
     <h5 class="card-title">${item.title}</h5>
     <p class="card-text">${item.description}</p>
     <p class="card-text">€${item.price}</p>
    </div>
  </div>
</div>
  `;

  return card;
}