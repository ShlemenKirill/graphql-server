import { RESTDataSource } from 'apollo-datasource-rest';
import { IGenreCreateRequest } from 'interfaces/requests';
import { IContext } from 'interfaces/models';

class GenresApi extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = process.env.genres_url;
	}
	async getGenres() {
		return await this.get('/');
	}
	async getGenre(genreId: string) {
		return await this.get(`/${genreId}`);
	}
	async createGenre(body: IGenreCreateRequest, context: IContext) {
		return await this.post(`/`, body, {
			headers: { Authorization: `Bearer ${context.context.token}` },
		});
	}
	async updateGenre(genreId: string, body: IGenreCreateRequest, context: IContext) {
		return await this.put(`/${genreId}`, body, {
			headers: { Authorization: `Bearer ${context.context.token}` },
		});
	}
	async deleteGenre(genreId: string, context: IContext) {
		return await this.delete(`/${genreId}`, genreId, {
			headers: { Authorization: `Bearer ${context.context.token}` },
		});
	}
}

export default GenresApi;
