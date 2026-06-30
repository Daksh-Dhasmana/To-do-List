function formFill(){
    const content=document.querySelector("#content")
    const form=document.createElement("form");
    const lab=document.createElement("label");
    lab.textContent="Enter Name";
    form.append(lab);
    const desc=document.createElement("input");
    desc.setAttribute("type","text");
    form.append(desc);
    form.append(document.createElement("br"));
    const buto=document.createElement("button");
    buto.setAttribute("type","submit");
    buto.textContent="Submit";
    form.append(buto);
    content.append(form);
}
export{formFill};