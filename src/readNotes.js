import { infoArr } from "./aboutHome.js";
function readNotes(content){
    for (let i = 0; i < infoArr.length; i++) {
        content.append(infoArr[i].name);
        content.append(document.createElement("br"));
        content.append(infoArr[i].notes);
        const buto=document.createElement("button");
        let ids=i;
        buto.setAttribute("id",ids);
        buto.textContent="Delete";
        buto.addEventListener("click",(e)=>{
            e.preventDefault();
            dltNotes(ids);
        })
        content.append(buto);
        content.append(document.createElement("br"));
        content.append(document.createElement("br"));
    }
}

function dltNotes(ids){
    infoArr.splice(ids,1);
    const cnt=document.querySelector("#content");
    cnt.innerHTML="";
    readNotes(content);
}

export{readNotes};