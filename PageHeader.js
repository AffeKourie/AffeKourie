
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
    <li><a "${this.wordOne}" >${this.wordOne}</a></li>
    <li><a "${this.wordTwo}" >${this.wordTwo}</a></li>
    <li><a "${this.wordThree}" >${this.wordThree}</a></li>
    <li><a "${this.wordFour}" >${this.wordFour}</a></li>
    <li><a "${this.wordFive}" >${this.wordFive}</a></li>
    <li><a "${this.wordSix}" >${this.wordSix}</a></li>
    </ul>
    `;
        return pageHeaderContent;
    };   


 }
 export default PageHeader