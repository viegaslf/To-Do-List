let listaTarefas = [];

window.onload = atualizarLista();

function numeros() {
numeroTarefas = listaTarefas.length;
const totalTarefas = document.getElementById("totalTarefas");

if (listaTarefas.length === 0) {
    totalTarefas.textContent = "Sem tarefas";
} else {
    totalTarefas.textContent = `Total de tarefas: ${numeroTarefas}`;
}
}

// function adicionarTarefa(tarefa, prioridade) {
//   listaTarefas.push({tarefa, prioridade});
//   atualizarLista();
// }

function removerTarefa(index) {
  listaTarefas.splice(index, 1);
  atualizarLista();
}

function atualizarLista() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  const tarefa = document.getElementById("novaTarefa").value;
  const prioridade = document.getElementById("prioridade").value;

  for (let i = 0; i < listaTarefas.length; i++) {
    const novaTarefa = document.createElement("li");

    const botaoConcluido = document.createElement("button");
    botaoConcluido.setAttribute("id", "concluido");

    const iconDone = document.createElement("img");
    iconDone.setAttribute("src", "img/check.svg");
    botaoConcluido.appendChild(iconDone);

    const prioridadeAdicionada = document.createElement("p");
    prioridadeAdicionada.setAttribute("id", "prioridadeEscolhida");

    const tarefaAdicionada = document.createElement("p");
    tarefaAdicionada.setAttribute("id", "tarefa");

    const botaoRemover = document.createElement("button");
    botaoRemover.setAttribute("id", "delete");
    const iconLixo = document.createElement("img");
    iconLixo.setAttribute("src", "img/delete.svg");

    botaoRemover.addEventListener("click", () => {
      removerTarefa(i);
    });

    botaoConcluido.addEventListener("click", () => {
      prioridadeAdicionada.classList.toggle("prioridadeDone");
      iconDone.classList.toggle("botaoDone");
      tarefaAdicionada.classList.toggle("tarefaDone");
      novaTarefa.classList.toggle("liDone");
    });

    

  // APPEND CHILDS

    prioridadeAdicionada.textContent = listaTarefas[i].prioridade;
    tarefaAdicionada.textContent = listaTarefas[i].tarefa;

    botaoRemover.appendChild(iconLixo);

    novaTarefa.appendChild(botaoConcluido);
    novaTarefa.appendChild(prioridadeAdicionada);
    novaTarefa.appendChild(tarefaAdicionada);
    novaTarefa.appendChild(botaoRemover);

    lista.appendChild(novaTarefa);
    
    prioridadeAdicionada.classList.add(listaTarefas[i].prioridade);

    
  }

  numeros()
}

function adicionarTarefa() {
  const tarefa = document.getElementById("novaTarefa").value;
  const prioridade = document.getElementById("prioridade").value;

  if (tarefa === "") {
    alert("Insira uma tarefa e carregue no Enter");
  } else if (tarefa, prioridade === "baixa") {
    listaTarefas.push({tarefa, prioridade});
    atualizarLista();
      document.getElementById("novaTarefa").value = ""; // Limpa o campo de entrada
  } else if (tarefa, prioridade === "media") {
    listaTarefas.push({tarefa, prioridade});
    atualizarLista();
      document.getElementById("novaTarefa").value = ""; // Limpa o campo de entrada
  } else if (tarefa, prioridade === "alta") {
    listaTarefas.unshift({tarefa, prioridade});
    atualizarLista();
      document.getElementById("novaTarefa").value = ""; // Limpa o campo de entrada
  }
}

document.getElementById('adicionar').addEventListener('click', () => {
  adicionarTarefa();
  });

document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      adicionarTarefa();
    }
  });

