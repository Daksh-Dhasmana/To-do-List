
const infoArr=[];
function formFill(content){

    const form=document.createElement("form");
    form.setAttribute("id","info");

    const titleLabel=document.createElement("label");
    titleLabel.textContent="Enter Title";
    form.append(titleLabel);

    const titleName=document.createElement("input"); //Title
    titleName.setAttribute("type","text");
    titleName.setAttribute("id","title");
    form.append(titleName);
    form.append(document.createElement("br"));

    const desc=document.createElement("label");//Description
    desc.textContent="Write Notes";
    form.append(desc);

    const dec=document.createElement("input");
    dec.setAttribute("type","text");
    dec.setAttribute("id","nte");
    form.append(dec);
    form.append(document.createElement("br"));

    const buto=document.createElement("button");
    buto.setAttribute("type","submit");
    buto.textContent="Submit";
    form.append(buto);

    content.append(form);

    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        const data={
            name: document.querySelector("#title").value,
            notes: document.querySelector("#nte").value
        };
        infoArr.push(data);
        rerender();
    })
}
function rerender(){
    const cnt=document.querySelector("#content");
    cnt.innerHTML="";
    formFill(content);
}
export{formFill, infoArr};