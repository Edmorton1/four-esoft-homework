export const generateISBN = () => {
  const nums = String(Math.floor(Math.random() * 10**13))
  return nums.split('').map((e, i) => {
    if (Math.random() > 0.6 && i !== 0) {
      return `-${e}`
    } else {
      return e
    }
  }).join('')
}

console.log(generateISBN())