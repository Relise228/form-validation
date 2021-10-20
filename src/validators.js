export const required = value => {
    return value ? undefined : 'Field is required'
}

export const number = value => {
    return /[0-9]/.test(value) ? undefined : 'Password must contain numbers'
}

export const maxLength = value => {
    return value.length < 15 ? undefined : 'Password length must be less than 15 symbols '
}

export const minLength = value => {
    return value.length > 8 ? undefined : 'Password length must be more than 8 symbols '
}

export const firstUpper = value => {
    let firstSymbol = value[0];
    return value[0] === firstSymbol.toUpperCase() ? undefined : 'First symbol must be in Upper Case'
}