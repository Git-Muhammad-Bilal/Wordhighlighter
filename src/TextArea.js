import React, { useState, useEffect, useRef, Fragment } from 'react';
let counter = 0;
let left;
let top;

export default function TextArea({ fetchTheText, searchedWord, slectedDiconary}) {

    const [text, setText] = useState(para)
    const [editText, setEditText] = useState('Edit')
    const [selectedWord, setSelectedWord] = useState()
    let submitText = (eve) => {
        setText(eve.target.value)
    }
    useEffect(() => {
        fetchTheText(text)

    }, [text])

    let editFunc = () => {
        editText !== 'Edit' ? setEditText('Edit') : setEditText('Save Changes')

    }

    let hoverOnAWord = (e) => {
       let y = document.getElementById('p')
        left = e.pageX;
        top = e.pageY;

        let x = getSelection().toString()
        setSelectedWord(x)

    }
    let SlctdWrdStyle = {
        backgroundColor: ' rgb(201, 3, 3)',
        position: 'absolute',
        left: `${left - 70}px`,
        top: `${top - 152}px`,
    }
    return (
        <div className="containt" >
            <div className="edit-Btn">
                <button onClick={editFunc}>{editText}</button>
            </div>
            {
                editText == 'Edit' && searchedWord.length ?
                    <p  onMouseUp={(e) => { hoverOnAWord(e) }}>{markUpText(text, searchedWord)}</p>
                    : text.length && editText != 'Save Changes' ?
                        <p id='p' onMouseUp={(e) => { hoverOnAWord(e) }}>{text}</p> :
                        <textarea
                            className="text-area"
                            placeholder="put your paragraph here"
                            value={text}
                            onChange={event => submitText(event)}

                        >
                        </textarea>
            }

            {

                selectedWord &&
                <div className='slct-word' style={SlctdWrdStyle}>
                <a id ='atag' href={`${slectedDiconary}/${selectedWord}`} target ='_blank'><span>{selectedWord}</span></a>
                </div>}

        </div>
    )
}

const genTextWithMarkup = (text, searchedWord, index, length) => {

    let indOfSearWord = text.indexOf(searchedWord);
    let left = text?.slice(0, indOfSearWord);
    let center = searchedWord;
    let last = index === length - 1 && text.slice(indOfSearWord + searchedWord.length);

    return {
        left, center, last, index
    }
}

let slicedText;
const mapTextWithMarkup = (w, index, text, searchedWord, length) => {

    slicedText = index === 0 ? text : slicedText.slice(slicedText?.indexOf(searchedWord) + searchedWord.length)
    if (slicedText?.includes(searchedWord)) {
        let generatedText = genTextWithMarkup(slicedText, searchedWord, index, length);
        return <TextWithMarkup {...generatedText}/>
    }
}

function markUpText(text, searchedWord) {
    let regex;
    let x;
    if (searchedWord.length) {
        regex = new RegExp(searchedWord, "g");
        x = text?.match(regex);
    }

    return x?.map((_, index) => mapTextWithMarkup(_, index, text, searchedWord, x.length))
}

const TextWithMarkup = ({ left, center, last, index }) => {
    return (
        <Fragment>
            {left}
            {<mark key={index}>{center}</mark>}
            {last}
        </Fragment>
    )
}
    // downlaod Sign in with your Google Account to get your bookmarks history, passwords and other










    var para =`Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a
         paragraph is a group of at least five sentences, a paragraph is half a page long, 
      etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. 
      A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116).
       Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in 
       some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. 
       Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, 
       we will refer to this as the “controlling idea,”
     because it controls what happens in the rest of the paragraph."
     Before you can begin to determine what the composition of a particular paragraph will be, you must first decide on an argument and a working thesis statement for your paper. What is the most important idea that you are trying to convey to your reader? The information in each paragraph must be related to that idea. In other words, your paragraphs should remind your reader that there is a recurrent relationship between your thesis and the information in each paragraph. A working thesis functions like a seed from which your paper, and your ideas, will grow. The whole process is an organic one—a natural progression from a seed to a full-blown paper where there are direct, familial relationships between all of the ideas in the paper.

     The decision about what to put into your paragraphs begins with the germination of a seed of ideas; this “germination process” is better known as brainstorming. There are many techniques for brainstorming; whichever one you choose, this stage of paragraph development cannot be skipped. Building paragraphs can be like building a skyscraper: there must be a well-planned foundation that supports what you are building. Any cracks, inconsistencies, or other corruptions of the foundation can cause your whole paper to crumble.
     
     So, let’s suppose that you have done some brainstorming to develop your thesis. What else should you keep in mind as you begin to
    `