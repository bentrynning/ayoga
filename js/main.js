import state from './state';

(function () {
    const init = () => {
        const body = document.getElementsByTagName('body')[0];
        const menu = document.getElementsByClassName('js-hamburger')[0];

        menu.addEventListener('click', () => {
            state.isActive = !state.isActive;
            if (state.isActive) {
                body.classList.add('nav-active');
                menu.classList.add('is-active')
            } else {
                menu.classList.remove('is-active');
                body.classList.remove('nav-active');
            }
        });

    };
    
    document.onreadystatechange = () => {
        if (document.readyState === 'complete') {
            init();
        }
    };
})();