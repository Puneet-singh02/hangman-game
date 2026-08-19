    import { useSearchParams,useParams, useLocation } from "react-router-dom";
    import { useState } from "react";
    import MaskedText from "../components/MaskedComponent/MaskedText";
    import LetterButtons from "../components/LetterButtons/LetterButton";
    function PlayGame(){
        // const [searchParams]=useSearchParams();
        // const{text}=useParams();
        const {state}=useLocation();
        const[guessedLetters,setGuessedLetters]=useState([]);
        function handleLetterClick(letter){
            setGuessedLetters([...guessedLetters,letter])
        }
    
        
        return (
            <>
                <h1>Play Game {state.wordSelected}</h1>
                {/* {console.log(searchParams.get("text"))} */} 
                
                <MaskedText text={state.wordSelected} guessedLetters={guessedLetters} />
                <div>
               <LetterButtons
                text={state.wordSelected}
                guessedLetters={guessedLetters}
                onLetterClick={handleLetterClick}
                />
                </div>
            </>
        )
    }
    export default PlayGame;