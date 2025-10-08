import { useState } from "react";



export default function AppForm ({listArticle, setlistArticle, articles,}){

    const [newArticle, setNewArticle] = useState('');//collega l'input

    console.log(articles);
    
    console.log(newArticle);
    console.log(listArticle);

    function handleSubmit(e){
        e.preventDefault();
        console.log("ciao");
        console.log(newArticle);

        setlistArticle([newArticle, ...listArticle]);
        console.log(listArticle);
        
    }





    return(

        <>
        <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="inputText" class="form-label">Email address</label>
          <input type="text" class="form-control" id="inputText" aria-describedby="emailHelp" value={newArticle} onChange={(e)=> setNewArticle(e.target.value)}/>
          <div id="emailHelp" class="form-text">Well never share your email with anyone else.</div>
        </div>
        
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>

      </>
    )
}
