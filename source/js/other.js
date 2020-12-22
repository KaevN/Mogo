window.addEventListener('scroll', (e) => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 700) {
       document.querySelector('.up_button').classList.add('visible');
    }

    else {
        document.querySelector('.up_button').classList.remove('visible');
    }
});

document.body.addEventListener('click', () => {
    const target = event.target;

    if ((target.classList.contains('js-search-btn')) || (target.classList.contains('js-search-area'))) {
        event.preventDefault();
        
        document.querySelector('.js-search-area').classList.add('search_open');
    }

    else {
        document.querySelector('.js-search-area').classList.remove('search_open');
        document.querySelector('.js-search-area').value = "";
    }
});