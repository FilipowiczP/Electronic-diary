export function adminFeatch(formLogin) {
    return fetch("http://localhost:9999/admin", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(formLogin),
        headers: { 'Content-Type': 'application/json' }
    })
}