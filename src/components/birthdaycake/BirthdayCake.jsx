import { motion } from "framer-motion";

const BirthdayCake = () => {
  return (
    <motion.div
      animate={{
        y: [0, -15, 0]
      }}
      transition={{
        repeat: Infinity,
        duration: 2
      }}
      className="cake"
    >
      🎂
    </motion.div>
  );
};

export default BirthdayCake;