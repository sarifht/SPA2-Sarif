import { useContext } from "react"
import LocaleContext from "../contexts/LocaleContext"
import stringData from "../utils/string-data"

const useLanguage = (page) => {
    const { locale } = useContext(LocaleContext)

    return stringData[`${page}Page`][locale]
} 

export default useLanguage;

// by: Sarif Hidayatullah