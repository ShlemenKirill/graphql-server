import { IArtistResponse, IBandResponse, IBandsResponse } from 'interfaces/responses';

const bandsResolvers = {
	Query: {
		bands: async (_: any, __: any, { dataSources }: any) => {
			const data: IBandsResponse = await dataSources.bandsAPI.getBands();
			const { items } = data;
			return items.map((band) => {
				const { _id, genresIds, ...rest } = band;
				return {
					id: _id,
					genres: genresIds,
					...rest,
				};
			});
		},
		band: async (_: any, { bandId }: any, { dataSources }: any) => {
			const data: IBandResponse = await dataSources.bandsAPI.getBand(bandId);
			const { _id, genresIds, ...rest } = data;
			return {
				id: _id,
				genres: genresIds,
				...rest,
			};
		},
	},
	Member: {
		member: async (parent: any, _: any, { dataSources }: any) => {
			const data: IArtistResponse = await dataSources.artistsAPI.getArtist(parent);
			const { _id, ...rest } = data;
			return {
				id: _id,
				...rest,
			};
		},
	},
	Genres: {
		genre: async (parent: any, _: any, { dataSources }: any) => {
			const data = await dataSources.genresAPI.getGenre(parent);
			const { _id, ...rest } = data;
			return {
				id: _id,
				...rest,
			};
		},
	},
	Mutation: {
		createBand: async (
			_: any,
			{ name, origin, members, website, genres }: any,
			{ dataSources }: any,
		) => {
			const body = {
				name,
				origin,
				members,
				website,
				genres,
			};
			const data: IBandResponse = await dataSources.bandsAPI.createBand(body, dataSources.bandsAPI);
			const { _id, ...rest } = data;
			return {
				id: _id,
				...rest,
			};
		},
		updateBand: async (
			_: any,
			{ id, name, origin, members, website, genres }: any,
			{ dataSources }: any,
		) => {
			const body = {
				name,
				origin,
				members,
				website,
				genres,
			};
			const data: IBandResponse = await dataSources.bandsAPI.updateBand(
				id,
				body,
				dataSources.bandsAPI,
			);
			const { _id, ...rest } = data;
			return {
				id: _id,
				...rest,
			};
		},
		deleteBand: async (_: any, { id }: any, { dataSources }: any) => {
			return await dataSources.bandsAPI.deleteBand(id, dataSources.bandsAPI);
		},
	},
};

export default bandsResolvers;
