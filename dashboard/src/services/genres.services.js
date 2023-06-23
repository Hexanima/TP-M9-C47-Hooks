const BASE_GENRES_URL_API = "http://localhost:3001/api/genres"

export const getGenres = async () => {
    try {
        const RESPONSE = await fetch(BASE_GENRES_URL_API)
        const JSON = await RESPONSE.json();
        return JSON
    } catch (error) {
        console.error("Error while fetching genres");
        return Promise.reject("Error while fetching genres")
    }
}

export const getMoviesByGenreId = async id => {
    try {
        const RESPONSE = await fetch(`${BASE_GENRES_URL_API}/${id}/movies`)
        const JSON = await RESPONSE.json();
        return JSON
    } catch (error) {
        console.error("Error while fetching movies");
        return Promise.reject("Error while fetching movies")
    }
}