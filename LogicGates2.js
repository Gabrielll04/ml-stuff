class LogicGates {
    constructor() {
        this._Initialize()
    }

    rand_sort() {
        return Math.random()
    }

    Sigmoid(x) {
        return 1 / (1 + (Math.exp(-x)))
    }

    MSE(w1, w2, b) {
        let sum = 0
        for (let i = 0; i < this._train_data.length; i++) {
            const x1 = this._train_data[i].x1
            const x2 = this._train_data[i].x2
            const y = this.Sigmoid(x1 * w1 + x2 * w2 + b)
            const d = y - this._train_data[i].y
            sum += d*d
        }

        return sum /= this._train_data.length
    }

    _Initialize() {
        let w1 = this.rand_sort()
        let w2 = this.rand_sort()
        let b = this.rand_sort()

        this._train_data = [
            {x1: 1, x2: 1, y: 1},
            {x1: 1, x2: 0, y: 1},
            {x1: 0, x2: 1, y: 1},
            {x1: 0, x2: 0, y: 0} 
        ]

        let eps = 1e-1
        let rate = 1e-1

        for (let i = 0; i < 10*1000; i++) {
            const c = this.MSE(w1, w2, b)
            console.log(`cost = ${this.MSE(w1, w2, b)}, w1 = ${w1}, w2 = ${w2}, b = ${b}`)
            const dw1 = (this.MSE(w1 + eps, w2, b) - c)/eps
            const dw2 = (this.MSE(w1, w2 + eps, b) - c)/eps
            const db = (this.MSE(w1, w2, b + eps) - c)/eps
            w1 -= rate*dw1
            w2 -= rate*dw2
            b -= rate*db
        }

        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 2; j++) {
                console.log(`${i} | ${j} = ${this.Sigmoid(i*w1 + j*w2 + b)}`)
            }
        }
    }
}

new LogicGates()