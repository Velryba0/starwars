export const starshipData = async () => {
    try {
        const response = await fetch('http://swapi.dev/api/starships/');
        const starships = await response.json();
        
        return starships
    } catch (error) {
        console.log('Error al obtener la información', error);
    }
}

export const starshipDataPages = async ({ pag }) => {
    console.log(pag)
    try {
        const response = await fetch(`http://swapi.dev/api/starships/?page=${pag}`);
        const starships = await response.json();
        
        return starships
    } catch (error) {
        console.log('Error al obtener la información', error);
    }
}

export const allStarships1 = async () => {
    try {
        const response = await fetch('http://swapi.dev/api/starships/?page=1');
        const starships = await response.json();
        
        return starships.results
    } catch (error) {
        console.log('Error al obtener la información', error);
    }
}

export const allStarships2 = async () => {
    try {
        const response = await fetch('http://swapi.dev/api/starships/?page=2');
        const starships = await response.json();
        
        return starships.results
    } catch (error) {
        console.log('Error al obtener la información', error);
    }
}
export const allStarships3 = async () => {
    try {
        const response = await fetch('http://swapi.dev/api/starships/?page=3');
        const starships = await response.json();
        
        return starships.results
    } catch (error) {
        console.log('Error al obtener la información', error);
    }
}
export const allStarships4 = async () => {
    try {
        const response = await fetch('http://swapi.dev/api/starships/?page=4');
        const starships = await response.json();
        
        return starships.results
    } catch (error) {
        console.log('Error al obtener la información', error);
    }
}


