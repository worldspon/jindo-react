import 'whatwg-fetch';
import 'abortcontroller-polyfill';

export default class FetchAsync {
    static get(url) {
        return fetch(url, {
            method: 'GET',
            credentials: 'include'
        })
        .then(res => res)
        .catch(() => {throw new Error()})
    }

    static post(url, data) {
        return fetch(url, {
            method: 'POST',
            mode: 'cors', // no-cors, *cors, same-origin
            credentials: 'include', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        })
        .then(res => res)
        .catch((e) => {throw new Error(e)})
    }
}