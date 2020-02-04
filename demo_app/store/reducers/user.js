import { CHANGE_FIRST_NAME, CHANGE_LAST_NAME, CHANGE_EMAIL, CHANGE_PHONE, RESET } from '../actions/user';

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
};

const maintenanceReducer = (state = initialState, action) => {

    switch (action.type) {

        case CHANGE_FIRST_NAME:
            return { ...state, firstName: action.firstName };

        case CHANGE_LAST_NAME:
            return { ...state, lastName: action.lastName };

        case CHANGE_PHONE:
            return { ...state, phone: action.phone };

        case CHANGE_EMAIL:
            return { ...state, email: action.email };

        case RESET:
            return { ...state, firstName: '', lastName: '', email: '', phone: '' }
        default:
            return state;
    }
    return state;
};

export default maintenanceReducer;