const inputs = [{x: 1, w: 6}, {x: 1, w: 2}, {x: 1, w:2}]
const threshold = 5
let sum = 0

function Perceptron(inputs, threshold) {
  for (let i = 0; i < inputs.length; i++) {
    const x = inputs[i].x
    const w = inputs[i].w 

    sum += (w * x)
  }

  if (sum <= threshold) {
    return 0
  } else {
    return 1
  }
}

const result = Perceptron(inputs, threshold)
console.log(result)