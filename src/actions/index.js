import constants from '../constants'

export default {


	createTodoItem: (todo){
		return {
			type: constants.CREATE_TODO_ITEM,
			data: todo
		}
	}
}