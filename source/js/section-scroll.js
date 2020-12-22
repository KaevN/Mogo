document.body.addEventListener('click', (e) => {
    const target = event.target;

    if (target.hasAttribute('data-path')) {
        event.preventDefault();
        
        const path = target.getAttribute('data-path');

        document.querySelector(`[data-section="${path}"]`).scrollIntoView({block: "start", behavior: "smooth"});

        headerEl.classList.remove('open');
    }

    else {

    }
});