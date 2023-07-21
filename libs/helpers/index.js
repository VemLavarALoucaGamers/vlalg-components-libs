/**
 * Function that checks if the parameter is a number
 * @param {number} value - Param description
 * @returns {boolean} Return description
*/
export const isNumber = (value = '') => {
  return !!(value && typeof value === 'number' && !isNaN(value))
}

/**
 * Function that centralizes the use of addEventListener, wantsUntrusted é opcional
 * @param {number} event - Type/Event name
 * @param {function} func - Function to be executed
 * @param {boolean} wantsUntrusted - Used to specify whether the event can be triggered by untrusted content
 * @returns It returns nothing by default, only if the defined function returns
*/
export const eventListener = async (event, func, wantsUntrusted = false) => {
  document.addEventListener(event, func, wantsUntrusted)
}

/**
 * Function created to do Async in `.map` of javascript
 * @param {array} itens - array of items
 * @param {function} callback - Function to be executed
 * @returns Returns a new array of items, as the callback function returns
 * @example
 * ```
 *  const array = ['1', '2', '3', '4']
 *  const newArray = asyncMapPromise(array, (item, index, array) => item === '2')
 *  console.log(newArray) // 2
 * ```
*/
export const asyncMapPromise = async (itens, callback) => {
  return await Promise.all(itens.map(async (item, index, array) => {
    // console.log('item -> ', item._id, array[index]._id)
    const newItem = await callback(item, index, array)

    return newItem
  }))
}

/**
 * Function that simplifies for...in (same as using for). Has access to the array index, loops over non-numeric indexes. Receives a callback function as the second parameter. The for in loop iterates over a object and each interaction returns a key.
 * @param {object} value - Object to interact
 * @param {function} callback - Function to be executed
 * @returns It returns nothing by default, only if the defined function returns
*/
export const forIn = async (value, callback) => {
  try {
    for (let i in value) {
      await callback(value, i)
    }
  } catch (error) {
    console.log('Error in helper forIn')
  }
}

/**
 * Function that simplifies for...of (same as using forEach), does not have access to the array index equal to forEach((v, i) => ...). Does not loop on non-numeric indexes. Takes a callback function as a second parameter.
 * @param {array|string|map} value - Arrays, Strings, Maps, and others objects who have the method `Symbol.iterator` to interact
 * @param {function} callback - Function to be executed
 * @returns It returns nothing by default, only if the defined function returns
*/
export const forOf = async (value, callback) => {
	try {
    for (let i of value) {
      await callback(value, i)
    }
  } catch (error) {
    console.error('Error in helper forOf')
  }
}

/**
 * Function that checks if it is an empty object
 * @param {object} obj - Object to be tested
 * @returns {boolean} If it's empty or not
*/
export const objectIsEmpty = (obj) => {
  if (!itIsObject(obj)) return false

  return !!(Object.keys(obj).length === 0)
}

/**
 * Function that returns if an object has a specific key
 * @param {object} obj - Object to be tested
 * @param {string} key - key to search
 * @returns {boolean} If the objt has the key
*/
export const objectHasKey = (obj, key) => {
  if (!itIsObject(obj)) return false

  return !!Object.prototype.hasOwnProperty.call(obj, key)
} 

/**
 * Function that returns whether an object has a list of keys
 * @param {object} obj - Object to be tested
 * @param {string[]} keys - List of keys to search
 * @returns {boolean} if an object has a list of keys
*/
export const objectHasArrayKeys = (obj, keys) => {
  if (!itIsObject(obj)) return false

  const objkeys = Object.keys(obj)

  if (objkeys.length && keys.length) {
    const result = objkeys.every(key => {
      return keys.includes(key)
    })

    return result
  }

  return false
}

/**
 * Function that returns whether an object has a number of properties
 * @param {object} obj - Object to be tested
 * @param {number} amount - amount of properties
 * @returns {boolean} If you have the amount passed
*/
export const objectHasQuantityProperties = (obj, amount) => {
  if (!itIsObject(obj)) return false

  if (Object.keys(obj).length === amount) return true
  return false
}

/**
 * Function that returns if it is an object
 * @param {*} obj - Object to be tested
 * @returns {boolean} If it is an object
*/
export const itIsObject = obj => {
  if (obj.constructor === Object) return true
  return false
}

/**
 * Function that returns if it is an string
 * @param {*} stg - string to be tested
 * @returns {boolean} If it is an string
*/
export const itIsString = stg => {
  if (stg.constructor === String) return true
  return false
}

/**
 * Function that returns if it is an array
 * @param {*} arr - array to be tested
 * @returns {boolean} If it is an array
*/
export const itIsArray = arr => {
  if (Array.isArray(arr) && arr.constructor === Array) return true
  return false
}

