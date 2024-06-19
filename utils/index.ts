
export async function fetchCars() {
    const headers = {
        'x-rapidapi-key': 'c348128281msh72c3e128372a28ap105f4ajsn469cb700696d',
        'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    try{
        const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
            headers: headers
        });

        const result = await response.json()

        return result
    } catch(error) {
        console.log(error)
    }
}