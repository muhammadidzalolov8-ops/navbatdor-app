let people = JSON.parse(localStorage.getItem("p")||"[]");

function save(){localStorage.setItem("p",JSON.stringify(people));render();}

function addPerson(){
  const n=document.getElementById("name").value;
  const f=document.getElementById("photo").files[0];
  const r=new FileReader();
  r.onload=()=>{people.push({name:n,photo:r.result});save();}
  if(f) r.readAsDataURL(f);
}

function render(){
  if(!people.length) return;
  const d=new Date().getDate()%people.length;
  document.getElementById("todayDuty").innerText="Имрӯз: "+people[d].name;

  const div=document.getElementById("people");
  div.innerHTML="";
  people.forEach(p=>{
    div.innerHTML+=`<div><img src="${p.photo}"/> ${p.name}</div>`;
  });
}

render();
