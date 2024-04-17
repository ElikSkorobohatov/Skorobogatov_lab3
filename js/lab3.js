    let bord = document.querySelector('.bord');
    let overlay = document.querySelector('.overlay');
    let open = document.querySelector('.but');
    let close = document.querySelector('.close');
  
    open.addEventListener('click', function() {
      overlay.classList.add('active');
      bord.classList.add('active');

    })
  
    close.addEventListener('click', function() {
      overlay.classList.remove('active');
      bord.classList.remove('active');

    })
  
