import { useNavigate } from "react-router-dom";
import TextInputForm from "./TextInputForm";
import { useEffect, useState } from "react";
function TextInputFormContainer(){

    const [inputType,setInputType]=useState("password");
    const [value,setValue]=useState();

    const navigate=useNavigate();           {/* useNavigate returns a function */}

    function handleFormSubmit(event){
        event.preventDefault();
        console.log("Form SUbmitted",value);
        if(true){
                // navigate(`/play?text=${value}`)
                // navigate(`/play/${value}`)
                navigate('/play ',{ state :{wordSelected : value}})
        }

    }
    function handleTextInputChange(event){
        console.log("Text Input Changed");

        setValue(event.target.value);
        console.log(event.target.value);
    }
    function handleShowHideClick(){
        
        if(inputType=="password"){
            setInputType("text")
        }else(
            setInputType("password")
        )
    }

    function Temp(){
        useEffect(() => {
            console.log("Component first load");

        return () => {
            console.log("Component Unmounted");
    };
}, []);
        return (
            <div>
                Temp
            </div>
        )
    }

    // // Empty Dependency Array [] => callback will be executed only at the time of loading of component
    // useEffect(()=>{
    //     console.log("Component Loads")
    // },[])

    //  // No Dependency Array [] => callback will be executed at the time of loading of component and at the time of every updation of useState variables i.e const[value,setValue]=useState();
    // useEffect(()=>{
    //     console.log("Componenet Loaded and updated every time")
    // })

    //  // Empty Dependency Array [] => callback will be executed  at the time of loading of component and when the value will be updated 
    // useEffect(()=>{
    //     console.log("Component loaded and updated when value updates")
    // },[value])

    return (
        <>
        <TextInputForm
        inputType={inputType}
        handleFormSubmit={handleFormSubmit}
        handleTextInputChange={handleTextInputChange}
        handleShowHideClick={handleShowHideClick}
       
        />
    {(inputType === "password" )? <Temp /> : null}
        </>
       
    )
}
export default TextInputFormContainer;