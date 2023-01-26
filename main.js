const text=document.getElementById("task-text");
const Submit=document.getElementById("task-submit");
const GetElement=document.getElementById("getElement");

function readLc(){
    const hasTodo=localStorage.getItem("LcTodo");
    const parsTodo=JSON.parse(hasTodo);

    return parsTodo;
}

const Arrayform=[];

const formTodo=()=>{
const todoRE=readLc();
if(todoRE && todoRE.length>0)
{
    todoRE.forEach(item => {
        const ListElement=document.createElement("li");
        ListElement.classList="List-Element";
        const buttonElement=document.createElement("button");
        buttonElement.className="button-list";
        const textList=document.createElement("div");
        const text=document.createElement("h1");
        text.setAttribute("class","text-list")
        text.innerText=item.title;

        const actions=document.createElement("div");
        const DeleteBtn=document.createElement("button");
        DeleteBtn.src="DELETE";
        DeleteBtn.classList="Delete-Btn";
        DeleteBtn.id=item.id;
        DeleteBtn.addEventListener("click",(e)=>{
            e.preventDefault();
            const filterTodo=readLc().filter(item=>+item.id !==+e.target.id)
            localStorage.setItem("LcTodo",JSON.stringify(filterTodo));
            e.target.parentElement.parentElement.parentElement.remove();
        })

        const EditBtn=document.createElement("button");
        EditBtn.classList="Edit-btn";
        EditBtn.innerText="EDIT";

        EditBtn.addEventListener("click",(e)=>{
            EditBtn.focus();
            EditBtn,innerText="Save"
        })
        const ViewBtn=document.createElement("button");
        ViewBtn.innerText="VIEW";
        ViewBtn.className="View-btn";

        textList.appendChild(text);
        actions.append(DeleteBtn,EditBtn,ViewBtn);
        buttonElement.append(textList,actions);
        ListElement.appendChild(buttonElement);
        GetElement.appendChild(ListElement);

    });
}
}
formTodo();
Submit.addEventListener("click",(e)=>{
    e.preventDefault();
    const form={
        id:Date.now(),
        title:text.value
    };

if(readLc()&&readLc().length>0)
{
    const margeData=[...readLc(),form];
const stringfyData=JSON.stringify(margeData);
localStorage.setItem("LcTodo",stringfyData);
}
else{

    Arrayform.push(form);
    const stringfy=JSON.stringify(Arrayform);
    localStorage.setItem("LcTodo",stringfy);
}
    GetElement.innerHTML="";
    formTodo();
    text.value="";
    
    
})