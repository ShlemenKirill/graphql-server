import { RESTDataSource } from 'apollo-datasource-rest';
import { IBandRequest } from 'interfaces/requests';
import { IContext } from 'interfaces/models';

class BandsAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = process.env.bands_url;
	}
	async getBands() {
		return await this.get('/');
	}
	async getBand(bandId: string) {
		return await this.get(`/${bandId}`);
	}
	async createBand(body: IBandRequest, context: IContext) {
		return await this.post('/', body, {
			headers: { Authorization: `Bearer ${context.context.token}` },
		});
	}
	async updateBand(bandId: string, body: IBandRequest, context: IContext) {
		return await this.put(`/${bandId}`, body, {
			headers: { Authorization: `Bearer ${context.context.token}` },
		});
	}
	async deleteBand(bandId: string, context: IContext) {
		return await this.delete(`/${bandId}`, bandId, {
			headers: { Authorization: `Bearer ${context.context.token}` },
		});
	}
}

export default BandsAPI;
