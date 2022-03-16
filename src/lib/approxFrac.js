const gcd = (e, x, y) => y < e ? x : gcd(e, y, x % y)
const gcde = (e, x, y) => gcd(e, Math.abs(x), Math.abs(y))
const approxFrac1 = (e, n) => {
  const c = gcde(e, 1, n)
  return {
    n: Math.floor(n / c),
    d: Math.floor(1 / c)
  }
}



// alternative using Stern-Brocot
// https://stackoverflow.com/questions/5124743/algorithm-for-simplifying-decimal-to-fractions

const error = 0.00000001

function approxFrac2 (x) {

  let lowerN = 0
  let lowerD = 1

  let upperN = 1
  let upperD = 1

  while (true) {
    
    let middleN = lowerN + upperN
    let middleD = lowerD + upperD

    if (middleD * (x + error) < middleN) {
      upperN = middleN
      upperD = middleD
    } else if (middleD * (x - error) > middleN) {
      lowerN = middleN
      lowerD = middleD
    } else {
      return {
        n: middleN,
        d: middleD
      }
    }
  }
}

export default approxFrac2