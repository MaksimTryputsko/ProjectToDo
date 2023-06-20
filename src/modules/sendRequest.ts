const URL = 'https://jsonplaceholder.typicode.com/';

export async function sendRequest<RESULT, BODY>(
  method: string,
  path: string,
  body?: BODY | null
): Promise<RESULT> {
  const bodyControl: string | undefined = body
    ? JSON.stringify(body)
    : undefined;
  const response = await fetch(`${URL}${path}`, {
    method,
    body: bodyControl,
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });
  const json = await response.json();
  return json;
}
