import { RESTDataSource } from 'apollo-datasource-rest';
import { ITrackRequest } from 'interfaces/requests';
import { IContext } from 'interfaces/models';

class TracksApi extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = process.env.tracks_url;
	}
	async getTracks() {
		return await this.get('/');
	}
	async getTrack(trackId: string) {
		return await this.get(`/${trackId}`);
	}
	async createTrack(body: ITrackRequest, context: IContext) {
		return await this.post('/', body, {
			headers: { Authorization: `Bearer ${context.context.token}` },
		});
	}
	async updateTrack(trackId: string, body: ITrackRequest, context: IContext) {
		return await this.put(`/${trackId}`, body, {
			headers: { Authorization: `Bearer ${context.context.token}` },
		});
	}
	async deleteTrack(trackId: string, context: IContext) {
		return await this.delete(`/${trackId}`, trackId, {
			headers: { Authorization: `Bearer ${context.context.token}` },
		});
	}
}

export default TracksApi;
