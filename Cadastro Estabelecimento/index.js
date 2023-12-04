$(() => {

    $("#btn-cadastro-estabelecimento").click(() => {
        const values = {
            nomeEstabelecimento: $("#nome-estabelecimento")[0].value,
            cep: $("#cep")[0].value,
            rua: $("#rua")[0].value,            
            numero: $("#numero")[0].value,
            bairro: $("#bairro")[0].value,
            cidade: $("#cidade")[0].value,
            uf: $("#uf")[0].value,
            email: $("#email")[0].value,
            telefone: $("#telefone")[0].value,
            cnpj: $("#cnpj")[0].value,
            lotacaoMaxima: $("#lotacao")[0].value,
            numeroMesas: $("#numero-mesas")[0].value,
            
        }

        if (!values.nomeEstabelecimento) {
            alert("Nome do estabelecimento não informado!");
            $("#nome-estabelecimento").addClass("invalid");
            return;
        }
        $("#nome-estabelecimento").removeClass("invalid");

        if (!values.cep) {
            alert("CEP não informado!");
            $("#cep").addClass("invalid");
            return;
        }
        $("#cep").removeClass("invalid");

        if (!values.rua) {
            alert("Rua não informada!");
            $("#rua").addClass("invalid");
            return;
        }
        $("#rua").removeClass("invalid");

        if (!values.numero) {
            alert("Numero não informado!");
            $("#numero").addClass("invalid");
            return;
        }
        $("#numero").removeClass("invalid");

        if (!values.bairro) {
            alert("Bairro não informado!");
            $("#bairro").addClass("invalid");
            return;
        }
        $("#bairro").removeClass("invalid");

        if (!values.cidade) {
            alert("Cidade não informado!");
            $("#cidade").addClass("invalid");
            return;
        }
        $("#cidade").removeClass("invalid");

        if (!values.uf) {
            alert("UF não informado!");
            $("#uf").addClass("invalid");
            return;
        }
        $("#uf").removeClass("invalid");

        if (!values.email) {
            alert("E-mail não informado!");
            $("#email").addClass("invalid");
            return;
        }
        $("#email").removeClass("invalid");

        if (!values.telefone) {
            alert("Telefone não informado!");
            $("#telefone").addClass("invalid");
            return;
        }
        $("#telefone").removeClass("invalid");

        if (!values.lotacaoMaxima) {
            alert("Lotação Maxima não informada!");
            $("#lotacao").addClass("invalid");
            return;
        }
        $("#lotacao").removeClass("invalid");

        if (!values.numeroMesas) {
            alert("Numero de mesas não informado!");
            $("#numero-mesas").addClass("invalid");
            return;
        }
        $("#numero-mesas").removeClass("invalid");

        console.log(values);
        alert("Cadastro Realizado")
    })


})
