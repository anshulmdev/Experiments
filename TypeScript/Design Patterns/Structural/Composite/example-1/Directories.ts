
type Files = {
    Total: number
    print: () => {}
}

class Directories {
    protected name: string
    protected collection: Files[]

    constructor (name: string, collection = [] ) {
        this.name = name;
        this.collection = collection;
    }
    get Total():number {
        return +this.collection.reduce((total, item) => total + item.Total, 0)
    }
    print() {
        console.log(`${this.name.toUpperCase()}`)
        this.collection.forEach((e) => e.print())
    }
}

export default Directories