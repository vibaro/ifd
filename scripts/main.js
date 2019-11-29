!function() {

    const lib = {
        init: function() {
            lib.events();
        },

        events: function() {
            document.querySelector('.toggle-menu').addEventListener('click', lib.toggleMenu);
        },

        toggleMenu: function() {

        }
    };

    lib.init();

} ();