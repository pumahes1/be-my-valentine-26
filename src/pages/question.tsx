import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import cupon from "../assets/cupon.svg";
import cupon2 from "../assets/cupon2.svg";
import { motion } from "framer-motion";
import "./question.css";

function Question() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeDown = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <body className="flowers-background">
      <motion.div
        className="newspaper-container"
        initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <header className="newspaper-header">
          <motion.h1
            className="newspaper-title"
            variants={fadeDown}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            MUNDO DE LOS MORCHIS
          </motion.h1>
          <motion.div
            className="edition-info"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 0.4 }}
          >
            <p>Edición San Valentín</p>
            <p>Juntos por siempre</p>
            <p>Febrero 13, 2026</p>
          </motion.div>
        </header>
        <div className="newspaper-body">
          <div className="newspaper-text">
            <motion.p
              className="headline"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.1, delay: 0.7 }}
            >
              Will you be my <span>Valentine?</span>
            </motion.p>
            <motion.p
              className="highlight"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, delay: 0.9 }}
            >
              Distribución exclusiva para la persona más especial.
            </motion.p>
            <motion.p
              className="highlight"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, delay: 0.9 }}
            >
              Sofía, la más bella de las estrellas.
            </motion.p>
          </div>

          <motion.div
            className="article"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="article-text"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <p>
                Después de que el mundo hiciera su magia y cruzara nuestros
                caminos, hay algo que tengo completamente claro: quiero vivir
                todos mis 14 de febrero a tu lado.
              </p>
              <p>
                Mi corazón lo supo desde la primera vez que te vi. Hoy solo
                quiero disfrutar este San Valentín contigo, rodeados de amor,
                risas sinceras y momentos que queden grabados para siempre.
              </p>
            </motion.div>
            <motion.div
              className="article-photos"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            >
              <img src={img1} alt="" />
              <img src={img2} alt="" />
              <img src={img3} alt="" />
            </motion.div>
          </motion.div>
        </div>

        <div className="newspaper-footer">
          <motion.img
            src={cupon}
            alt="Cupón especial"
            className="coupon-image"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1 }}
          />
          <motion.img
            src={cupon2}
            alt="Cupón especial"
            className="coupon-image"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1 }}
          />
        </div>
      </motion.div>

      <div className="newspaper-container">
        <header className="newspaper-header">
          <motion.div
            className="edition-info"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 0.4 }}
          >
            <p>Edición San Valentín</p>
            <p>Juntos por siempre</p>
            <p>Febrero 13, 2026</p>
          </motion.div>
        </header>
        <div className="newspaper-body">
          <h2 className="reasons-title">
            <span>
              05 Razones <br /> por las que eres
            </span>
            <span className="highlight-title">Mi elección perfecta:</span>
          </h2>
          <div className="reasons-grid">
            <div className="reason">
              1. Tienes la sonrisa más linda del universo.
            </div>
            <div className="reason">💖</div>
            <div className="reason">
              2. Tu paciencia conmigo es un regalo que nunca dejaré de
              agradecer.
            </div>
            <div className="reason">S</div>
            <div className="reason">
              3. Mi corazón salta de alegría cada vez que estoy contigo
            </div>
            <div className="reason">M</div>
            <div className="reason">
              4. Eres mi persona favorita en este mundo y en todos los que
              existan.
            </div>
            <div className="reason">💖</div>
            <div className="reason">
              5. No imagino mi vida sin ti. Conti todo tiene sentido.
            </div>
          </div>
          <p className="final-message">
            Te amo, mi amor. <br />
            Cinco razones me quedan cortísimas para todo lo que significas para
            mi. <br /> Pero quiero que sepas algo... <br />
            <span className="highlight2">siempre serás mi eleccion.</span>
          </p>
        </div>
      </div>

      <div className="valentine-container">
        <header className="newspaper-header">
          <motion.div
            className="edition-info"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 0.4 }}
          >
            <p>Edición San Valentín</p>
            <p>Juntos por siempre</p>
            <p>Febrero 13, 2026</p>
          </motion.div>
        </header>
        <div className="valentine-content">
          Después de analizar los hechos, recopilar cada momento y confirmar la
          química innegable entre nosotros… <br />
          Con el corazón en la mano y una sonrisa nerviosa, <br />
          quiero hacerte la gran pregunta… <br />
          <br />
          <span className="big-question">
            ¿Quieres ser mi <br />
            San Valentín?
          </span>
        </div>
      </div>
    </body>
  );
}

export default Question;
