const initialState = {
	counter: 0,
	results: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return {
				...state,
				counter: state.counter + 1
			}
		case 'DECREMENT':
			return {
				...state,
				counter: state.counter - 1
			}
		case 'ADD':
		case 'SUBSTRACT':
			return {
				...state,
				counter: state.counter + action.value
			}
		case 'STORE_RESULT':
			return {
				...state,
				results: state.results.concat({
					id: new Date(),
					value: state.counter
				})
			}
		case 'DELETE_RESULT':
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