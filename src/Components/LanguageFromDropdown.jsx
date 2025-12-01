

import React from "react"
import languages from "./languages.json"

function LanguageFromDropdown({ setFromLang }) {


    return (
        <select id="language-dropdown" onChange={(e) => { setFromLang(e.target.value) }}>
            {languages.map(l => (
                <option key={l.code} value={l.code}>{l.language}</option>
            ))}

        </select>
    )
}

export default React.memo(LanguageFromDropdown)