import {Module} from '../core/module'

export class RandomPhotoModule extends Module {
    constructor(type, name) {
        super(type, name);
    }
    
    trigger() {

        const apiKey = 'Brm2rD7WdfexyK5hTjvVkvKcb_ZK9UhMdBFP8fgcAo8'
        const PHOTO_URL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=1`;
        const isContainer = document.querySelector('.container');
        if (isContainer) {
            isContainer.remove();
        }

        function setPhoto(url, name, author) {
            const body = document.querySelector('body');
            
            const container = document.createElement('div');
            container.classList.add('container');
            
            const image = document.createElement('img');
            image.setAttribute('src', url);
            image.classList.add('random-image');

            const imageDescription = document.createElement('p');
            imageDescription.classList.add('image-description');
            imageDescription.innerHTML = name;

            const imageAuthor = document.createElement('p');
            imageAuthor.classList.add('image-author');
            imageAuthor.innerHTML = author;

            const closeButton = document.createElement('button');
            closeButton.classList.add('close-button');
            closeButton.innerHTML = 'Закрыть';

            container.append(image, imageDescription, imageAuthor, closeButton);
            body.append(container);

            closeButton.addEventListener('click', () => {
                container.remove();
            });
        }


        async function getRandomPhoto() {
            try {
                const response = await fetch(PHOTO_URL);
                const photo = await response.json();
                const photoUrl = photo[0].urls.regular;
                const photoAuthor = photo[0].user.first_name + photo[0].user.last_name;
                const photoName =photo[0].description;
                console.log(photoName);
                setPhoto(photoUrl, photoName, photoAuthor);
            }

            catch(e) {
                console.log(e);
            }
        }

        getRandomPhoto();
    }
}