import { useContext, useState, useEffect } from 'react'
import TranslateDispatchContext from "../Contexts/TranslateDispatchContext.js"
import TranslatorContext from "../Contexts/TranslatorContext.js"
import run from "../Helpers/Fetcher.js"
import React from "react"
import LanguageFromDropdown from "./LanguageFromDropdown.jsx"
import LanguageToDropdown from "./LanguageToDropdown.jsx"
import "../styles/styles.css"
import { ToastContainer, toast } from 'react-toastify';

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


    async function copyToClipboard(text) {
        await navigator.clipboard.writeText(text);
        toast.success("Copied to clipboard!");

    }

    useEffect(() => {
        console.log(list);
    }, [list]);

    return (
        <>
            <ToastContainer />
            <div className="translator-container">
                <div className='toTranslateField'>
                    <LanguageFromDropdown setFromLang={setFromLang} />
                    <textarea id="fromLang"
                        onChange={(e) => { setEditText(e.target.value) }}
                        cols="50"
                        rows="10"
                        placeholder="Enter text to translate" />
                </div>

                <div className='translateButton'>

                    <button id="translate-btn" onClick={() => { TranslateNow(); }} >
                        Translate
                    </button >
                </div>

                <div className='translatedField'>

                    <LanguageToDropdown setToLang={setToLang} />
                    <textarea id="toLang"
                        cols="50"
                        rows="10"
                        placeholder="translated text here..."
                        value={translation}
                        onClick={() => copyToClipboard(translation)}

                    />

                </div>
            </div >
        </>
    )

}

export default React.memo(Translator)