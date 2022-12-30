/**
 * PARENT COMPONENT : Navigation.jsx 
 * PROPS : toggle -> passes the click up to the parent to switch state open or !open
 * name -> derived from the items in Navigation which are the links that are to be displayed / used to route the click on menu item 
 * 
 * RETURNS -> the links within the menu when open
*/
 
import { motion } from "framer-motion";
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



export const MenuItem = ({ name, toggle }) => {
  const { logout  } = useContext(UserContext)
  const navigate = useNavigate()

  function handleClick(e) {
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
      <div onClick={handleClick} id={name} className="w-2/3 text-center text-zinc-300 text-2xl border border-zinc-300 shadow-xl py-2">
          <span id={name}>{name}</span>
      </div>
    </motion.li>
  );
};
