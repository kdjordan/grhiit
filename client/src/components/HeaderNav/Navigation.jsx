import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = () => (
  <motion.ul variants={variants} className="p-[25px] absolute top-[100px] width-[250px]">
    {items.map((it, i) => (
      <MenuItem i={it} key={i} />
    ))}
  </motion.ul>
);

const items = ['LOGIN', 'LOGOUT'];
