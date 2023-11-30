$(() => {

    $("#btn-cadastro-usuario").click(() => {
        const values = {
            nome: $("#nome")[0].value,
            sobrenome: $("#sobrenome")[0].value,
            cpf: $("#cpf")[0].value,
            email: $("#email")[0].value,
            cep: $("#cep")[0].value,
            endereco: $("#endereco")[0].value,
            bairro: $("#bairro")[0].value,
            cidade: $("#cidade")[0].value,
            uf: $("#uf")[0].value,
            telefone: $("#telefone")[0].value,
        }

        if (!values.nome) {
            alert("Nome não informado!");
            $("#nome").addClass("invalid");
            return;
        }
        $("#nome").removeClass("invalid");

        if (!values.sobrenome) {
            alert("Sobrenome não informado!");
            $("#sobrenome").addClass("invalid");
            return;
        }
        $("#sobrenome").removeClass("invalid");

        if (!values.cpf) {
            alert("CPF não informado!");
            $("#cpf").addClass("invalid");
            return;
        }
        $("#cpf").removeClass("invalid");

        if (!values.email) {
            alert("E-mail não informado!");
            $("#email").addClass("invalid");
            return;
        }
        $("#email").removeClass("invalid");

        if (!values.cep) {
            alert("CEP não informado!");
            $("#cep").addClass("invalid");
            return;
        }
        $("#cep").removeClass("invalid");

        if (!values.endereco) {
            alert("Endereco não informado!");
            $("#endereco").addClass("invalid");
            return;
        }
        $("#endereco").removeClass("invalid");

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

        if (!values.telefone) {
            alert("Telefone não informado!");
            $("#telefone").addClass("invalid");
            return;
        }
        $("#telefone").removeClass("invalid");

        console.log(values);
    })


})
