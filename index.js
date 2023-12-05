function showModal() {
    let modal = document.querySelector("#modali");
    modal.classList.add(`modal-active`);
}

function closeModal() {
    let modal = document.querySelector("#modali");
    modal.classList.remove(`modal-active`);
}

let openModal = document.querySelectorAll(".open-modali");
for (let open of openModal) {
    open.addEventListener(`click`, showModal);
}


    $("#entrar").click(() => {
        const logar = {
            email: $("#email")[0].value,
            senha: $("#senha")[0].value,
        }
        if (!logar.email) {
            alert("Usuário não informado!");
            email.classList.add(`invalid`);
            return;
        }
        $("#email").removeClass("invalid");

        if (!senha.value) {
            alert("Senha não informado!");
            senha.classList.add(`invalid`);
            return;
        }
        $("#senha").removeClass("invalid");
        console.log(logar);
        alert("Efetuando login!")
        
    })