/**
 * Function for populate array
 * @param {*} outputArray - output array
 * @param {*} inputArray - input array
 * @returns {boolean} If it is an array
*/
export const populateArray = (outputArray = [], inputArray = []) => {
  let currentArray = outputArray

  if (!outputArray.length) {
    currentArray = inputArray
  } else {
    inputArray.forEach(item => {
      currentArray.push(item)
    })
  }

  return currentArray
}

/**
 * Function that returns a JSON string in Object
 * @param {string} stg - A JSON string
 * @returns {object} Returns an object
*/
export const JsonParse = stg => {
  return JSON.parse(stg)
}

/**
 * Function that returns an Object in JSON string
 * @param {object} obg - A object
 * @returns {string} Returns a JSON string
*/
export const jsonStringify = obg => {
  return JSON.stringify(obg)
}

/**
 * Function that centralizes the use of setInterval
 * @param {number} time - Execution time in milleseconds
 * @param {function} func - Function to be executed
 * @returns returns nothing
*/
export const interval = (time, func) => {
  const intervalId = setInterval(func, time)
  clearInterval(intervalId)
}

/**
 * Function that centralizes the use of setTimeout
 * @param {number} time - Execution time in milleseconds
 * @param {function} func - Function to be executed
 * @returns returns nothing
*/
export const timeout = (time, func) => {
  const timeoutId = setTimeout(func, time)
  clearTimeout(timeoutId)
}

/**
 * Function that gets the media query in js
 * @returns {number} media query size
*/
export const getMediaQueries = () => {
  return window.innerWidth
}

/**
 * Function that checks if the screen is in a specific media query
 * @param {string} newMedia - Media query that will be tested, default value is `(min-width: 400px)`
 * @returns {boolean} If it is in the informed media query
*/
export const isThisMediaQueries = (newMedia = '(min-width: 400px)') => {
  if (window.matchMedia(newMedia).matches) return true
  return false
}

/**
 * Function that checks if a variable is empty
 * @param {number} value - variable to be checked
 * @returns {boolean} If a variable is empty
*/
export const isEmpty = value => {
  if (value) return false

  return true
}

/**
 * Function that turns null into 0
 * @param {null} value - variable to be changed
 * @returns {number} Changed value
*/
export const fixNullToNumber = value => {
  if (value === null) return 0
  return value
}

/**
 * Function that redirects to an external URL
 * @param {string} url - Url to go
 * @param {string} type - variable to be changed, accepted values `_self`, `_parent`, `_top` and `_blank`.
 * @returns returns nothing
*/
export const goExternalLocation = (url = '', type = '_blank') => {
  if (!url) return

  window.open(url, type)
}

/**
 * Function that validates email
 * @param {string} email - Email that must be checked
 * @returns {boolean} If it is valid
*/
export const isValidEmail = email => {
  const emailPattern = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{1,3})+$/

  return emailPattern.test(email)
}

// Funcao seta variavel no localstorage
export const setLocalStorageVariable = (name = '', value = '') => {
  if (name) localStorage.setItem(name, value)
}

// Funcao remove variavel no localstorage
export const removeLocalStorageVariable = (name = '') => {
  if (name) localStorage.removeItem(name)
}

// Funcao retorna variavel no localstorage
export const getLocalStorageVariable = (name = '') => {
  if (name) return localStorage.removeItem(name)
}

// Funcao que valida senha
export const isValidPassword = password => {
  if (password && password.length >= 8) return true

  return false
}

// Funcao trim
export const trimString = value => {
  return value.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
}

// Funcao remove espacos
export const removeSpaceInString = value => {
  return value.replace(/\s+/g, '')
}

// Funcao de dividir array em grupos
export const splitArrayGroup = (items, maxItem) => {
  const splitArray = [[]]
  let currentGroup = 0

  for (let i = 0; i < items.length; i++) {
    if (splitArray[currentGroup] === undefined) {
      splitArray[currentGroup] = []
    }

    splitArray[currentGroup].push(items[i])

    if ((i + 1) % maxItem === 0) {
      currentGroup = currentGroup + 1
    }
  }

  return splitArray
}

// Funcao que direciona para o whastapp
export const goWhatsapp = (phone = '', text = '', type = 'wa') => {
  const defaultText = 'Default text'
  const defaultPhone = '5511966666666'
  const newText = text ? text : defaultText
  const newPhone = phone ? phone : defaultPhone
  let message = `https://wa.me/${newPhone}?text=${newText}`

  if (type === 'api') {
    message = `https://api.whatsapp.com/send?phone=${newPhone}&text=${newText}`
  } else if (type === 'intent') {
    message = `intent://send?text=${newText}&phone=${newPhone}#Intent;scheme=whatsapp;package=com.whatsapp;end`
  }

  return message
}

