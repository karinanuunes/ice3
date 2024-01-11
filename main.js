const catalogo = document.getElementById("catalogo");
const ordem = document.getElementById("ordem");
const about = document.getElementById("about");
const tabela = document.getElementById("tabela");

function abrirSobre() {
  catalogo.style.display = "none";
  ordem.style.display = "none";
  tabela.style.display = "none";

  about.style.display = "flex";
}

function abrirTabela() {
  catalogo.style.display = "none";
  ordem.style.display = "none";
  about.style.display = "none";

  tabela.style.display = "flex";
}
