







function iniciaModal(modalID) {
    $("body").css({
        bottom:"0",
        overflow: "hidden"
    })
    const modal = document.getElementById(modalID);
      if(modal) {
        modal.classList.add('mostrar');
        $(".modal-container").css({
          background: "rgb(0, 0, 0,0.9)"
      });
               
        modal.addEventListener('click', (e) => {
          if(e.target.id == modalID || e.target.className == 'fechar') {
            modal.classList.add('fecharanimation')
                          modal.classList.remove('mostrar')
                          $(".modal-container").css({
                            background: "rgb(0, 0, 0,0.0)"
                        });
  
            let timer = setInterval(myTimer, 400)
            function myTimer(){
              modal.classList.remove('fecharanimation')
              $("html,body").css({"overflow":"auto"});
              clearInterval(timer)	
            }
          }
        })
      }
            
    }
  
  
  
  const modal_1 = document.querySelector('.button-1');
  modal_1.addEventListener('click', () => iniciaModal('modal-1'));
  
  
  const modal_2 = document.querySelector('.button-2');
  modal_2.addEventListener('click', () => iniciaModal('modal-2'));
  
  
  
  const modal_3 = document.querySelector('.button-3');
  modal_3.addEventListener('click', () => iniciaModal('modal-3'));
  
  
  
  const modal_4 = document.querySelector('.button-4');
  modal_4.addEventListener('click', () => iniciaModal('modal-4'));
  
  
  
  const modal_5 = document.querySelector('.button-5');
  modal_5.addEventListener('click', () => iniciaModal('modal-5'));
  
  
  const modal_6 = document.querySelector('.button-6');
  modal_6.addEventListener('click', () => iniciaModal('modal-6'));
  
  
  
  const modal_7 = document.querySelector('.button-7');
  modal_7.addEventListener('click', () => iniciaModal('modal-7'));
  
 
  
  