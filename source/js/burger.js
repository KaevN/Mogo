const headerEl = document.querySelector('.js-header');

headerEl.addEventListener('click', function() {

    const target = event.target;

    if (target.classList.contains('js-burger-btn')) {
        headerEl.classList.toggle('open')
    };

    if (target.hasAttribute('aria-expanded')) {
        const ariaValue = target.getAttribute('aria-expanded');

        if (ariaValue == 'true') {
            target.setAttribute('aria-expanded', 'false');
            target.setAttribute('aria-label', 'menu');
        } else {
            target.setAttribute('aria-expanded', 'true');
            target.setAttribute('aria-label',  'close menu');
        }
    }
   
});