//AND
const ANDinputs = [1, 1]
const ANDthreshold  = 1

function PerceptronAnd(inputs, threshold) {
  let sum = 0

  for (let i = 0; i < inputs.length; i++) {
    const x = inputs[i]
    const w = 1
    
    sum += (w * x)
  }

  if (sum <= threshold) {
    return 0
  } else {
    return 1
  }
} 

//OR 
const ORinputs = [0, 0]
const ORthreshold = 0.5

function PerceptronOR(inputs, threshold) {
  let sum = 0

  for (let i = 0; i < inputs.length; i++) {
    const x = inputs[i]
    const w = 1

    sum += (w * x)
  }

  if (sum <= threshold) {
      return 0
    } else {
      return 1
    }
}

const ANDresult = PerceptronAnd(ANDinputs, ANDthreshold)
console.log(`AND gate with ${ANDinputs} inputs: ${ANDresult}`)

const ORresult = PerceptronOR(ORinputs, ORthreshold)
console.log(`OR gate with ${ORinputs} inputs: ${ORresult}`)