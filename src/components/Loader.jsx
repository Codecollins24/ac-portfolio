import { motion } from "framer-motion";
import "./Loader.css";

const letters = ["A", "C"];

export default function Loader() {
  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="loader-mark">
        {letters.map((letter, index) => (
          <motion.span
            key={letter}
            className="loader-letter"
            initial={{ opacity: 0, y: 24, scale: 0.7 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {letter}
          </motion.span>
        ))}
        <motion.span
          className="loader-ring"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </motion.div>
  );
}
