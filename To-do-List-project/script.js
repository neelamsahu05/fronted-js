const inputbox=document.querySelector('#input-box');
const button=document.querySelector('button');
const listContainer=document.querySelector('.list-container');
     function addTask(){
   if( inputbox.value === ''){
    alert('enter somthing you want inside');
   }
   else{
      const li=document.createElement('li');
      li.innerHTML=inputbox.value;
      listContainer.appendChild(li);
      const span=document.createElement('span');
      span.innerHTML="\u00d7";
      li.appendChild(span);

   }
   inputbox.value='';
   savedata();
}
      button.addEventListener('click',()=>{
        addList();
      })
   // button.onclick=addList();

     listContainer.addEventListener('click',(e)=>{
        if(e.target.tagName==='LI'){
            e.target.classList.toggle('checked');
        }else if(e.target.tagName === 'SPAN')
            {
                 e.target.parentElement.remove();
        }

     },false)

     function savedata(){
       localStorage.setItem('data',listContainer.innerHTML);

     }
     function showTask(){
      listContainer.innerHTML= localStorage.getItem('data');

     }
showTask();