

import React from "react"
import languages from "./languages.json"
import "../styles/LanguageDropdown.css"
function LanguageFromDropdown({ setFromLang }) {


    return (
        <select className="language-dropdown" onChange={(e) => { setFromLang(e.target.value) }}>
            {languages.map(l => (
                <option key={l.code} value={l.code}>{l.language}</option>
            ))}

        </select>
    )
}

export default React.memo(LanguageFromDropdown)