const BASE_MOVIES_URL_API = "http://localhost:3001/api/movies"

export const getMovies = async () => {
    try {
        const RESPONSE = await fetch(BASE_MOVIES_URL_API)
        const JSON = await RESPONSE.json();
        return JSON
    } catch (error) {
        console.error("Error while fetching movies");
        return Promise.reject("Error while fetching movies")
    }
}