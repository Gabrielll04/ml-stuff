//special thanks to Tsoding! This code has nine parameters. 

class Network {
    constructor() {
        this._train_data = [
            {x1: 1, x2: 1, y: 0},
            {x1: 1, x2: 0, y: 0},
            {x1: 0, x2: 1, y: 0},
            {x1: 0, x2: 0, y: 1} 
        ]

        this._Initialize()
    }

    Sigmoid(x) {
        return 1 / (1 + (Math.exp(-x)))
    }

    Cost(m) {
        let sum = 0
        for (let i = 0; i < this._train_data.length; i++) {
            const x1 = this._train_data[i].x1
            const x2 = this._train_data[i].x2
            const y = this.Forward(m, x1, x2)
            const d = y - this._train_data[i].y
            sum += d * d
        }
        return sum / this._train_data.length
    }

    Forward(m, x1, x2) {
        let a = this.Sigmoid(m.or_w1 * x1 + m.or_w2 * x2 + m.or_b)
        let b = this.Sigmoid(m.nand_w1 * x1 + m.nand_w2 * x2 + m.nand_b) // a and b are your first layer, watch the video Machine Learning in C (episode 1) by Tsoding for more!
        return this.Sigmoid(a * m.and_w1 + b * m.and_w2 + m.and_b) // adding non-linearity to the neural network
    }

    RandSort() {
        return Math.random()
    }

    RandXor() {
        let m = {}
        m.or_w1 = this.RandSort()
        m.or_w2 = this.RandSort()
        m.or_b = this.RandSort()
        m.nand_w1 = this.RandSort()
        m.nand_w2 = this.RandSort()
        m.nand_b = this.RandSort()
        m.and_w1 = this.RandSort()
        m.and_w2 = this.RandSort()
        m.and_b = this.RandSort()

        return m
    }

    Learn(m, g) {
        m.or_w1 -= this._rate*g.or_w1
        m.or_w2 -= this._rate*g.or_w2
        m.or_b -= this._rate*g.or_b
        m.nand_w1 -= this._rate*g.nand_w1
        m.nand_w2 -= this._rate*g.nand_w2
        m.nand_b -= this._rate*g.nand_b
        m.and_w1 -= this._rate*g.and_w1
        m.and_w2 -= this._rate*g.and_w2
        m.and_b -= this._rate*g.and_b

        return m
    }

    FiniteDiff(m) {
        let g = {} //gradient, is similar to m, but its values are given a diff proximation function
        let saved //this variable will store the originial value of the variables to modify temporarily

        const c = this.Cost(m)

        saved = m.or_w1 //in this case, we preserve the value of m.or_w1 before edit it
        m.or_w1 += this._eps //see? we are editing the variable
        g.or_w1 = (this.Cost(m) - c) / this._eps
        m.or_w1 = saved

        saved = m.or_w2
        m.or_w1 += this._eps
        g.or_w2 = (this.Cost(m) - c) / this._eps
        m.or_w1 = saved

        saved = m.or_b
        m.or_b += this._eps
        g.or_b = (this.Cost(m) - c) / this._eps
        m.or_b = saved

        saved = m.nand_w1
        m.nand_w1 += this._eps
        g.nand_w1 = (this.Cost(m) - c) / this._eps
        m.nand_w1 = saved

        saved = m.nand_w2
        m.nand_w2 += this._eps
        g.nand_w2 = (this.Cost(m) - c) / this._eps
        m.nand_w2 = saved

        saved = m.nand_b
        m.nand_b += this._eps
        g.nand_b = (this.Cost(m) - c) / this._eps
        m.nand_b = saved

        saved = m.and_w1
        m.and_w1 += this._eps
        g.and_w1 = (this.Cost(m) - c) / this._eps
        m.and_w1 = saved

        saved = m.and_w2
        m.and_w2 += this._eps
        g.and_w2 = (this.Cost(m) - c) / this._eps
        m.and_w2 = saved

        saved = m.and_b
        m.and_b += this._eps
        g.and_b = (this.Cost(m) - c) / this._eps
        m.and_b = saved

        return g
    }

    _Initialize() {
        this._eps = 1e-1
        this._rate = 1e-1

        let m = this.RandXor()

        console.log(JSON.stringify(this.Cost(m)))
        for (let i = 0; i < 200*1000; i++) {
            let g = this.FiniteDiff(m)
            m = this.Learn(m, g)
            console.log(JSON.stringify(this.Cost(m)))
        }

        console.log("________________________________________")

        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 2; j++) {
                console.log(`${i} ^ ${j} = ${this.Forward(m, i, j)}`)
            }
        }
    }
}
new Network()