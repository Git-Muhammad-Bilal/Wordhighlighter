import React, { useEffect, useState } from "react";
import TextArea from "./TextArea"
import AppName from './AppName';
import Search from "./Search";
import SelectYourFavDic from "./SelectYourFavdic";
import {TestComp} from "./TestComp";
function App() {
  
  const [words, setWords] = useState();
  const [searchedWord, setSearchedWord] = useState('');
  const [selectedDictionary, setSlectedDiconary] = useState('https://www.ldoceonline.com/dictionary/');
  let fetchTheText = (text) => {
    setWords(text)
  }
  function searchedWordFunc(word) {
    setSearchedWord(word)
  }
  

 function slctedDicFunc(dtnryName)              {
      console.log(dtnryName);
    setSlectedDiconary(dtnryName)
} 
  return (
    <div className="container">
    {/* <TestComp/> */}
  <div className="containt-container">
        <div className="control-container">
          <AppName />
          <Search words={words} searchedWord={searchedWordFunc} />
          <SelectYourFavDic selectedDicFunc={slctedDicFunc}/>
      </div>
        
        <TextArea 
        fetchTheText={fetchTheText} 
        searchedWord={searchedWord} 
        slectedDiconary ={selectedDictionary}
        />
    </div>
    </div>
  )
}

export default App;
             