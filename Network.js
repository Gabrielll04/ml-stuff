class Network {
    constructor() {
        this._Initialize()
    }


    rand_float() {
        return Math.random() * 10
    }

    MSR(w, b) {
        let sum = 0
        for (let i = 0; i < this.training_data.length; i++) {
            const x = this.training_data[i].x
            const expected = this.training_data[i].y
            const y = (x * w + b)
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

        this._w = this.rand_float()
        this._b = this.rand_float()

        const eps = 1e-3
        const rate = 1e-3

        console.log(this.MSR(this._w, this._b))
        for  (let i = 0; i < 500; i++) {
            const dcost = (this.MSR(this._w + eps, this._b) - this.MSR(this._w, this._b)) / eps //using finite difference
            const bcost = (this.MSR(this._w, this._b + eps) - this.MSR(this._w, this._b)) / eps
            this._w -= rate*dcost
            this._b -= rate*bcost
            console.log(`cost: ${Number(this.MSR(this._w, this._b)).toFixed(6)}, w = ${this._w}, b = ${this._b}`)
        }
        console.log('----------------------------')
        console.log(`w = ${this._w}, b = ${this._b}`)
    }
}

new Network()