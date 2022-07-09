import { RESTDataSource } from 'apollo-datasource-rest';
import { IAlbumRequest } from 'interfaces/requests';
import { IContext } from 'interfaces/models';

class AlbumsApi extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = process.env.albums_url;
	}
	async getAlbums() {
		return await this.get('/');
	}
	async getAlbum(albumId: string) {
		return await this.get(`/${albumId}`);
	}
	async createAlbum(body: IAlbumRequest, context: IContext) {
		return await this.post('/', body, {
			headers: { Authorization: `Bearer ${context.context.token}` },
		});
	}
	async updateAlbum(albumId: string, body: IAlbumRequest, context: IContext) {
		return await this.put(`/${albumId}`, body, {
			headers: { Authorization: `Bearer ${context.context.token}` },
		});
	}
	async deleteAlbum(albumId: string, context: IContext) {
		return await this.delete(`/${albumId}`, albumId, {
			headers: { Authorization: `Bearer ${context.context.token}` },
		});
	}
}

export default AlbumsApi;
