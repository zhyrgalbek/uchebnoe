import { url } from "../utils/Constants/Constants";
export async function fetch_api({ types }) {
    const response = await fetch(`${url}${types}`,
        {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=utf-8',
            },
        }
    )
    const data = await response.json();
    return data;
}