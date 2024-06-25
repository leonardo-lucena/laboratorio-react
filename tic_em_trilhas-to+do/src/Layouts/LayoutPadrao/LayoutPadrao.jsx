import { Outlet } from "react-router-dom";
import { Cabecalho, Conteudo, Rodape } from "../../components";

const LayoutPadrao = () => {
  return (
    <>
      <Cabecalho/>
      <Conteudo>
        <Outlet />
      </Conteudo>
      <Rodape criador="Leonardo Bandeira" />
    </>
  );
};

export { LayoutPadrao };
