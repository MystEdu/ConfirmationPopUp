import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Room = () => {

  const navigate = useNavigate();

  function leaveRoom() {
    if (!confirm('¿Realmente quieres salir?')) return;

    // Aquí va la que se procesa al salir de la página
    navigate("/");
  }

  // Usar confirmación al salir de la página
  useEffect(() => {
    const unloadCallback = (event) => {
      event.preventDefault();
      event.returnValue = "";
      return "";
    };
    
    window.addEventListener("beforeunload", unloadCallback);
    return () => {
      window.removeEventListener("beforeunload", unloadCallback);
    }
  }, []);

  return (
    <>
      <h1>Esta página necesita procesar información antes de salir</h1>
      <button onClick={leaveRoom}>Salir</button>
    </>
  )
}

export default Room;