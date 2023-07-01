class Api {
	constructor({ baseUrl, api_key }) {
		this._baseUrl = baseUrl;
		this._api_key = api_key;
	}
	_checkResponse(result) {
		return result.ok
			? result.json()
			: Promise.reject(`Ошибка: ${result.status}`);
	}

	_request(endpoint) {
		return fetch(`${this._baseUrl}${endpoint}`).then(this._checkResponse);
	}

	trendGif() {
		return this._request(`/v1/gifs/trending?api_key=${this._api_key}&limit=12`);
	}

	searchGif(query) {
		return this._request(`/v1/gifs/search?api_key=${this._api_key}&q=${query}&limit=12`);
	}

	randomGif() {
		return this._request(`v1/gifs/random?api_key=${this._api_key}&limit=1`);
	}
}

const api = new Api({
	baseUrl: 'https://api.giphy.com',
	api_key: '3nWXGvzZVDGqAQlW9AiBmgqdytC8XMyS',
});

export default api;
