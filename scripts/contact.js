!function() {

    const contact = {
        init: function() {
            contact.events();
        },

        events: function() {
            $('form').delegate('#enviar', 'click', contact.sendMail);
        },

        sendMail: function() {
            var data = {
                nome: $.trim($('#nome').val()),
                email: $.trim($('#email').val()),
                mensagem: $.trim($('#mensagem').val())
            };

            if (data.nome && data.email && data.mensagem) {
                $.post('../mail/send.php', data, function() {
                    alert('E-mail enviado! Aguarde nosso contato.');
                });
            }
        }
    };

    contact.init();

} ();