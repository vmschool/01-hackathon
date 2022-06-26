import { Module } from '../core/module';
import { random } from '../utils';

const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments'

export default class RandomComment extends Module {

	async trigger() {
		try {
			const hasCommentBlock = document.querySelector('.comment-block')

			if (hasCommentBlock) {
				hasCommentBlock.remove()
			}

			const allComments = await fetch(COMMENTS_URL)
			const response = await allComments.json()

			const randomElement = random(0, response.length)

			const commentName = response[randomElement].name
			const commentContent = response[randomElement].body

			const comment = createCommentBlock(commentName, commentContent)

			document.body.insertAdjacentElement('beforeend', comment)

			setTimeout(() => {
				comment.remove()
			}, 5000)

		} catch (err) {
			console.log('error comment:', err);
		}
	}
}


function createCommentBlock(name, comment) {
	const commentBlock = document.createElement('div')
	commentBlock.className = 'comment-block'

	const commentTitle = document.createElement('div')
	commentTitle.className = 'comment-block__title'
	commentTitle.textContent = `Комментарий от: ${name}`

	const commentContent = document.createElement('div')
	commentContent.className = 'comment-block__content'
	commentContent.textContent = `Содержание: ${comment}`

	commentBlock.insertAdjacentElement('beforeend', commentTitle)
	commentBlock.insertAdjacentElement('beforeend', commentContent)

	return commentBlock
}