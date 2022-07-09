import { IArtistResponse, IArtistsResponse, IBandResponse } from 'interfaces/responses';
import { IArtistRequest } from 'interfaces/requests';

const artistsResolvers = {
	Query: {
		artists: async (_: any, __: any, { dataSources }: any) => {
			const data: IArtistsResponse = await dataSources.artistsAPI.getArtists();
			const { items } = data;
			return items.map((artist: IArtistResponse) => {
				const { _id, ...rest } = artist;
				return {
					id: _id,
					...rest,
				};
			});
		},
		artist: async (_: any, { artistId }: any, { dataSources }: any) => {
			const data: IArtistResponse = await dataSources.artistsAPI.getArtist(artistId);
			const { _id, ...rest } = data;
			return {
				id: _id,
				...rest,
			};
		},
	},
	Bands: {
		band: async (parent: any, _: any, { dataSources }: any) => {
			const data: IBandResponse = await dataSources.bandsAPI.getBand(parent);
			const { _id, genresIds, ...rest } = data;
			return {
				id: _id,
				genres: genresIds,
				...rest,
			};
		},
	},
	Mutation: {
		createArtist: async (
			_: any,
			{
				firstName,
				secondName,
				middleName,
				birthDate,
				birthPlace,
				country,
				bandsIds,
				instruments,
			}: any,
			{ dataSources }: any,
		) => {
			const body: IArtistRequest = {
				firstName: firstName,
				secondName: secondName,
				middleName: middleName,
				birthDate: birthDate,
				birthPlace: birthPlace,
				country: country,
				bandsIds: bandsIds,
				instruments: instruments,
			};
			const data = await dataSources.artistsAPI.createArtist(body, dataSources.artistsAPI);
            const { _id, ...rest } = data;
            return {
                id: _id,
                ...rest,
            };
		},
		updateArtist: async (
			_: any,
			{
				artistId,
				firstName,
				secondName,
				middleName,
				birthDate,
				birthPlace,
				country,
				bandsIds,
				instruments,
			}: any,
			{ dataSources }: any,
		) => {
			const body: IArtistRequest = {
				firstName: firstName,
				secondName: secondName,
				middleName: middleName,
				birthDate: birthDate,
				birthPlace: birthPlace,
				country: country,
				bandsIds: bandsIds,
				instruments: instruments,
			};
			const data = await dataSources.artistsAPI.updateArtist(
				artistId,
				body,
				dataSources.artistsAPI,
			);
            const { _id, ...rest } = data;
            return {
                id: _id,
                ...rest,
            };
		},
		deleteArtist: async (_: any, { artistId }: any, { dataSources }: any) => {
			return await dataSources.artistsAPI.deleteArtist(artistId, dataSources.artistsAPI);
		},
	},
};

export default artistsResolvers;
