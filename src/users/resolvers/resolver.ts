const usersResolvers = {
	Query: {
		user: async (_: any, { userId }: any, { dataSources }: any) => {
			const { _id, ...rest } = await dataSources.usersAPI.getUser(userId);
			return {
				id: _id,
				...rest,
			};
		},
	},
	Mutation: {
		jwt: async (_: any, { email, password }: any, { dataSources }: any) => {
			const data = await dataSources.usersAPI.login(email, password);
			const { jwt } = data;
			return data;
		},
		register: async (
			_: any,
			{ firstName, lastName, email, password, favouriteArtistIds }: any,
			{ dataSources }: any,
		) => {
			const body = {
				firstName,
				lastName,
				email,
				password,
			};
			return await dataSources.usersAPI.register(body);
		},
	},
};

export default usersResolvers;
