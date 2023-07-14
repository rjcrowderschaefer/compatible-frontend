const URL = "http://localhost:8000";

export const categoriesLoader = async () => {
    const response = await fetch(URL + "/api/categories/");
    const categories = await response.json()
    return categories;
}

export const contactLoader = async () => {
    const response = await fetch(URL + "/api/feedbacks/");
    const contacts = await response.json()
    return contacts;
}