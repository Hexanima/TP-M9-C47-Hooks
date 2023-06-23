const apikey = "b2eac709";
const BASE_OMDB_URL_API = `http://www.omdbapi.com/?apikey=${apikey}`
//http://www.omdbapi.com/?apikey=b2eac709&s=asdasdasdasdasd
export const getMoviesFromQuery = async (search) => {
    try {
        const RESPONSE = await fetch(`${BASE_OMDB_URL_API}&s=${search}`)
        const JSON = await RESPONSE.json();
        return JSON
        
    } catch (error) {
        console.error("Error while fetching movies");
        return Promise.reject("Error while fetching movies")
    }
}