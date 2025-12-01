import './App.css'

import Translator from "./Components/Translator.jsx"
import { useReducer } from "react"
import TranslationReducer from "./reducers/TranslationReducer.js"
import TranslatorContext from "./Contexts/TranslatorContext.js"
import TranslateDispatchContext from "./Contexts/TranslateDispatchContext.js"
function App() {

  const [list, dispatch] = useReducer(TranslationReducer, [{ fromLangText: "", toLangText: "" }]);


  return (
    <>
      <TranslatorContext.Provider value={{ list }}>
        <TranslateDispatchContext.Provider value={{ dispatch }}>
          <Translator />
        </TranslateDispatchContext.Provider>
      </TranslatorContext.Provider>

    </>
  )


}

export default App
