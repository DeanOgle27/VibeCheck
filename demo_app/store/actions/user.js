export const CHANGE_FIRST_NAME = 'CHANGE_FIRST_NAME';

export const changeFirstName = (newName) => {
    return { type: CHANGE_FIRST_NAME, firstName: newName }
}

export const CHANGE_LAST_NAME = 'CHANGE_LAST_NAME';

export const changeLastName = (newName) => {
    return { type: CHANGE_LAST_NAME, lastName: newName }
}

export const CHANGE_PHONE = 'CHANGE_PHONE';

export const changePhone = (newPhone) => {
    return { type: CHANGE_PHONE, phone: newPhone }
}

export const CHANGE_EMAIL = 'CHANGE_EMAIL';

export const changeEmail = (newEmail) => {
    return { type: CHANGE_EMAIL, email: newEmail }
}

export const RESET = 'RESET';

export const reset = () => {
    return { type: RESET }
}