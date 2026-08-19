import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
function TextInputForm({inputType, handleFormSubmit,handleTextInputChange,handleShowHideClick}){


    return (
        <form 
        onSubmit={handleFormSubmit}>
            <div>
                <TextInput 
                type={inputType}
                label="Enter a Text Here"
                placeholder="Enter Your Text"
                onChangeHandler={handleTextInputChange}/>
             </div>
             <div>
                <Button
                text={inputType == "password" ? "Show" : "Hide"}
                styleType="warning"
                type="button"
                onClickHandler={handleShowHideClick}/>
             </div>
             <div>
                <Button 
                text="Submit"
                type="submit"
                styleType="primary"/>
             </div>
        </form>
    )

}
export default TextInputForm;