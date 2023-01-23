const Dec=document.querySelector("#task-text");
const Submit=document.querySelector("#task-submit");
const GetElement=document.querySelector("#getElement")

const Arrayform=[];


const Todo=()=>{

    Arrayform.forEach((item)=>{

const ListElement=document.createElement("button");
ListElement.setAttribute("class","List-Element");
const textList=document.createElement("div");
const text=document.createElement("h1");
text.innerHTML=item.decription;
text.setAttribute("class","text-list")
const actionlist=document.createElement("div");
const DeleteBtn=document.createElement("button");
DeleteBtn.innerText="DELETE";
const EditBtn=document.createElement("button");
EditBtn.innerText="EDIT";
const ViewBtn=document.createElement("button");
ViewBtn.innerText="VIEW";

DeleteBtn.className="Delete-Btn";
EditBtn.className="Edit-Btn";
ViewBtn.classList="View-Btn";

ListElement.append(textList,actionlist);
textList.appendChild(text);
actionlist.append(DeleteBtn,EditBtn,ViewBtn);
GetElement.appendChild(ListElement);

    })
}
Todo();

Submit.addEventListener("click",(e)=>{
    e.preventDefault();

    const form={
        decription:Dec.value
    };
    
    Arrayform.push(form);

    GetElement.innerHTML="";
Todo();
    Dec.value=""
})
