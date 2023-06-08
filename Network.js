class Network {
    constructor() {
        this._Initialize()
    }


    rand_float() {
        return Math.random()
    }

    MSR(w, b) {
        let sum = 0
        for (let i = 0; i < this.training_data.length; i++) {
            const x = this.training_data[i].x
            const expected = this.training_data[i].y
            const y = x * w + b 
            const d = y - expected
            sum += d * d
        }
        sum /= this.training_data.length
        return sum 
    }

    _Initialize() {
        this.training_data = [
            {x: 0.0000, y: 0.00000},
            {x: 1.0000, y: 2.00000},
            {x: 2.0000, y: 4.00000},
            {x: 3.0000, y: 6.00000},
            {x: 4.0000, y: 8.00000},
            {x: 5.0000, y: 10.0000},
            {x: 6.0000, y: 12.0000},
            {x: 7.0000, y: 14.0000},
            {x: 8.0000, y: 16.0000},
        ]

        let w = this.rand_float()*10
        let b = this.rand_float()*5

        const eps = 1e-3
        const rate = 1e-3

        console.log(this.MSR(w, b))
        for  (let i = 0; i < 500; i++) {
            const c = this.MSR(w, b)
            const dcost = (this.MSR(w + eps, b) - c)/eps //using finite difference
            const bcost = (this.MSR(w, b + eps) - c)/eps
            w -= rate*dcost
            b -= rate*bcost
            console.log(`cost: ${this.MSR(w, b)}, w = ${w}, b = ${b}`)
        }
        console.log('----------------------------')
        console.log(`w = ${w}, b = ${b}`)
    }
}

new Network()