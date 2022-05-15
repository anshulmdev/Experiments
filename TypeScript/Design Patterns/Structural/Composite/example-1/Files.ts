export class Files {
    protected name: string
    protected price: number
    constructor (name: string, price: number) {
        this.name = name;
        this.price = price
    }
    getTotal() {
        return this.price;
    }
    print() {
        console.log(`${this.name} has price $${this.price}`)
    }
}