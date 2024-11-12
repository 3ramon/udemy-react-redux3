export function numberReducer(state, action) {
    switch (action.type) {
        case "number_add2":
            return { ...state, number: state.number + 2 };
        case "number_mult7":
            return { ...state, number: state.number * 7 };
        case "number_div25sd":
            return { ...state, number: state.number / 25 };
        case "number_addParse":
            return { ...state, number: parseInt(state.number) };
        case "number_addAny":
            return {
                ...state,
                number: state.number + parseInt(action.payload),
            };
        default:
            return state;
    }
}
