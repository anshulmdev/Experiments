interface DB {
    get (id: number): string
    set (id: number, value: string): void
}


class Database implements DB {
    private myData: Record <number, string> = {}

    get (id: number): string {
        return this.myData[id]
    }

    set (id: number, value: string) {
        this.myData[id] = value
    }
}


const database1 = new Database();
database1.set(10, "Ten");
database1.set(10, "10");
// database1.myData[10] = "new Ten" => Error
console.log(database1.get(10))