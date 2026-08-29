// Lista de imóveis - edite/adicione aqui os seus imóveis
const imoveis = [
  {
    titulo: "Apartamento 2 quartos - Centro",
    descricao: "65m², 1 vaga de garagem, próximo ao metrô",
    preco: "R$ 320.000"
  },
  {
    titulo: "Casa 3 quartos - Bairro Jardim",
    descricao: "120m², quintal amplo, 2 vagas",
    preco: "R$ 550.000"
  },
  {
    titulo: "Cobertura Duplex - Zona Sul",
    descricao: "180m², vista para o parque, 3 suítes",
    preco: "R$ 890.000"
  }
];

// Renderiza os imóveis na página
function renderizarImoveis() {
  const lista = document.getElementById("lista-imoveis");
  lista.innerHTML = "";

  imoveis.forEach((imovel) => {
    const card = document.createElement("div");
    card.classList.add("card-imovel");
    card.innerHTML = `
      <h3>${imovel.titulo}</h3>
      <p>${imovel.descricao}</p>
      <p class="preco">${imovel.preco}</p>
    `;
    lista.appendChild(card);
  });
}

// Validação simples do formulário de contato
const form = document.getElementById("form-contato");
const feedback = document.getElementById("feedback-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (nome === "" || telefone === "" || mensagem === "") {
    feedback.style.color = "red";
    feedback.textContent = "Por favor, preencha todos os campos.";
    return;
  }

  feedback.style.color = "green";
  feedback.textContent = `Obrigado, ${nome}! Retornaremos o contato em breve.`;
  form.reset();
});

// Inicializa a página
renderizarImoveis();