import { useState } from 'react'

import AppForm from './components/AppForm'

const articles = [
    'art1', 
    'art2', 
    'art3', 
    'art4'
]
function App() {
  const [listArticle, setlistArticle] = useState(articles); //collega l'array
  function handleTrash(i){
    console.log(i);
    //mi deve restituire quelli diversi e quiindi la lista senza l'elemento selezionato
    const filteredArt = listArticle.filter((art, index) => {
        return index != i})
    console.log(filteredArt);
    
    setlistArticle(filteredArt);
    console.log(listArticle);
    
}
  return (
    <>
    <AppForm listArticle={listArticle} setlistArticle={setlistArticle} articles = {articles} />
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
