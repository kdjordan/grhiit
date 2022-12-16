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
<>
{/* <div className="text-grwhite font-osPrimary hover:text-grgrey hover:no-underline text-3xl">
    <a className="no-underline tracking-widest" href="/">GRHIIT</a>
</div> */}
  <motion.ul variants={variants} className="p-[25px] mb-[20px] flex align-center cursor-pointer">
    {itemIds.map(i => (
      <MenuItem i={i} key={i} />
    ))}
  </motion.ul>
</>
);

const itemIds = [0, 1, 2, 3, 4];
