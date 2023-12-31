import { motion } from "framer-motion";

import { styles } from "../styles";

const Wrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section 
        id={idName}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`max-w-7xl mx-auto w-[92%] relative z-0`}
      >
        <Component/>
      </motion.section>
    );
  };

export default Wrapper;