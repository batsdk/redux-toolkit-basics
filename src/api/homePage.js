import ajax from "./ajax"

export const getPopularMovies = async (lang="en-US", page=1) => {
    const res = await ajax.get(`/movie/popular?language=${lang}&page=${page}`)
    return res.data;
}