// Função que retorna as letras iniciais da string
export const initials = (string) => {
  $log.method('File: src/helpers/functions.js --initials--')
  const words = string.split(/[\s-]+/)
  return words.map(word => word.substr(0, 1)).join('').substr(0, 2).toUpperCase()
}

// Função que elimina qualquer caracter especial da string
export const clearStringValues = (string) => {
  $log.method('File: src/helpers/functions.js --clearStringValues--')
  if (string) return string.replace(/[^\w\s]/gi, '')
}

// Funcao que valida cnpj
export const validarCNPJ = (value) => {
  $log.method('File: src/helpers/functions.js --validarCNPJ--')
  const localValue = clearStringValues(value)

  if (!localValue) return false

  // Aceita receber o valor como string, número ou array com todos os dígitos
  const isString = typeof localValue === 'string'
  const validTypes = isString || Number.isInteger(localValue) || Array.isArray(localValue)

  // Elimina valor em formato inválido
  if (!validTypes) return false

  // Filtro inicial para entradas do tipo string
  if (isString) {
    // Limita ao máximo de 18 caracteres, para CNPJ formatado
    if (localValue.length > 18) return false

    // Teste Regex para veificar se é uma string apenas dígitos válida
    const digitsOnly = /^\d{14}$/.test(localValue)
    // Teste Regex para verificar se é uma string formatada válida
    const validFormat = /^\d{2}.\d{3}.\d{3}\/\d{4}-\d{2}$/.test(localValue)

    // Se o formato é válido, usa um truque para seguir o fluxo da validação
    if (digitsOnly || validFormat) true
    // Se não, retorna inválido
    else return false
  }

  // Guarda um array com todos os dígitos do valor
  const match = localValue.toString().match(/\d/g)
  const numbers = Array.isArray(match) ? match.map(Number) : []

  // Valida a quantidade de dígitos
  if (numbers.length !== 14) return false

  // Elimina inválidos com todos os dígitos iguais
  const items = [...new Set(numbers)]
  if (items.length === 1) return false

  // Cálculo validador
  const calc = (x) => {
    const slice = numbers.slice(0, x)
    let factor = x - 7
    let sum = 0

    for (let i = x; i >= 1; i--) {
      const n = slice[x - i]
      sum += n * factor--
      if (factor < 2) factor = 9
    }

    const result = 11 - (sum % 11)

    return result > 9 ? 0 : result
  }

  // Separa os 2 últimos dígitos de verificadores
  const digits = numbers.slice(12)

  // Valida 1o. dígito verificador
  const digit0 = calc(12)
  if (digit0 !== digits[0]) return false

  // Valida 2o. dígito verificador
  const digit1 = calc(13)
  return digit1 === digits[1]
}

// Funcao que valida cpf
export const validarCpf = (value) => {
  $log.method('File: src/helpers/functions.js --validarCpf--')
  const cpf = clearStringValues(value)

  let soma = 0
  let resto

  if (cpf == "00000000000") return false

  if (cpf.length != 11 ||
    cpf == "00000000000" ||
    cpf == "11111111111" ||
    cpf == "22222222222" ||
    cpf == "33333333333" ||
    cpf == "44444444444" ||
    cpf == "55555555555" ||
    cpf == "66666666666" ||
    cpf == "77777777777" ||
    cpf == "88888888888" ||
    cpf == "99999999999")
      return false

  for (let i=1; i<=9; i++) soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i)
  resto = (soma * 10) % 11

  if ((resto == 10) || (resto == 11))  resto = 0
  if (resto != parseInt(cpf.substring(9, 10)) ) return false

  soma = 0
  for (let i = 1; i <= 10; i++) soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i)

  resto = (soma * 10) % 11

  if ((resto == 10) || (resto == 11))  resto = 0
  if (resto != parseInt(cpf.substring(10, 11) ) ) return false

  return true
}

// Função que converte Hex em RGBA
export const convertHexToRGBA = (hexCode, opacity) => {
  let hex = hexCode.replace('#', '')

  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`
  }

  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)

  return `rgba(${r},${g},${b},${opacity})`
}

export const parseStringCurrencyToFloat = async (string) => {
  const currentValue = string.substring(2, string.length)
  .replace('.', '')
  .replace(',', '.')

  return parseFloat(currentValue)
}

//Função valida se há ponto, traço ou 'e' no input number decimal
export const preventDecimalKeyCodes = (keyCode) => {
  return !!(keyCode === 46 || keyCode === 45 || keyCode === 101)
}
