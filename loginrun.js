
function hi()
{let name1=document.getElementById("first");
const name1_val=name1.value;

    if(name1_val=='' || name1_val==Number){
    
    name1.style.border="3px solid red";
}
else{
    name1.style.border="3px solid rgb(120, 235, 126)";
}
}