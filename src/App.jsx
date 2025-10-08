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
    <AppForm newArticle = {newArticle} setNewArticle={setNewArticle} listArticle={listArticle} setlistArticle={setlistArticle} articles = {articles} />
    <ul>
        {listArticle.map((art, i) => 
        <li key={i}>
        <span>{art}</span>
        <button className="btn btn-danger" onClick={()=>handleTrash(i)}>
            <i className="bi bi-trash3"></i>
        </button>
        </li>
        )}
      </ul>
    </>
  )
}

export default App
