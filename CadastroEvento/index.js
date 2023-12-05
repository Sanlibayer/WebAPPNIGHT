$(() => {
    $("#btn-criar-evento").click(() => {
        const eventos = {
            nome: $("#nome-evento-input")[0].value,
            data: $("#data-evento-input")[0].value,
            descricao: $("#descricao-evento-input")[0].value,
        }
        if (!eventos.nome) {
            alert("Nome do evento não informado!");
            $("#nome-evento-input").addClass("invalid");
            return;
        }
        $("#nome-evento-input").removeClass("invalid");

        if (!eventos.data) {
            alert("Data do evento não informado!");
            $("#data-evento-input").addClass("invalid");
            return;
        }

        $("#data-evento-input").removeClass("invalid");

        if (!eventos.descricao) {
            alert("Informe alguma descrição para o evento!");
            $("#descricao-evento-input").addClass("invalid");
            return;
        }
        
        $("#descricao-evento-input").removeClass("invalid");

        console.log(eventos);
        alert("Evento cadastrado!")
    })
})


