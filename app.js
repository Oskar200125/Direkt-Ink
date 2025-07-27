/* Modal */
const modalBtn = document.querySelectorAll('[data-modal]');
const body = document.body;
const modalClose = document.querySelectorAll('.modal__close');
const modal = document.querySelectorAll('.modal');

modalBtn.forEach(item => {
    item.addEventListener('click', event => {
        let $this = event.currentTarget;
        let modalId = $this.getAttribute('data-modal');
        let modal = document.getElementById(modalId);
        let modalContent = modal.querySelector('.modal__content');

        modalContent.addEventListener('click', event => {
            event.stopPropagation();
        });

        setTimeout(function() {
            modalContent.style.transform = 'none';
            modalContent.style.opacity = '1';
        }, 200);

        modal.classList.add('show');
        body.classList.add('no-scroll');
    });
});

modalClose.forEach(item => {
    item.addEventListener('click', event => {
        let currentModal = event.currentTarget.closest('.modal');

        closeModal(currentModal);
    });
});

modal.forEach(item => {
    item.addEventListener('click', event => {
        let currentModal = event.currentTarget;

        closeModal(currentModal);
    });
});

function closeModal(currentModal) {
    let modalContent = currentModal.querySelector('.modal__content');
    modalContent.removeAttribute('style');

    setTimeout(() => {
        currentModal.classList.remove('show');
        body.classList.remove('no-scroll');
    }, 200);
}

/* Up */
const up = document.querySelector('#btnUp');
const team = document.querySelector('#team');

window.addEventListener('scroll', () => {
    const rect = team.getBoundingClientRect();
        if (rect.top <= window.innerHeight) {
            up.style.display = 'flex';
        } else {
            up.style.display = 'none';
        }
});

up.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* Subnav */
const hasSubnav = document.querySelector('#hasSubnav');
const subnav = document.querySelector('#subnav');

hasSubnav.addEventListener('click', () => {
    subnav.style.opacity = '1';
});

document.addEventListener('click', (e) => {
    if (!subnav.contains(e.target) && e.target !== hasSubnav) {
        subnav.style.opacity = '0';
    }
});

/* Burger */
const burger = document.getElementById('navToggle');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
})



