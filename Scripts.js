/**
 * The let statement
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
 */


import Purpose from "./Purpose.js";
import Home from "./Home.js";
import pageObjectArray from "./dataPages.js";
import One2One from "./one2one.js";



const wpBackGround = document.body;
wpBackGround.style.backgroundColor = "grey";
const bodyElement = document.querySelector("body");
const header = document.querySelector(".page-title");
const main = document.querySelector(".main-page");
const articleElement = document.createElement("article");
const contentElement = document.createElement("content-element");


let purpose = new Purpose();
let home = new Home();
let one2one = new One2One();
console.log(purpose);
console.log(purpose.description);


const addPageHeader = function(thisPage){
    articleElement.innerHTML = thisPage.addPageHeaderContent();
    return articleElement;
};


const addFigure = function(thisPage) {
   let newFigure = document.createElement("figure");
   newFigure.className = thisPage.imageDescription;
   newFigure.innerHTML = `
   
    <img src="${thisPage.image}" alt loading="lazy" </img>
   
   `; 
   
   return newFigure;
};



let pageSide = 0;

console.log(addPageHeader(pageObjectArray[pageSide]));
console.log(pageObjectArray[pageSide].image);

//const main = document.querySelector(".main-page");
//const mainPurpose = document.querySelector(".main-purposep");

//Här appendas article
header.append(addPageHeader(pageObjectArray[pageSide]));
bodyElement.insertAdjacentElement("beforeend", addFigure(pageObjectArray[pageSide]));
main.append(contentElement);

let pageClick = document.querySelectorAll("a");

console.log(pageClick[1]);

pageClick[1].addEventListener("click",() =>{
  console.log("Jag klickar");
  contentElement.append(purpose.contentPurpose());
})

pageClick[0].addEventListener("click",() =>{
  console.log("Jag klickar");
  contentElement.append(home.contentHome());
})

pageClick[2].addEventListener("click",() =>{
contentElement.append(one2one.contentOne2One());
} )


const navLi = document.querySelectorAll("li");
console.log(navLi);

navLi.forEach(listItem => {
    listItem.addEventListener("mouseover", function(){
    listItem.setAttribute("style", "background-color: aquamarine");
   //navli.setAttribute("style", "background-color: yellow");
  })
  listItem.addEventListener("mouseout", function(){
    listItem.setAttribute("style", "background-color: grey");
    //navli.setAttribute("style", "background-color: yellow");
  })
});



