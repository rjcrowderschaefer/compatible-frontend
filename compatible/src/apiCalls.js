const URL = "http://localhost:8000";

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

export const feedbackLoader = async () => {
    const response = await fetch(URL + "/api/feedbacks/");
    const contacts = await response.json()
    return contacts;
}