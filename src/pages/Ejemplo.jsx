import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

function Ejemplo() {
  const { store, dispatch } = useGlobalReducer();

  return (
    <div>
      <h4>
        Este es el valor de contador: {store.contador}. Pero desde el page
        ejemplo
      </h4>
      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch({
            type: "sum_1",
          });
        }}
      >
        Sumar 1
      </button>
    </div>
  );
}

export default Ejemplo;
