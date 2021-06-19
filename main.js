 

const paragraph = document.getElementById("paragraph").innerText;
var start;
 
document.getElementById("user-text").addEventListener("input", function () {
    const input = document.getElementById("user-text").value;
    if(input.length == 1){
        start = new Date().getTime();  
       }
    if (input.length == paragraph.length) {
        console.log("done");
        var end = new Date().getTime();
        var time = end - start;
        time = time / 1000;
        console.log('Execution time: ' + time);
       
    }
    else {

        let text = '';

        for (let i = 0; i < input.length; i++) {
            var element = paragraph[i];
            text = text + element;
        }
        console.log('text', text);

        if (text == input) {
            this.style.color = 'white';
        }
        else {
            this.style.color = "red";
        }
        console.log("input", input);

       
    }
  
})

 