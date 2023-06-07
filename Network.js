class Network {
    constructor() {
        this._Initialize()
    }


    rand_float() {
        return Math.random() * 10
    }

    MSR(w) {
        let sum = 0
        for (let i = 0; i < this.training_data.length; i++) {
            const x = this.training_data[i].x
            const expected = this.training_data[i].y
            const y = (x * w)
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
        const eps = 1e-3
        const rate = 1e-3

        console.log(this.MSR(this._w))
        for  (let i = 0; i < 500; i++) {
            const dcost = (this.MSR(this._w + eps) - this.MSR(this._w)) / eps //using finite difference

            this._w -= rate*dcost
            console.log(`cost: ${Number(this.MSR(this._w).toFixed(6))}, w = ${this._w}`)
        }
        console.log('----------------------------')
        console.log(this._w)
    }
}

new Network()