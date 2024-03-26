import React, {useState} from 'react';


export default function SelctYourFavDic({selectedDicFunc}){
    const [option, setSelectOption] = useState('Longman');
    
    function extractOption (e ){
        setSelectOption(e?.target.value)
       switch (true) {
         case e.target.value == 'Oxford':
            selectedDicFunc("https://www.oxfordlearnersdictionaries.com/definition/english/");
        break;
         case e.target.value =='American':
            selectedDicFunc("https://www.merriam-webster.com/dictionary/")
            break
         case e.target.value == 'Cambridge':
            selectedDicFunc("https://dictionary.cambridge.org/dictionary/english/")
            break
         case  e.target.value== 'Longman':
            selectedDicFunc("https://www.ldoceonline.com/dictionary/")
            break
         case e.target.value == 'Urdu':
            selectedDicFunc("https://hamariweb.com/dictionaries/urdu-english-dictionary.aspx?eu=")
            break
        default:
            break;
       }
       
    }
    return(
        <div className="add-your-favdic">
        <select className='sel-fav-dic'onClick={(e)=>e.target.value ==option? '' :extractOption(e)}>
           <option value="Longman">Longman</option>
           <option value="Oxford">Oxford</option>
           <option value="Cambridge">Cambridge</option>
           <option value="American">American</option>
           <option value="Urdu">Urdu</option>
         </select>
        
       </div>
    )
}