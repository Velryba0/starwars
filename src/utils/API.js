export const starshipData = async () => {
    try {
        const response = await fetch('http://swapi.dev/api/starships/');
        const starships = await response.json();
        
        return starships
    } catch (error) {
        console.log('Error al obtener la información', error);
    }
}