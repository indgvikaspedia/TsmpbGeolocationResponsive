
var selected_lang= 0;
export const setLangHelper =( lang) =>{
 
selected_lang= lang;
console.log("selected_lang in setLangHelper",selected_lang);
getLangHelper();
return selected_lang;
 
}

export const getLangHelper = () =>{
    console.log("In getLangHelper selected_lang:",selected_lang);
return selected_lang;
}
