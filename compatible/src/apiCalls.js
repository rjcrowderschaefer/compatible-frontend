const URL = "https://compatible-backend.onrender.com"

export const categoriesLoader = async () => {
    const response = await fetch(URL + "/api/categories/");
    const categories = await response.json()
    return categories;
}

export const categoriesDetailLoader = async (id) => {
    const response = await fetch(URL + "/api/categories/" + id + "/");
    const categories = await response.json()
    return categories;
}

export const listingsLoader = async () => {
    const response = await fetch(URL + "/api/listings/");
    const listings = await response.json()
    return listings;
}

export const listingsDetailLoader = async (id) => {
    const response = await fetch(URL + "/api/listings/" + id + "/");
    const listings = await response.json()
    return listings;
}

export const listingsPostLoader = async (listingForm) => {
    const response = await fetch(URL + "/api/listings/",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(listingForm)
        });
    const data = await response.json()
}

export const listingsDeleteLoader = async (id) => {
    const response = await fetch(URL + "/api/listings/" + id + "/",
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        });
    const listings = await response.json()
    return listings;
}

export const listingsEditLoader = async (id, listing) => {
    const response = await fetch (URL + "/api/listings/" + id + "/",
    {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(listing)
    });
    const data = await response.json()
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

export const feedbackPostLoader = async (contactForm) => {
    const response = await fetch(URL + "/api/feedbacks/",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contactForm)
        });
    const data = await response.json()
}