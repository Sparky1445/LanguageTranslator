import axios from "axios"



const caller = async (text, fromLang, toLang) => {
    const response = await axios.get(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${fromLang}|${toLang}`);
    console.log(response);
    return response.data.responseData.translatedText.replace(/<[^>]*>/g, "");

}


const transliterator = async (text, fromLang) => {
    const response = await axios.get(`https://inputtools.google.com/request?text=${encodeURIComponent(text)}&itc=${fromLang}-t-i0-und&num=1`)
    console.log(response);
    if (response.data[0] != "INVALID_INPUT_METHOD_NAME") {
        return response.data[1][0][1][0];
    }
    else {
        return text;
    }

}
async function run(text, fromLang, toLang) {
    const transliteratedFromText = await transliterator(text, fromLang);
    console.log(transliteratedFromText);

    const translation = await caller(transliteratedFromText, fromLang, toLang);


    return translation;
}

export default run




