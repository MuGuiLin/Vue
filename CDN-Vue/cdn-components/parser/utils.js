export function isType(arg, type) {
  return Object.prototype.toString.call(arg) === '[object ' + type + ']'
}

export function isString(arg) {
  return isType(arg, 'String');
}

export function removeProperty(obj) {
  Object.keys(obj).forEach(item => {
    if (obj[item] === '' || obj[item] === undefined || obj[item] === null || obj[item] === 'null') delete obj[item]
  })
  return obj
}

