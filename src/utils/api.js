class Api {
  constructor({ baseUrl, api_key, headers }) {
    this._baseUrl = baseUrl;
    this._api_key = api_key;
    this._headers = headers;
  }
  _checkResponse(result) {
    return result.ok
      ? result.json()
      : Promise.reject(`Ошибка: ${result.status}`);
  }

  _request(endpoint, options) {
    return fetch(`${this._baseUrl}${endpoint}`, options).then(
      this._checkResponse
    );
  }

  trendGif({ limit = 12, offset }) {
    return this._request(
      `/v1/gifs/trending?api_key=${this._api_key}&limit=${limit}&offset=${offset}`,
      {
        method: 'GET',
        headers: this._headers,
      }
    );
  }

  searchGif({ query, limit = 12, offset = 0 }) {
    return this._request(
      `/v1/gifs/search?api_key=${this._api_key}&q=${query}&limit=${limit}&offset=${offset}`,
      {
        method: 'GET',
        headers: this._headers,
      }
    );
  }

  randomGif() {
    return this._request(`/v1/gifs/random?api_key=${this._api_key}&rating=g`, {
      method: 'GET',
      headers: this.headers,
    });
  }
}

const api = new Api({
  baseUrl: 'https://api.giphy.com',
  api_key: '3nWXGvzZVDGqAQlW9AiBmgqdytC8XMyS',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
