import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
}

export const MenuItem = ({ name, path }) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="mb-[20px] flex align-center justify-center cursor-pointer"
    >
      <div className="w-2/3 text-center text-zinc-300 text-2xl border border-zinc-300 shadow-xl py-2">
        <a href={path}>{name}</a>
      </div>
    </motion.li>
  );
};
