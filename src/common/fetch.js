import 'whatwg-fetch';
import 'abortcontroller-polyfill';

export default class FetchAsync {
    static get(url, signal = null) {
        return fetch(url, {
            signal: signal,
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Pragma': 'no-cache',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res)
        .catch(() => {throw new Error('오류가 발생하였습니다\n다시 시도해주세요.')})
    }

    static post(url, data) {
        return fetch(url, {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res)
        .catch((e) => {
            throw new Error('catch')
        })
    }

    static delete(url) {
        return fetch(url, {
            method: 'DELETE',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res)
        .catch(() => {throw new Error()})
    }
}