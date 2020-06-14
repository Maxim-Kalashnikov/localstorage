'use strict';

const checkbox = document.querySelector('#checkbox'),
      form = document.querySelector('.wrapper'),
      change = document.querySelector('#color'),
      input = document.querySelector('.form-control'),
      btn = document.querySelector('.btn');


      if(localStorage.getItem('isChecked')){
          checkbox.checked = true;
      }
      
      if(localStorage.getItem('bg')==='changed'){
        form.style.backgroundColor = 'rgba(118, 188, 235, 0.808)';
          }

          

      checkbox.addEventListener('changed', ()=>{
          localStorage.setItem('isChecked', true);
      });
 

      change.addEventListener('click', ()=>{
         if(localStorage.getItem('bg') === 'changed'){
                localStorage.removeItem('bg');
                form.style.backgroundColor = '';
         } else{
             localStorage.setItem('bg','changed');
             form.style.backgroundColor = 'rgba(118, 188, 235, 0.808)';
                }
              });

      btn.addEventListener('click',function(){
        let name1 = input.value;
        let persen = {name:name1}
        let namePersen = JSON.stringify(persen.name);
       localStorage.setItem('person',namePersen);
        
      })
      let parser = JSON.parse(localStorage.getItem('person'));
        console.log(parser)
      

