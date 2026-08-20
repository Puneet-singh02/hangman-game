    import { useSearchParams,useParams, useLocation } from "react-router-dom";
    import { useState } from "react";
    import MaskedText from "../components/MaskedComponent/MaskedText";
    import LetterButtons from "../components/LetterButtons/LetterButton";
    import Hangman from "../components/Hangman/Hangman";
    function PlayGame(){
        // const [searchParams]=useSearchParams();
        // const{text}=useParams();
        const {state}=useLocation();
        const[guessedLetters,setGuessedLetters]=useState([]);
        const [step,setStep]=useState(0);

        function handleLetterClick(letter){
            if(state?.wordSelected?.toUpperCase().includes(letter)){
                console.log("Correct");
            }else{
                setStep(step+1);
            };
            setGuessedLetters([...guessedLetters,letter])
        }
    
        
         return (
    <>
      <h1>Play Game</h1>

      {state?.wordSelected && (
        <>
          <MaskedText text={state.wordSelected} guessedLetters={guessedLetters} />
          <div>
            <LetterButtons
              text={state.wordSelected}
              guessedLetters={guessedLetters}
              onLetterClick={handleLetterClick}
            />
          </div>
          <div>
            <Hangman step={step} />
          </div>
        </>
      )}
    </>
  );}

    export default PlayGame;