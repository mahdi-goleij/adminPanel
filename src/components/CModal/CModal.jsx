import { useRef } from "react";
import "./CModal.css";
import { useEffect } from "react";

export const CModal = ({children,visible, setVisible}) => {

  const refModal = useRef();
  const refModalCont = useRef();

  const handleClick = (e) => {
    if (refModal.current?.contains(e.target) && !refModalCont.current?.contains(e.target)) {
      setVisible(false)
    }
  }


  useEffect(()=>{
    window.addEventListener('mousedown', handleClick)

    return ()=> window.removeEventListener('mousedown' , handleClick)
  },[])

  return (
    <>
      <div ref={refModal} className={`cmodal ${visible && 'cmodal-active'}`}>
        <div ref={refModalCont} className="cmodal-cont">
          {children}
        </div>
      </div>
    </>
  );
};
