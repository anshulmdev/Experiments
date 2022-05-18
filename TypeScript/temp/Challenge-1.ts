
const houses = [
    { "name": "Atreides", "planets": "Calladan" },
    { "name": "Corrino", "planets": ["Kaitan", "Salusa Secundus"] },
    { "name": "Harkonnen", "planets": ["Giedi Prime", "Arrakis"] }
  ]

interface House {
    name: string,
    planets: string| string[]
}

interface HouseWithID {
    id: number
    name: string,
    planets: string| string[]
}

function findHouses(houses: string): HouseWithID[];
function findHouses(houses: string, filter: (house: House) => boolean): HouseWithID[];
function findHouses(houses: House[]): HouseWithID[];
function findHouses(houses: House[], filter: (house: House) => boolean): HouseWithID[];
function findHouses(arg1: string | House[], filter?: (house: House) => boolean): HouseWithID[] {
    const houses: House[] = typeof arg1 === 'string' ? JSON.parse(arg1) : arg1;

    return ( filter ? houses.filter(filter) : houses ).map((house) => ({
        id: houses.indexOf(house),
        ...house
    }))
}


console.log(findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides"));

console.log(findHouses(houses, ({ name }) => name === "Harkonnen"));