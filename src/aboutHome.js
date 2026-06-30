function formFill(){
    const content=document.querySelector("#content")
    const form=document.createElement("form");
    const title=document.createElement("input");
    title.setAttribute("type",text);
    form.append(title);
    const desc=document.createElement("input");
    desc.setAttribute("type",text);
    form.append(title);
    form.append(document.createElement("button").setAttribute("type",submit));

}