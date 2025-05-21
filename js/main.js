$(document).ready(function(){
    $('#tel').mask(' (00) 00000-0000');
    
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required:true,
                email: true
            },
            tel: {
                required: true
            }
        },

        messages: {
            nome: 'Por favor, preencha o seu nome'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Exitem ${camposIncorretos} campos incorretos!`)
            } 
        }
    })
})

const checkbox = document.getElementById('aceito-termos');
    const botao = document.getElementById('btnCadastrar');

    checkbox.addEventListener('change', function () {
      botao.disabled = !this.checked;
    });