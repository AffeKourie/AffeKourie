class One2One {


constructor(){
    this.name = "one2one";
}
  

contentOne2One() {
  
        var inputText = document.createElement('textarea');
        inputText.name = 'post';
        inputText.maxLength = 5000;
        inputText.cols = 80;
        inputText.rows = 40;
        inputText.className = 'myCustomTextarea';
        // var button = document.createElement('button');
        // var oBody = document.getElementById("body");
        // while (oBody.childNodes.length > 0) {
        //     oBody.removeChild(oBody.childNodes[0]);
        // }
        // oBody.appendChild(input);
        // oBody.appendChild(button);
    return inputText;
}


}
export default One2One