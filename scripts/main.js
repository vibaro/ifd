!function() {

    const lib = {
        elToggle: document.querySelector('.toggle-menu'),
        elMenu: document.querySelector('.menu'),

        init: function() {
            lib.events();
        },

        events: function() {
            lib.elToggle.addEventListener('click', lib.toggleMenu);
        },

        toggleMenu: function() {
            lib.elMenu.classList.toggle('open');
        }
    };

    lib.init();

} ();