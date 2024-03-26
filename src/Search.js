import React, {useState, useEffect} from 'react';
export default function Search({words, searchedWord}){

  const [value, setValue] = useState('ara')
  
  function searchFunc(e){
    setValue(e.target.value)
  }
  
  useEffect(()=>{
    searchedWord(value)
  })

    return(
        <div className="search-bar">
        <input 
        className='input'
        type= "text" 
        placeholder="Search your world Here"
        value={value}
        onChange ={(e)=>searchFunc(e)}
        />
      </div> 
    )
}