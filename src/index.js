import { formFill } from "./aboutHome.js";
import { readNotes } from "./readNotes.js";

const content=document.querySelector("#content");
const newfrm=document.querySelector("#crt");
newfrm.addEventListener("click", ()=>{
    content.innerHTML="";
    formFill(content);
})

const readfrm=document.querySelector("#rde");
readfrm.addEventListener("click", ()=>{
    content.innerHTML="";
    readNotes(content);
    
})
