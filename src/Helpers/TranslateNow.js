async function TranslateNow(isBusy, setIsBusy, Edittext, fromLang, toLang, setTranslation, dispatch, run) {
    if (isBusy) return;
    if (!Edittext.trim()) {
        alert("Please enter text to translate");
        return;
    }

    setIsBusy(true);
    try {
        const output = await run(Edittext, fromLang, toLang);
        dispatch({ type: "translate", payload: { text: Edittext, translation: output } });
        setTranslation(output);
    } finally {
        setIsBusy(false);
    }
}

export default TranslateNow