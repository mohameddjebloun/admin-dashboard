//Create the variables starBtns, viewBtns and shareBtns that store all the svg buttons
const starBtns = document.querySelectorAll(".star");
const viewBtns = document.querySelectorAll(".view");
const shareBtns = document.querySelectorAll(".share");
//Call the functions
toggleBtn();
//Create the function toggleBtn that adds a click event listener to all svg buttons
function toggleBtn(){
    //Add a click event listener for each star button
    starBtns.forEach((button) =>  {
        button.addEventListener("click",()=>{
            //Toggle the svg color between black and yellow
            if(button.style.color ==='yellow'){
                button.style.color = 'black';
            }
            else {
                button.style.color = 'yellow';
            }
        })
    });
    //Add a click event listener for each view button
    viewBtns.forEach((button) =>  {
        button.addEventListener("click",()=>{
            //Toggle the svg color between black and green
            if(button.style.color ==='lightgreen'){
                button.style.color = 'black';
            }
            else {
                button.style.color = 'lightgreen';
            }
        })
    });
    //Add a click event listener for each share button
    shareBtns.forEach((button) =>  {
        button.addEventListener("click",()=>{
            //Toggle the svg color between black and blue
            if(button.style.color ==='rgb(60, 153, 211)'){
                button.style.color = 'black';
            }
            else {
                button.style.color = '#3C99D3';
            }
        })
    });
}