function sum(arr) {
  return arr.reduce( (prev, curr) => prev + curr, 0)
}

module.exports.sum = sum
