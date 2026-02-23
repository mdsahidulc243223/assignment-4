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
}
document.addEventListener('click',function(event){
    console.log(event.target.classList.contains('btn-1'));
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
 renderTriving();}
});
function renderTriving(){
filteredSection.innerHTML=''
for(let thrive of interviewList){
    console.log(thrive);
    let div=document.createElement('div')
    div.className='my-10 border bg-white  rounded-[6px] flex justify-between gap-8 w-[1110px] mx-auto'
    div.innerHTML=`
    <div class="p-4 space-y-4">
        <h2 class=" company font-bold text-xl">${Interview.company}</h2>
        <p class="position">React Native Developer</p>
        <p class="salary">Remote • Full-time • $130,000 - $175,000</p>
        <button class=" type btn">Not Applied</button>
        <P class="description">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</P>
        <diV>
            <button id="mobile-first-corp-btn-interview" class="btn-1 bg-white text-green-400">Interview</button>
            <button id="mobile-first-corp-btn-rejected" class="btn-2 bg-white text-red-400">Reject</button>
        </diV>
    </div>
    <div>
         <img src="./delete-bin.svg" class="w-5 mt-4 mx-4 text-right">
    </div>
    `
    filteredSection.appendChild(div);
}
}