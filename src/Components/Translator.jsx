import { useContext, useState, useEffect } from 'react'
import TranslateDispatchContext from "../Contexts/TranslateDispatchContext.js"
import TranslatorContext from "../Contexts/TranslatorContext.js"
import run from "../Helpers/Fetcher.js"
import React from "react"
function Translator() {

    const { dispatch } = useContext(TranslateDispatchContext);
    const { list } = useContext(TranslatorContext);
    const [Edittext, setEditText] = useState("");
    const [translation, setTranslation] = useState("");



    async function TranslateNow() {
        const output = await run(Edittext, "en", "es");
        if (Edittext != "") {
            await dispatch({ type: "translate", payload: { text: Edittext, translation: output } });
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

                <textarea
                    onChange={(e) => { setEditText(e.target.value) }}
                    id="fromLang"
                    placeholder="Enter text to translate" />
            </div>

            <div className='translateButton'>

                <button id="translate-btn" onClick={() => { TranslateNow(); }} >Translate </button >
            </div>

            <div className='translatedField'>
                <textarea
                    id="toLang"
                    placeholder="translated text here..."
                    value={translation} />


            </div>
        </div >

    )

}

export default React.memo(Translator)