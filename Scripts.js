/**
 * The let statement
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
 */


//import PageHeader from "./PageHeader.js";
import Purpose from "./Purpose.js";
import pageObjectArray from "./dataPages.js";

let day = false;



// const page = new PageHeader(
//     "To be seen makes you grow",
//     "Home",
//     "Purpose",
//     "One2One",
//     "Elevate",
//     "Work Feed",
//     "Contact Us",
//     "../images/growthBuisness.svg",
//     "Headline for the picture",
// );

let purpose = new Purpose();
console.log(purpose);
console.log(purpose.description);


const addPageHeader = function(thisPage){
    const newList = document.createElement("article");
    newList.innerHTML = thisPage.addPageHeaderContent();
    return newList;
};

const addFigure = function(thisPage) {
   let newFigure = document.createElement("figure");
   
   newFigure.innerHTML = `
   <h2> "${thisPage.imageDescription}" </h2>
    <h3> "${day ? "My title" : "Your title"}
    <img src="${thisPage.image}" alt="" </img>
   
   `; 
   
   return newFigure;
};

pageObjectArray.forEach((item) => {
    console.log(item.wordFour);
});

let pageSide = 0;

console.log(addPageHeader(pageObjectArray[pageSide]));
console.log(pageObjectArray[pageSide].image);

const main = document.querySelector(".main-page");
//const mainPurpose = document.querySelector(".main-purposep");

//mainPurpose.append(addPageHeader(pageObjectArray[pageSide]));
main.append(addPageHeader(pageObjectArray[pageSide]));
main.insertAdjacentElement("beforeend", addFigure(pageObjectArray[pageSide]));



const mainPurpose = document.querySelector(".main-purpose");
let purposeArticle = document.createElement("article");
mainPurpose.append(purposeArticle);