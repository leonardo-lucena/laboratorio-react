import { useState, createContext, useEffect } from "react";

export const AppContext = createContext({});

export const AppContextProvider = (props) => {
  const { children } = props;

  const [criador, setCriador] = useState("Leonardo Bandeira");
  const [nextId, setNextId] = useState(1);

  const [tarefas, setTarefas] = useState([]);

  const carregarTarefas = async () => {
    const { data = [] } = awit api.get('/tarefas')

    setTarefas([
      ...data
    ])
  };

  const adicionarTarefa = (nomeTarefa) => {
    setTarefas((listaOld) => {
      const tarefa = {
        id: nextId,
        nome: nomeTarefa + " - " + nextId,
      };

      setNextId(nextId + 1);

      return [...listaOld, tarefa];
    });
  };

  const editarTarefa = (id, nomeTarefa) => {
    setTarefas((estadoAtual) => {
      const tarefasAtualizadas = estadoAtual.map((item) => {
        return item.id === id
          ? {
              ...item,
              nome: nomeTarefa,
            }
          : item;
      });

      return tarefasAtualizadas;
    });
  };

  const removerTarefa = (id) => {
    setTarefas((estadoAtual) => {
      const listaAtualizada = estadoAtual.filter((tarefa) => tarefa.id !== id);

      return [...listaAtualizada];
    });
  };

  useEffect(() => {
    carregarTarefas()
  })

  return (
    <AppContext.Provider
      value={{ criador, tarefas, adicionarTarefa, editarTarefa, removerTarefa }}
    >
      {children}
    </AppContext.Provider>
  );
};
