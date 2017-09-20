import constants from '../constants'

export default {


	createTodoItem: (todo) => {
		return {
			type: constants.CREATE_TODO_ITEM,
			data: todo
		}
	},

	selectItem: (todo) => {
		return {
			type: constants.ITEM_SELECTED,
			data: todo
		}
	}
}