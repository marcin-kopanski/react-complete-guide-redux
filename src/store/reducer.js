import * as actionTypes from './actions';

const initialState = {
	counter: 0,
	results: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.INCREMENT:
			return {
				...state,
				counter: state.counter + 1
			}
		case actionTypes.DECREMENT:
			return {
				...state,
				counter: state.counter - 1
			}
		case actionTypes.ADD:
		case actionTypes.SUBSTRACT:
			return {
				...state,
				counter: state.counter + action.value
			}
		case actionTypes.STORE_RESULT:
			return {
				...state,
				results: state.results.concat({
					id: new Date(),
					value: state.counter
				})
			}
		case actionTypes.DELETE_RESULT:
			// const id = 2;
			// const newArr = [...state.results];
			// newArr.results.splice(id, 1);

			const newArr = state.results.filter(result => result.id !== action.resultElementId);

			return {
				...state,
				results: newArr
			}
	}

	return state;
};

export default reducer;