function selectorOnClick() {
  function getCheckedValue(name) {
    var radios = document.getElementsByName(name);
    console.log(radios);
    for (i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        return {
          price: radios[i].value,
          name: radios[i].name,
          id: radios[i].id,
        };
      }
    }
    return null;
  }

  const hasSelectedAll =
    getCheckedValue("prato") &&
    getCheckedValue("bebida") &&
    getCheckedValue("sobremesa");
  if (hasSelectedAll) {
    const fecharPedidoBotao = document.getElementById("fechar-pedido");
    fecharPedidoBotao.style.background = "#32b72f";
    fecharPedidoBotao.innerText = "Fechar pedido";
  }
}

function buttonConferirPedido() {
  function getCheckedValue(name) {
    var radios = document.getElementsByName(name);
    console.log(radios);
    for (i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        return {
          price: radios[i].value,
          name: radios[i].name,
          id: radios[i].id,
        };
      }
    }
    return null;
  }

  const prato = getCheckedValue("prato");
  const bebida = getCheckedValue("bebida");
  const sobremesa = getCheckedValue("sobremesa");
  const soma =
    parseFloat(prato.price) +
    parseFloat(bebida.price) +
    parseFloat(sobremesa.price);

  const msg = `Olá, gostaria de fazer o pedido: \n - Prato: ${
    prato.id
  } \n - Bebida: ${bebida.id} \n - Sobremesa: ${
    sobremesa.id
  }  \n Total: R$ ${soma.toFixed(2)}`;

  window.open(
    `https://wa.me/5548998093918?text=${encodeURIComponent(msg)}`,
    "_blank"
  );
}
