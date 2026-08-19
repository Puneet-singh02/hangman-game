

export function getMaskedString(originalWord, guessedLetters) {

    const guessedLetterSet = new Set(
        guessedLetters.map(letter => letter.toUpperCase())
    );

    const result = originalWord.toUpperCase().split("").map(char => {

        if (guessedLetterSet.has(char)) {
            return char;
        } else {
            return '_';
        }

    });

    return result;
}