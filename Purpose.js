class Purpose {

    

    constructor(
        
    ){
        this.description = "We connect leaders with there employees";
    };


    contentPurpose() {
        const purposeElement = document.createElement("purpose-content");
        purposeElement.innerHTML = `
        <h1> We connect leaders with there employees </h1> 
        `;
        purposeElement.className = "purpose";
        purposeElement.setAttribute("textalign", "left");
        return purposeElement;
    }
    

}



export default Purpose