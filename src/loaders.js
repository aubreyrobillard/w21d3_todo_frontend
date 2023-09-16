import url from "./url";

// index loader
export const indexLoader= async () => {
    // make ip call to backend
    const reponse = await fetch(url)
    // turn response into a js object
    const todos = await reponse.json()
    // return js object to the index component 
    return todos
}

// Show loader
export const ShowLoader= async ({params}) => {
    // grab the id from params
    const id = params.id
    // make api call to backend
    const response = await fetch(url + id)
    // turn response into a js object
    const todo = await response.json()
    // return js object so the show object can use it 
    return todo
}