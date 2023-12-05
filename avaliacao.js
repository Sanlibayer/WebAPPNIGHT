$(() => {
  let selecionado = 0;

  $(".estrelaa").click((e) => {
    selecionado = $(e.currentTarget).data('number');
    $(".estrelaa").each((i, el) => {      
      if ($(el).data('number') <= selecionado) {
        $(el).addClass('selected');
      } else {
        $(el).removeClass('selected');
      }
    })

  })


  $("#btn-enviar").click(() => {
    const avaliacao = {
      nota : selecionado,
      opiniao: $("#opiniao")[0].value

    }
    if (!avaliacao.nota) {
      alert("Nota não informada!");
      return;
  }

  console.log(avaliacao);
  alert("Nota enviada!")
  })

})