const URL: string ='https://jsonplaceholder.typicode.com/'

export function sendRequest<RESULT, BODY> (method: string, path: string, body?: BODY | null): Promise<RESULT> {
    const bodyControl: string | undefined = body ? JSON.stringify(body) : undefined
    return fetch(`${URL}${path}`, {
        method,
        body: bodyControl,
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })
    .then((response) => response.json())
    .catch (err => console.log(`sorry problem with server, try later.`))
}