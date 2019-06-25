//**This function creates my DOM Element & stores my student list, showing at least 10 students on a page */

const studentList = document.querySelectorAll('li.student-item');
const studentsOnPage=10;


//** This function creates my showPage */
const showPage = (studentList,pageNumber) => {
   let startIndex = pageNumber * studentsOnPage - studentsOnPage;
   let endIndex = pageNumber * studentsOnPage;
   for(let i = 0; i < studentList.length; i++) {
      if(i >= startIndex && i < endIndex){
         studentList[i].style.display = 'block';
      } else {
         studentList[i].style.display = 'none';
      }
   }
};
showPage(studentList, 1);


//**This function creates my appendPageLinks */

const appendPageLinks = (studentList) => {
   const numberOfPages= Math.ceil(studentList.length / studentsOnPage);

   let div = document.createElement('div');hhh
   div.setAttribute('class','pagination');
   document.querySelector('div.page').appendChild(div);
   let ul = document.createElement('ul');
   div.appendChild(ul); 

   for(let i = 1; i <= numberOfPages; i++) {
      let li = document.createElement('li');
      let a= document.createElement('a');
      a.setAttribute('href','#');
      a.textContent = i;
      li.appendChild(a);
      ul.appendChild(li);
//**adds the click when transitioning into the next page */
      a.addEventListener('click', (event) => {
         let a=document.querySelectorAll('.pagination li a');
         
         for(let j = 0; j < a.length; j++) {
            a[j].className = '';
         }
         event.target.className = 'active';
         showPage(studentList, event.target.textContent);
      }); 
   }
   ul.firstChild.className = 'active';
}


showPage(studentList, 1);
appendPageLinks(studentList);
