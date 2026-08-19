import { Navigate, useNavigate } from "react-router-dom";
import TextInputForm from "./TextInputForm";
import { useState } from "react";
function TextInputFormContainer(){

    const [inputType,setInputType]=useState("password ");
    const [value,setValue]=useState();

    const navigate=useNavigate();           {/* useNavigate returns a function */}

    function handleFormSubmit(event){
        event.preventDefault();
        console.log("Form SUbmitted",value);
        if(true){
            setTimeout(()=>{
                navigate('/play');
            })
        }

    }
    function handleTextInputChange(event){
        console.log("Text Input Changed");

        setValue(event.target.value);
    }
    function handleShowHideClick(){
        console.log("Show Hide Click Button");
        if(inputType=="password"){
            setInputType("text")
        }else(
            setInputType("password")
        )
    }

    return (
        <TextInputForm
        inputType={inputType}
        handleFormSubmit={handleFormSubmit}
        handleTextInputChange={handleTextInputChange}
        handleShowHideClick={handleShowHideClick}
        />
    )
}
export default TextInputFormContainer;