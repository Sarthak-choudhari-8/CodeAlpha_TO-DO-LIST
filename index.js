// document.write("js is wrokin g");

let inp =  document.querySelector("input");
let addbtn = document.querySelector(".add_btn");
// let list =  document.querySelector("h3");

addbtn.addEventListener("click", add_to_list);


let refreshbtn = document.querySelector(".refreshbtn");
    refreshbtn.addEventListener("click" , function (){
window.location.reload();
});

inp.addEventListener("keydown",function (event){

    if(event.key == "Enter"){
        add_to_list();
    }
});


function add_to_list(){
    if(inp.selectionStart == 0){
        alert("Please enter some taxt in input box...");
    }
    
else{
let section = document.querySelector(".list_section ");

let full_line = document.createElement("div");

section.appendChild(full_line);

full_line.classList.add("full_line_css");

let dot =  document.createElement("div");
// dot.setAttribute("type","checkbox");
dot.setAttribute('class','checkbox');
full_line.appendChild(dot);


let delbtn =  document.createElement("div");
full_line.appendChild(delbtn);


let newlist = document.createElement("p");
newlist.setAttribute('class','task');
full_line.appendChild(newlist);



// dot.classList.add("dot");


delbtn.classList.add("delbtn_css");
// delbtn.innerText =  "Delete";
newlist.innerText = (inp.value);



delbtn.addEventListener("click", function (){
let list_item = this.parentElement;
list_item.remove();

});



dot.addEventListener("click", function (){
    // let list_item = this.parentElement;
    // list_item.remove();

    newlist.classList.toggle("task2");

    });
    



}


}
