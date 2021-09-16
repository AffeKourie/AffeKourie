
 class PageHeader {

    constructor(
        wordZero,
        wordOne,
        wordTwo,
        wordThree,
        wordFour,
        wordFive,
        wordSix,
        image,
        imageDescription
    ){
        this.wordZero = wordZero;
        this.wordOne = wordOne;
        this.wordTwo = wordTwo;
        this.wordThree = wordThree;
        this.wordFour = wordFour;
        this.wordFive = wordFive;
        this.wordSix = wordSix;
        //Egentligen borde image och dess beskrivning finnas i en Figure.js?
        this.image = image;
        this.imageDescription = imageDescription;

    }
    
    
    addPageHeaderContent(){

    
    let pageHeaderContent = `
    <h1> ${this.wordZero} </h1>
    <ul id="nav">
    <li><a href="${this.wordOne}.html" >${this.wordOne}</a></li>
    <li><a href="${this.wordTwo}.html" >${this.wordTwo}</a></li>
    <li><a href="${this.wordThree}.html" >${this.wordThree}</a></li>
    <li><a href="${this.wordFour}.html" >${this.wordFour}</a></li>
    <li><a href="${this.wordFive}.html" >${this.wordFive}</a></li>
    <li><a href="${this.wordSix}.html" >${this.wordSix}</a></li>
    </ul>
    `;
        return pageHeaderContent;
    };   


 }
 export default PageHeader