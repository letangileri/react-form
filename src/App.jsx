import { useState } from 'react'

import AppForm from './components/AppForm'

const articles = [
    'art1', 
    'art2', 
    'art3', 
    'art4'
]
function App() {
  const [newArticle, setNewArticle] = useState('');//collega l'input
  const [listArticle, setlistArticle] = useState(articles); //collega l'array

  return (
    <>
    <AppForm newArt = {newArticle} setNewArticle={setNewArticle} listArt={listArticle} setListArt={setlistArticle} art = {articles}/>
    </>
  )
}

export default App
