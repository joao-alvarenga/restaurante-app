import React from "react";
import OrdemForm from "./OrdemForm";

const Ordem = () => {
  return (
    <section className="ordem__form" id="pedido">
      <div className="ordem__form__wrap">
        <div className="ordem__form__title">
          <h2 className="ordem__title__content">menu</h2>
        </div>
        <div className="ordem__md">
          <OrdemForm />
        </div>
      </div>
    </section>
  );
};

export default Ordem;
