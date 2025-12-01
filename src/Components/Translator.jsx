import { useContext, useState, useEffect } from 'react'
import TranslateDispatchContext from "../Contexts/TranslateDispatchContext.js"
import TranslatorContext from "../Contexts/TranslatorContext.js"
import run from "../Helpers/Fetcher.js"
import React from "react"
import LanguageFromDropdown from "./LanguageFromDropdown.jsx"
import LanguageToDropdown from "./LanguageToDropdown.jsx"
function Translator() {

    const { dispatch } = useContext(TranslateDispatchContext);
    const { list } = useContext(TranslatorContext);
    const [Edittext, setEditText] = useState("");
    const [translation, setTranslation] = useState("");
    const [fromLang, setFromLang] = useState("en");
    const [toLang, setToLang] = useState("en");



    async function TranslateNow() {
        const output = await run(Edittext, fromLang, toLang);
        if (Edittext != "") {
            dispatch({ type: "translate", payload: { text: Edittext, translation: output } });
        }
        else {
            alert("Please enter text to translate");
        }
        setTranslation(output);
    }

    useEffect(() => {
        console.log(list);
    }, [list]);

    return (
        <div className="translator-container">
            <div className='toTranslateField'>
                <LanguageFromDropdown setFromLang={setFromLang} />
                <textarea
                    onChange={(e) => { setEditText(e.target.value) }}
                    id="fromLang"
                    placeholder="Enter text to translate" />
            </div>

            <div className='translateButton'>

                <button id="translate-btn" onClick={() => { TranslateNow(); }} >Translate </button >
            </div>

            <div className='translatedField'>

                <LanguageToDropdown setToLang={setToLang} />
                <textarea
                    id="toLang"
                    placeholder="translated text here..."
                    value={translation} />


            </div>
        </div >

    )

}

export default React.memo(Translator)