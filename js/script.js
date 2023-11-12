
// my solution
// function hideModal(){
  
//     let closeButton= document.getElementById('btn-close');
    
//     closeButton.addEventListener('click',function (event){
//       let modalContainer=document.querySelector('.modal-container')
//      modalContainer.classList.remove("show");
//       modalContainer.classList.add('hide');
    

//     })
//   }
//   hideModal();

//   function showModal() {
//     let images = document.querySelectorAll('.modal-js');
//     images.forEach(function(image) {
//       image.addEventListener('click', function(event) {
//         let modalContainer = document.querySelector('.modal-container');
//         modalContainer.classList.remove("hide");
//         modalContainer.classList.add('show');
//       });
//     });
//   }
//   showModal();


const close_button= document.querySelectorAll("#btn-close");
const open_modal= document.querySelectorAll('.modal-js')
const modal_container= document.querySelectorAll('.modal-container');


for(let i=0;i<open_modal.length;i++){
  
  //event listenr for cards to show modal
open_modal[i].addEventListener('click',function(){
  modal_container[i].classList.remove('hide');
  modal_container[i].classList.add('show')
})

// event listener for close button to hide modals
close_button[i].addEventListener('click', function() {
  modal_container[i].classList.remove('show');
  modal_container[i].classList.add('hide');
})
}




