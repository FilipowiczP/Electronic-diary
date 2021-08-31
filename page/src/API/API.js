export function adminFeatch(formLogin) {
    return fetch("http://localhost:9999/admin", {
        method: "GET",
        mode: "cors",
        body: JSON.stringify(formLogin),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
}