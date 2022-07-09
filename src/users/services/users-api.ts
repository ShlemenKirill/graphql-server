import { RESTDataSource } from 'apollo-datasource-rest';
import { IRegisterRequest } from 'interfaces/requests';

class UsersApi extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = process.env.users_url;
	}
	getUser(userId: string) {
		return this.get(`/${userId}`);
	}
	async login(email: string, password: string) {
		const body = {
			email,
			password,
		};
		return await this.post(`/login`, body);
	}
	async register(body: IRegisterRequest) {
		const { _id, ...rest } = await this.post(`/register`, body);
		return {
			id: _id,
			...rest,
		};
	}
}

export default UsersApi;
