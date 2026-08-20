import { useEffect, useState } from "react";
import Button from "../components/Button/Button";
import { Link } from "react-router-dom";

function Home(){
    const[word,setWord]=useState('');

async function fetchword(){
        const response= await fetch('http://localhost:3000/words');
        const data = await response.json();
        console.log(data);

        const randomIndex=Math.floor(Math.random()*(data.length))
        console.log(data[randomIndex]);
        setWord(data[randomIndex].wordValue);
    }

useEffect(()=>{
    fetchword();
},[])


    return (
        <>
        <Link to='./play' state={{wordSelected : word}} >
            <Button text="SinglePlayer" />
        </Link>
<br />

        <Link to ='./start'>
            <div className='mt-4'>
            <Button text="MultiPlayer" styleType="secondary"/>
            </div> 
        </Link>

        </>

    )

}
export default Home;