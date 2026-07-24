import i18next from "i18next";
import { useLayoutStore } from "../store/LayoutStore";

export const useLang = () => {

    const {setLang} = useLayoutStore()


    const handaleLange = (item) => {
        setLang(item.symbol)
        i18next.changeLanguage(item.symbol)
        localStorage.setItem('lang' , item.symbol)
        // document.documentElement.dir = item.direction;
      }
      return{handaleLange}
}