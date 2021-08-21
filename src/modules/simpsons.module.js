import { Module } from '../core/module';

export class SimpsonsModule extends Module {

  trigger() {
    const sympsonsUrl = 'https://thesimpsonsquoteapi.glitch.me/quotes'

    const dataContainer = document.querySelector('#data-container')
    
    
    const toggleLoader = () => {
        const loader = document.querySelector('#loader')
        const isHidden = loader.hasAttribute('hidden')
        if (isHidden) {
            loader.removeAttribute('hidden')
        } else {
            loader.setAttribute('hidden',' ')
        }
    }
    const createSympsonQuoteElement = (quote) => {
        const sympsonQuoteElement = document.createElement('div')
         sympsonQuoteElement.textContent = quote
         
       return sympsonQuoteElement
    
    }
    const createSympsonNameElement = (character) => {
      
       const sympsonNameElement = document.createElement('div')
       sympsonNameElement.textContent = character
   
     return sympsonNameElement
  
  }
  const createSympsonImageElement = (image) => {
  
     const sympsonImageElement = document.createElement('img')
     sympsonImageElement.src = image
   return sympsonImageElement

}
    const renderSympsons = async () =>{
        toggleLoader()
        try {
    
    const response = await fetch(sympsonsUrl)
    if(!response.ok){
        dataContainer.textContent = 'There is an error..sorry'
        throw new Error ('There is an error...sorry')
        
    }else {
    
        const result = await response.json()
        const data = []
        
       result.forEach(obj => { for (let prop in obj)
        { 
          data.push(obj[prop])
         }
        
         dataContainer.append(createSympsonQuoteElement(data[0]),createSympsonNameElement(data[1]),createSympsonImageElement(data[2]))
       });
    }
            
        } catch (error) {
            console.log('loading error')
        } finally {
            toggleLoader()
        }
    }
    
    renderSympsons()
}
}