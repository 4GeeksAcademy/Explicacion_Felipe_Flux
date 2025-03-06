import { Link, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useState } from "react";

export const Home = () => {
  const navigate = useNavigate();
  const { store, dispatch } = useGlobalReducer();
  const [loading, setLoading] = useState(true);

  const fetchTodos = async () => {
    try {
      const response = await fetch("URL_API");

      if (!response.ok) {
        throw new Error("No se han obtenido las tareas");
      }

      const data = await response.json();
      dispatch({
        type: "set_todos",
        payload: data.todos,
      });

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="text-center mt-5">
      <h1>Hello Rigo!!</h1>
      <button
        onClick={() => navigate("/ejemplo")}
        className="btn btn-success me-4"
      >
        Ir el page ejemplo
      </button>
      <Link to={"/ejemplo"}> Ir al page ejemplo</Link>
      <br />
      <h4>Esto es el valor del contador: {store.contador}</h4>
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
				<button className="btn btn-danger" onClick={() => navigate(`/rutad/${store.contador}`)}> Ir a ruta dinámica</button>
    </div>
  );
};
