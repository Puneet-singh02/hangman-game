import { useState } from 'react'
import Button from './components/Button/Button'
import StartGame from './pages/StartGame'
import TextInput from './components/TextInput/TextInput'
import TextInputForm from './components/TextInputForm/TextInputForm'
import TextInputFormContainer from './components/TextInputForm/TextInputFormContainer'
import {Routes,Route} from 'react-router-dom'
import PlayGame from './pages/PlayGame'

function App() {
  return (
    <Routes>
        <Route path='/start' element={<StartGame />} />
        {/* <Route path='/play/:text' element={<PlayGame />} /> */}
        <Route path='/play' element={<PlayGame />} />
        <Route path='/' element={<StartGame />} />
    </Routes>
  )
}

export default App;
