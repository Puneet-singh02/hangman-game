
import getButtonStyling from '../getButtonStyling.js'
function Button({text,onClickHandler,styleType="primary",type}){

    return (
        <>
        <button 
        type={type}
        onClick={onClickHandler}
        className={`px-4 py-2 ${getButtonStyling(styleType)} bg-blue-500 p`}
        >
            {text}
        </button>
        </>
    );
}

export default Button;