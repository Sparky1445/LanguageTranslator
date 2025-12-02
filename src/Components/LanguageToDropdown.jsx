

import React from "react"
import languages from "./languages.json"
import "../Styles/LanguageDropdown.css"
function LanguageToDropdown({ setToLang }) {


    return (
        <select className="language-dropdown" onChange={(e) => { setToLang(e.target.value) }}>
            {languages.map(l => (
                <option key={l.code} value={l.code}>{l.language}</option>
            ))}

        </select>
    )
}

export default React.memo(LanguageToDropdown)