import { useEffect, useRef } from "react";
import heaven from "./assets/heaven.mp3";
import { Routes, Route, Link } from "react-router-dom";
import letter from "./assets/letter.png";
import heart from "./assets/heart.png";
import Question from "./pages/question";
import "./App.css";

function App() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio(heaven);
    audio.loop = true;
    audio.volume = 0.35; // volumen suave romántico
    audioRef.current = audio;

    const startMusic = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {});
      }

      // 🔥 Muy importante: remover el evento después del primer click
      window.removeEventListener("click", startMusic);
    };

    // Escucha cualquier click en la pantalla
    window.addEventListener("click", startMusic);

    return () => {
      window.removeEventListener("click", startMusic);
    };
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <body className="flowers-background center-flex">
            <div className="letter-container">
              <img src={letter} className="letter-image" alt="Carta de amor" />\
              <div className="letter-text">
                <p>Te tengo una sorpresa.</p>
                <p>Para descubrirla da click sobre el corazón.</p>
              </div>
              <Link to="/question" className="heart-link">
                <img src={heart} className="heart-image" alt="Abrir carta" />
              </Link>
              <div className="from-text">
                <p>De: Mauricio</p>
              </div>
              <div className="to-text">
                <p>Para: Sofía</p>
              </div>
            </div>
          </body>
        }
      />

      <Route path="/question" element={<Question />} />
    </Routes>
  );
}

export default App;
