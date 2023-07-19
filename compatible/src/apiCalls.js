// const URL = "http://localhost:8000";
const URL = "https://compatible-backend.onrender.com"

export const categoriesLoader = async () => {
    const response = await fetch(URL + "/api/categories/");
    const categories = await response.json()
    return categories;
}

export const listingsLoader = async () => {
    const response = await fetch(URL + "/api/listings/");
    const listings = await response.json()
    return listings;
}

export const featuredListsLoader = async () => {
    const response = await fetch(URL + "/api/featuredlists/");
    const featuredLists = await response.json()
    return featuredLists;
}

export const feedbackLoader = async () => {
    const response = await fetch(URL + "/api/feedbacks/");
    const contacts = await response.json()
    return contacts;
}