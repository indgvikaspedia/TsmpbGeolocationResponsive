import { lgn_code } from '../properties/constant';
import $ from 'jquery';

export const inputTextTranslation = languageCode => {
  // if (languageCode == lgn_code.HINDI) {
    translateToHindi(languageCode+"");
  // }
};

export const translateToHindi = (destLgn) => {
  google.load('elements', '1', {
    packages: 'transliteration'
  });
  // Set the Source and Destination Languages for Writing and Transliterating to
  function onLoad() {
    var options =
    {
      // sourceLanguage: google.elements.transliteration.LanguageCode.ENGLISH,
      // destinationLanguage: [google.elements.transliteration.LanguageCode.HINDI],
      sourceLanguage: "en",
      destinationLanguage: "te",
      transliterationEnabled: true
    };
    // Create an instance on TransliterationControl with the required
    // options.
    var control = new google.elements.transliteration.TransliterationControl(options);
    // Enable transliteration in the textbox with id

    // if ($('#searchMapkey').length) {
    //   control.makeTransliteratable(['searchMapkey']);
    // }
    // if ($('#formPlaintextTitle').length) {
    //   control.makeTransliteratable(['formPlaintextTitle']);
    // }
    // if ($('#formPlaintext').length) {
    //   control.makeTransliteratable(['formPlaintext']);
    // }
    // if ($('#searchNav').length) {
    //   control.makeTransliteratable(['searchNav']);
    // }
    // if ($('#portalSearch').length) {
    //   control.makeTransliteratable(['portalSearch']);
    // }
    // if ($('#searchM').length) {
    //   control.makeTransliteratable(['searchM']);
    // }
    // if ($('#leftNav').length) {
    //   control.makeTransliteratable(['leftNav']);
    // }
    // if ($('#editor_ifr').length) {
    //   control.makeTransliteratable(['editor_ifr']);
    // }
    // if ($('#exampleForm.ControlTextarea1').length) {
    //   control.makeTransliteratable(['exampleForm.ControlTextarea1']);
    // }
    // if ($('#searchBox').length) {
    //   control.makeTransliteratable(['searchBox']);
    // }
    // if ($('#editor_ifr').length) {
    //   control.makeTransliteratable(['editor_ifr']);
    // }

    if ($('#searchBarTSMPB').length){
      console.log("In id based transliteration");
      control.makeTransliteratable(['searchBarTSMPB']);
    }
    if($('#filtersearch').length){
      control.makeTransliteratable(['filtersearch']);
    }
    // if ($('#pageNotFoundPortalSearch').length) {
    //   control.makeTransliteratable(['pageNotFoundPortalSearch']);
    // }
    // if ($('#pageNotFound').length) {
    //   control.makeTransliteratable(['pageNotFound']);

    // }
    //for class based translation
    //var elements = document.getElementsByClassName('reactTag');
    // control.makeTransliteratable(elements);
    // if($("reactTag").length){
    //     control.makeTransliteratable([elements]);
    // }
    //for placeholder based translation
    var el = $('*[placeholder="Add new tag"]');
    control.makeTransliteratable(el);
    // if($("Add new tag").length){
    //     control.makeTransliteratable([el]);
    // }
  }
  google.setOnLoadCallback(onLoad, true);
};
