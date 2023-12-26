import { SearchResults } from "@/typing"

async function fetchFromTmdb (url: URL, cacheTime?: number){
    // set default values for search params, to avoid unwanted content
    url.searchParams.set("include_adult", "false")
    url.searchParams.set("include_video", "false")
    url.searchParams.set("language", "en-US")
    url.searchParams.set("sort_by", "popularity.desc")
    url.searchParams.set("page", "1")

    const options: RequestInit = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.TMDB_KEY}`,
        },
        next: {
            revalidate: cacheTime || 60 * 60 * 24, // for caching use, refresh in 24 hours
        },
    };
        
    const response = await fetch(url, options);
    const data = (await response.json()) as SearchResults;
    return data
}
export const getUpcomingMovies = async () => {
    const url = new URL("https://api.themoviedb.org/3/movie/upcoming")
    return await fetchFromTmdb(url)
}