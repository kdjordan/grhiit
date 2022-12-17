import { LayoutGroupContext, motion } from "framer-motion";
import { useContext } from 'react';
import UserContext from "../../UserContext";
import { useNavigate } from "react-router-dom";

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



export const MenuItem = ({ name, path, toggle }) => {
  const { logout  } = useContext(UserContext)
  const navigate = useNavigate()

  function handleClick(e) {
    console.log('got ', e.target.id)
    toggle()
    switch (e.target.id) {
      case('LOGOUT'):
        logout()
        navigate('/')
        break;
      case('CREATE'):
        navigate('/create')
        break;
      case('DASHBOARD'):
        navigate('/dashboard')
        break;
      case('LOGIN'):
        navigate('/login')
        break;
      case('SIGNUP'):
        navigate('/signup')
        break;
    }
    
  }

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="mb-[20px] flex align-center justify-center cursor-pointer font-osPrimary tracking-wider"
    >
      <div onClick={handleClick} className="w-2/3 text-center text-zinc-300 text-2xl border border-zinc-300 shadow-xl py-2">
          <span id={name}>{name}</span>
          {/* <a href={path} onClick={toggle}>{name}</a> */}
      </div>
    </motion.li>
  );
};
