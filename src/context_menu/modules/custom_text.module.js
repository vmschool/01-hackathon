import {Module} from '../../core/module';
import * as UTILS from "@/core/utils";

export class CustomText extends Module {
    constructor(type, text) {
        super(type, text);
    }
    toHTML() {
        return super.toHTML();
    }
    trigger() {
        return new Promise(() => {
            const menuItem = document.querySelector("[data-type = 'customText']");
            const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'
            menuItem.addEventListener('click', () => {
                const createPostItem = text => {
                    const blockItem = document.createElement('div');
                    blockItem.classList.add('blockItem')
                    document.body.append(blockItem)
                    blockItem.innerText = text
                    setTimeout(function(){
                        blockItem.remove()
                    }, UTILS.random(1000, 5000))
                }
                const getPost = async () => {   
                    try {
                        const generatePost = await fetch(`${POSTS_URL}/${UTILS.random(1, 100)}`)
                        console.log(`generatePost`, generatePost)
                        const result = await generatePost.json()
                        console.log('result', result)
                        const postHTML = createPostItem(result.body)
                    } catch (err) {
                        console.error(err)
                    }  
                    }
                    getPost() 
            })
        })
    }
}