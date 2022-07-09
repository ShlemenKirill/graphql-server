import { IGenreCreateRequest } from 'interfaces/requests';
import { ICommonResponse, IItemResponse } from 'interfaces/responses';

const genresResolvers = {
	Query: {
		genres: async (_: any, __: any, { dataSources }: any) => {
			const data: ICommonResponse<IItemResponse> = await dataSources.genresAPI.getGenres();
			const { items } = data;
			return items.map((item) => {
				const { _id, ...rest } = item;
				return {
					id: _id,
					...rest,
				};
			});
		},
		genre: async (_: any, { genreId }: any, { dataSources }: any) => {
			const data: IItemResponse = await dataSources.genresAPI.getGenre(genreId);
			const { _id, ...rest } = data;
			return {
				id: _id,
				...rest,
			};
		},
	},
	Mutation: {
		createGenre: async (
			_: any,
			{ name, description, country, year }: IGenreCreateRequest,
			{ dataSources }: any,
		) => {
			const body = {
				name,
				description,
				country,
				year,
			};
			return await dataSources.genresAPI.createGenre(body, dataSources.artistsAPI);
		},
		updateGenre: async (
			_: any,
			{ genreId, name, description, country, year }: any,
			{ dataSources }: any,
		) => {
			const body = {
				name,
				description,
				country,
				year,
			};
			return await dataSources.genresAPI.updateGenre(genreId, body, dataSources.artistsAPI);
		},
		deleteGenre: async (_: any, { genreId }: any, { dataSources }: any) => {
			return await dataSources.genresAPI.deleteGenre(genreId, dataSources.artistsAPI);
		},
	},
};

export default genresResolvers;
