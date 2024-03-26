// import React, { useEffect, useState } from 'react';

// // let text = `this is some simple text to see how some text search works with search term highlited`
// let text = `this is some`

// export const TestComp = () => {

//     const [searchTerm, setSearchTerm] = useState('som');
//     const [content, setContent] = useState(text);
//     // const [searchTermIndexDictionary, setSearchTermIndexDictionary] = useState([]);

//     useEffect(() => {
//         // runSearch(searchTerm);
//         runSearch2(searchTerm);
//     }, [searchTerm])

//     const handleSearch = ({ target: { value } }) => {
//         setSearchTerm(value);
//     }

//     const runSearch2 = (searchTerm) => {
//         let indexes = [];
//         let updatedText = [];
//         for (let i = 0; i < text.length; i++) {
//             const strChar = text[i];
//             if (strChar === searchTerm[0]) {
//                 for (let j = 0; j < searchTerm.length; j++) {
//                     const searchTermchar = searchTerm[j];
//                     if (text[i + j + 1] !== searchTermchar) {
//                         indexes.push(i);
//                         break;
//                     }
//                 }
//             }
//         }
//         setContent(markupText(indexes))
//     }

//     const markupText = (indexes) => {

//         let updated = [];

//         for (let i = 0; i < text.split('').length;) {
//             const char = text.split('')[i];
//             let updatedIndex = i;
//             // if (indexes.includes(i)) {
//             //     debugger
//             //     updatedIndex + searchTerm.length;
//             //     i+updatedIndex;
//             //     updated[i] = <mark>{searchTerm}</mark>;

//             // } else  {
//             //     i+1
//             // }
//             updated[updatedIndex] = char;
//             i+=1;

//         }
//         return updated;
//     }

//     const runSearch = (term) => {

//         let wholeString = [];

//         let partialString = text?.split(term)

//         partialString?.forEach((str, index) => {
//             wholeString.push(str);
//             if (index !== partialString.length - 1) {
//                 wholeString.push(<mark>{term}</mark>)
//             }

//         })
//         setContent(wholeString);
//     }

//     return (
//         <div>
//             <input onChange={handleSearch} value={searchTerm} />
//             {content}
//         </div>
//     )
// }