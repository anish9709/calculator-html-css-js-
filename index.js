let s = ""; //blank space in white box that's why an empty string is passed;
let buttons = document.querySelectorAll('.b');
Array.from(buttons).forEach((b)=>{
    b.addEventListener('click', (a)=>{
         if (a.target.innerHTML == "=") {
            s = eval(s);
            document.querySelector('input').value = s;  //this is written to update the s named variable
        }
        else if (a.target.innerHTML== "c") {
            s = "";
            document.querySelector('input').value = s;
        } 
        else if (a.target.innerHTML == 'DEL') {
            s = s.slice(0, -1);
            document.querySelector('input').value = s;
        }
        else{
        console.log(a.target)
        s = s + a.target.innerHTML;   //value passed to string on click on button
        document.querySelector('input').value = s;
        }
    })
})