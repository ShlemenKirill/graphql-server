import { RESTDataSource } from 'apollo-datasource-rest';
import { IArtistRequest } from 'interfaces/requests';
import { IContext } from 'interfaces/models';

class ArtistsAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = process.env.artists_url;
	}
	async getArtists() {
		return await this.get('/');
	}
	async getArtist(artistId: string) {
		return await this.get(`/${artistId}`);
	}
	async createArtist(body: IArtistRequest, context: IContext) {
		return await this.post('/', body, {
			headers: { Authorization: `Bearer ${context.context.token}` },
		});
	}
	async updateArtist(artistId: string, body: IArtistRequest, context: IContext) {
		return await this.put(`/${artistId}`, body, {
			headers: { Authorization: `Bearer ${context.context.token}` },
		});
	}
	async deleteArtist(artistId: string, context: IContext) {
		return await this.delete(`/${artistId}`, artistId, {
			headers: { Authorization: `Bearer ${context.context.token}` },
		});
	}
}

export default ArtistsAPI;
