import axios from "axios"



const caller = async (text, fromLang, toLang) => {
    const response = await axios.get(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${fromLang}|${toLang}`);

    return response.data.matches[0].translation;
}


async function run(text, fromLang, toLang) {
    const translation = await caller(text, fromLang, toLang);

    return translation;
}

export default run




