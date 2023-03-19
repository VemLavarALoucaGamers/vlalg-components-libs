// Funcao que centraliza o addEventListener
// wantsUntrusted é opcional
export const eventListener = async (event, func, wantsUntrusted = false) => {
  document.addEventListener(event, func, wantsUntrusted)
}

// Funcao async map
export const asyncMapPromise = async (itens, callback) => {
  // console.time('promise all')
  
  return await Promise.all(itens.map(async (item, index, array) => {
    // console.log('item -> ', item._id, array[index]._id)
    const newItem = await callback(item, index, array)

    return newItem
  }))

  // console.timeEnd('promise all')
}

// Funcao que verifica se é um obj vazio
export const objectIsEmpty = (obj) => {
  if (!itIsObject(obj)) return false
  return Object.keys(obj).length === 0 && obj.constructor === Object
}

// Funcao que retorna se um objeto possui uma quantidade de propriedades
export const objectHasQuantityProperties = (obj, count) => {
  if (Object.keys(obj).length === count) return true
  return false
}

// Funcao que retorna se é um objeto
export const itIsObject = obj => {
  if (obj.constructor === Object) return true
  return false
}

// Funcao que retorna se é uma string
export const itIsString = stg => {
  if (stg.constructor === String) return true
  return false
}

// Funcao que retorna se é um objeto vazio
export const isEmptyObject = obj => {
  if (Object.entries(obj).length === 0) return true
  return false
}

// Funcao que retorna se um objeto possui keys
export const objectHasArrayKeys = (obj, keys) => {
  const objkeys = Object.keys(obj)

  if (objkeys.length && keys.length) {
    const result = objkeys.every(key => {
      return keys.includes(key)
    })

    return result
  }

  return false
}

// Funcao que retorna se um objeto possui uma key x
export const objectHasKey = (obj, key) => {
  return !!Object.prototype.hasOwnProperty.call(obj, key)
}

// Funcao que retorna se é um array
export const itIsArray = item => {
  if (Array.isArray(item) && item instanceof Array && item.constructor === Array) return true
  return false
}

// Popular array
export const populateArray = (destiny = [], origin = []) => {
  let currentArray = destiny

  if (!destiny.length) {
    currentArray = origin
  } else {
    origin.forEach(item => {
      currentArray.push(item)
    })
  }

  return currentArray
}

// Funcao que retorna uma string JSON em Objeto
export const JsonParse = item => {
  return JSON.parse(item)
}

// Funcao que retorna um Objeto em string JSON
export const jsonStringify = item => {
  return JSON.stringify(item)
}

// Funcao que centraliza o setInterval
export const interval = (time, func) => {
  setInterval(func, time)
}

// Funcao que centraliza o setTimeout
export const timeout = (time, func) => {
  setTimeout(func, time)
}

// Funcao que obtem o media querie em js
export const getMediaQueries = () => {
  return window.innerWidth
}

// Funcao que verifica se a tela esta em um media querie x
export const isThisMediaQueries = (newMedia = '(min-width: 400px)') => {
  if (window.matchMedia(newMedia).matches) return true
  return false
}

// Funcao que verifica se é vazio e retorna booleano
export const isEmpty = value => {
  if (value) return false

  return true
}

// Funcao que transforma null em 0
export const fixNullToNumber = value => {
  if (value === null) return 0
  return value
}

// Funcao que redireciona para uma URL externa (_self, _parent, _top, _blank)
export const goExternalLocation = (url = '', type = '_blank') => {
  if (!url) return

  window.open(url, type)
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

// Funcao que valida email
export const isValidEmail = email => {
  const emailPattern = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{1,3})+$/

  return emailPattern.test(email)
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

// Funcao seta a role local
export const setLocalRole = role => {
  localStorage.setItem('system_role', role)
}

// Funcao remove a role local
export const removeLocalRole = () => {
  localStorage.removeItem('system_role')
}

// Funcao retorna a role local
export const getLocalRole = () => {
  return localStorage.getItem('system_role')
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

// Função que pega o TimezoneOffset do usuário
export const getTimezoneOffset = () => {
  return new Date().getTimezoneOffset()
}

// Função que retorna as letras iniciais da string
export const initials = (string) => {
  const words = string.split(/[\s-]+/)
  return words.map(word => word.substr(0, 1)).join('').substr(0, 2).toUpperCase()
}

// Função que elimina qualquer caracter especial da string
export const clearStringValues = (string) => {
  if (string) return string.replace(/[^\w\s]/gi, '')
}

// Funcao que valida cnpj
export const validarCNPJ = (value) => {
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
  const cpf = clearStringValues(value)

  let soma = 0
  let resto

  if (cpf === '00000000000') return false

  if (cpf.length !== 11 ||
    cpf === '00000000000' ||
    cpf === '11111111111' ||
    cpf === '22222222222' ||
    cpf === '33333333333' ||
    cpf === '44444444444' ||
    cpf === '55555555555' ||
    cpf === '66666666666' ||
    cpf === '77777777777' ||
    cpf === '88888888888' ||
    cpf === '99999999999') return false

  for (let i=1; i<=9; i++) soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i)
  resto = (soma * 10) % 11

  if ((resto === 10) || (resto === 11)) resto = 0
  if (resto !== parseInt(cpf.substring(9, 10)) ) return false

  soma = 0
  for (let i = 1; i <= 10; i++) soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i)

  resto = (soma * 10) % 11

  if ((resto === 10) || (resto === 11))  resto = 0
  if (resto !== parseInt(cpf.substring(10, 11) ) ) return false

  return true
}

// Funcao que simplifica o for...in (mesmo que usar for), tem acesso ao index do array
// Realiza loop em index nao numericos
// Recebe uma funcao de callback como segundo parametro
export const forIn = async (value, callback) => {
  try {
    for (const i in value) {
      await callback(value, i)
    }
  } catch (error) {
    console.log('Error in helper forIn')
  }
}

// Funcao que simplifica o for...of (mesmo que usar forEach), nao tem acesso ao index do array igual ao forEach((v, i) => ...)
// Nao realiza loop em index nao numericos
// Recebe uma funcao de callback como segundo parametro
export const forOf = async (value, callback) => {
  try {
    for (const i of value) {
      await callback(value, i)
    }
  } catch (error) {
    console.error('Error in helper forOf')
  }
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
  const currentValue = string.substring(2, string.length).replace('.', '').replace(',', '.')

  return parseFloat(currentValue)
}

//Função valida se há ponto, traço ou 'e' no input number decimal
export const preventDecimalKeyCodes = (keyCode) => {
  return !!(keyCode === 46 || keyCode === 45 || keyCode === 101)
}

//Função valida se um numero
export const isNumber = (value = '') => {
  return !!(value && typeof value === 'number' && !isNaN(value))
}
