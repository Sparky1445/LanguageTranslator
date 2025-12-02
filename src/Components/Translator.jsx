import { useContext, useState, useEffect } from 'react'
import TranslateDispatchContext from "../Contexts/TranslateDispatchContext.js"
import TranslatorContext from "../Contexts/TranslatorContext.js"
import React from "react"
import LanguageFromDropdown from "./LanguageFromDropdown.jsx"
import LanguageToDropdown from "./LanguageToDropdown.jsx"
import "../styles/styles.css"
import run from "../Helpers/Fetcher.js";
import { ToastContainer, toast } from 'react-toastify';
import TranslateNow from "../Helpers/TranslateNow.js";
import copyToClipboard from "../Helpers/copyToClipboard.js";


function Translator() {

    const { dispatch } = useContext(TranslateDispatchContext);
    const { list } = useContext(TranslatorContext);
    const [Edittext, setEditText] = useState("");
    const [translation, setTranslation] = useState("");
    const [fromLang, setFromLang] = useState("en");
    const [toLang, setToLang] = useState("en");
    const [isBusy, setIsBusy] = useState(false);



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

                    <button id="translate-btn" onClick={() => { TranslateNow(isBusy, setIsBusy, Edittext, fromLang, toLang, setTranslation, dispatch, run) }} >
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
                        onClick={() => copyToClipboard(translation, toast)}

                    />

                </div>
            </div >
        </>
    )

}

export default React.memo(Translator)