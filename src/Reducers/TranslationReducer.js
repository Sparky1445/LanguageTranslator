

const TranslationReducer = (state, action) => {

    if (action.type == "translate") {
        return [{ fromLangText: action.payload.text, toLangText: action.payload.translation }];

    }
}




export default TranslationReducer
