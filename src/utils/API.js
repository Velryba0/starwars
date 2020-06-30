export const starshipData = async () => {
    try {
        const response = await fetch('http://swapi.dev/api/starships/');
        const starships = await response.json();
        console.log(starships)
        return starships
    } catch (error) {
        console.log('Error al obtener la información', error);
    }
}