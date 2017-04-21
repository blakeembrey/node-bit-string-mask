export function mask (str: string, val: number) {
  let res = ''

  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i)

    if (code >= 65 && code <= 90) {
      res += val & 1 ? String.fromCharCode(code) : String.fromCharCode(code + 32)
      val >>>= 1
    } else if (code >= 97 && code <= 122) {
      res += val & 1 ? String.fromCharCode(code - 32) : String.fromCharCode(code)
      val >>>= 1
    } else {
      res += String.fromCharCode(code)
    }

    if (val === 0) {
      return res + str.substr(i + 1)
    }
  }

  return res
}
