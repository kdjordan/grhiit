import { motion, useCycle } from "framer-motion";
import { useRef } from "react";
import { MenuToggle } from "./MenuToggle";
import { useDimensions } from "./use-dimensions"
import { Navigation } from "./Navigation";

export default function Header({ logout }) {
    const [ isOpen, toggleOpen ] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);
    
    const sidebar = {
        open: (height = 1000) => ({
          clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
          transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
          }
        }),
        closed: {
          clipPath: "circle(30px at  340px 40px)",
          transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
          }
        }
      }

      function doLogout() {
        toggleOpen()
        logout()
      }
    
    
    return (
        <nav>
            <div className="absolute top-4 left-[30px] text-grwhite font-osPrimary hover:text-zinc-300 hover:no-underline text-5xl">
                <a className="no-underline" href="/">GRHIIT</a>
            </div>
            <motion.nav 
                className="absolute top-0 right-[400px] bottom-0 z-9"
                initial={false}
                animate={isOpen ? "open" : "closed"}
                style={{zIndex:9}}
                custom={height}
                ref={containerRef}
                >
                <motion.div className="absolute top-0 right-[-400px] bottom-0 w-[400px] bg-gradient-to-b from-grred to-grblack" variants={sidebar}>
                    {/* grhiit */}
                    <Navigation />
                    <MenuToggle toggle={() => toggleOpen()} />
                </motion.div>
            </motion.nav>
        </nav>
    )
  }
