export const emailValidation = (text, regex) => {
  return text.match(regex) ? true : false
}

export const nameValidation = (text) => {
  return text.length > 2 ? true : false
}

export const passwordValidation = (text) => {
  return text.length >= 4 && text.length <= 8 ? true : false
}

export const confirmPassword = (text,password) => {
  return text === password ? true : false
}


