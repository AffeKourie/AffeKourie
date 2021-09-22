
class Home {

constructor(){
    this.homeDescription = `We give the worker a purpose right where he is. 
    Our home base is in Södertälje, we have 15 employees`;
}

//Vi måste ersätta elementet radera föregåene elment innan vi lägger in nytt
contentHome() {
    const homeElement = document.createElement("home-content");
    homeElement.innerHTML = `
    <h1> ${this.homeDescription} </h1> 
    `;
    homeElement.className = "home";
    return homeElement;
}


}


export default Home