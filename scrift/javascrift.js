let interviewList=[]
let rejectList=[]
let total=document.getElementById("total");
let interview=document.getElementById("interview");
let rejected=document.getElementById("rejected");
const allcardCount=document.getElementById("job");
const allBtn=document.getElementById("All");
const interviewBtn=document.getElementById("Interview");
const rejectedBtn=document.getElementById("Reject");
const filteredSection=document.getElementById("filtered-section")


function calculateCount(){
    total.innerText=allcardCount.children.length;
    interview.innerText=interviewList.length;
    rejected.innerText=rejectList.length;

}
calculateCount();
function toggleStyle(id){
  allBtn.classList.remove('bg-black','text-white');
  interviewBtn.classList.remove('bg-black','text-white');
 rejectedBtn.classList.remove('bg-black','text-white');

  allBtn.classList.add('bg-gray-300','text-black');
  interviewBtn.classList.add('bg-gray-300','text-black');
 rejectedBtn.classList.add('bg-gray-300','text-black');
 const selected=document.getElementById(id);
 selected.classList.remove('bg-gray-300','text-black');
 selected.classList.add('bg-black','text-white');
 if(id==='Interview'){
    allcardCount.classList.add('hidden')
    filteredSection.classList.remove('hidden');
 }
 else if(id==="All"){
     allcardCount.classList.remove('hidden')
    filteredSection.classList.add('hidden');
 }
 else if(id==="Reject"){
     allcardCount.classList.add('hidden')
    filteredSection.classList.remove('hidden');
 }
}
document.addEventListener('click',function(event){
if(event.target.classList.contains('btn-1')){    
const parentnode=event.target.parentNode.parentNode;
const companyName= parentnode.querySelector('.company').innerText;
const position= parentnode.querySelector('.position').innerText;
const salary= parentnode.querySelector('.salary').innerText;
const type= parentnode.querySelector('.type').innerText;
const description= parentnode.querySelector('.description').innerText;
const interview= parentnode.querySelector('.btn-1').innerText;
const rejected= parentnode.querySelector('.btn-2').innerText;
parentnode.querySelector('.type').innerText="Interview";
const cardInfo={
   companyName,
   position,
   salary,
   type:'Interview',
   description,
   interview,
   rejected 
}
const companyExist=interviewList.find(item=> item.companyName===cardInfo.companyName);

if(!companyExist){
   interviewList.push(cardInfo); 
}
// interviewList=interviewList.filter(item=> item.companyName !==cardInfo.companyName);
calculateCount();
renderTriving();
else if(event.target.classList.contains('btn-2')){    
const parentnode=event.target.parentNode.parentNode;
const companyName= parentnode.querySelector('.company').innerText;
const position= parentnode.querySelector('.position').innerText;
const salary= parentnode.querySelector('.salary').innerText;
const type= parentnode.querySelector('.type').innerText;
const description= parentnode.querySelector('.description').innerText;
const interview= parentnode.querySelector('.btn-1').innerText;
const rejected= parentnode.querySelector('.btn-2').innerText;
parentnode.querySelector('.type').innerText="Rejected";
const cardInfo={
   companyName,
   position,
   salary,
   type:'Rejected',
   description,
   interview,
   rejected 
}
const companyExist=rejectList.find(item=> item.companyName===cardInfo.companyName);

if(!companyExist){
   rejectList.push(cardInfo); 
}
// rejectList=rejectList.filter(item=> item.companyName !==cardInfo.companyName);
calculateCount();
 renderrejected();}
});
function renderTriving(){
filteredSection.innerHTML=''
for(let thrive of interviewList){
    let div=document.createElement('div')
    div.className='my-10 border bg-white  rounded-[6px] flex justify-between gap-8 w-[1110px] mx-auto'
    div.innerHTML=`
    <div class="p-4 space-y-4">
        <h2 class=" company font-bold text-xl">${thrive.companyName}</h2>
        <p class="position">${thrive.position}</p>
        <p class="salary">${thrive.salary}</p>
        <button class=" type btn">${thrive.type}</button>
        <P class="description">${thrive.description}</P>
        <diV>
            <button id="mobile-first-corp-btn-interview" class=" btn btn-1 bg-white text-green-400">Interview</button>
            <button id="mobile-first-corp-btn-rejected" class=" btn btn-2 bg-white text-red-400">Reject</button>
        </diV>
    </div>
    <div>
         <img src="./delete-bin.svg" class="w-5 mt-4 mx-4 text-right">
    </div>
    `
    filteredSection.appendChild(div);
}
}
function renderrejected(){
filteredSection.innerHTML=''
for(let reject of rejectList){
    let div=document.createElement('div')
    div.className='my-10 border bg-white  rounded-[6px] flex justify-between gap-8 w-[1110px] mx-auto'
    div.innerHTML=`
    <div class="p-4 space-y-4">
        <h2 class=" company font-bold text-xl">${reject.companyName}</h2>
        <p class="position">${reject.position}</p>
        <p class="salary">${reject.salary}</p>
        <button class=" type btn">${reject.type}</button>
        <P class="description">${reject.description}</P>
        <diV>
            <button id="mobile-first-corp-btn-interview" class=" btn btn-1 bg-white text-green-400">Interview</button>
            <button id="mobile-first-corp-btn-rejected" class=" btn btn-2 bg-white text-red-400">Reject</button>
        </diV>
    </div>
    <div>
         <img src="./delete-bin.svg" class="w-5 mt-4 mx-4 text-right">
    </div>
    `
    filteredSection.appendChild(div);
}
}