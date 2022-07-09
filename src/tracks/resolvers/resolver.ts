import {
	IArtistResponse,
	IBandResponse,
	ITrackResponse,
	ITracksResponse,
} from 'interfaces/responses';

const tracksResolvers = {
	Query: {
		tracks: async (_: any, __: any, { dataSources }: any) => {
			const data: ITracksResponse = await dataSources.tracksAPI.getTracks();
			const { items } = data;
			return items.map((track) => {
				const { _id, genresIds, artistsIds, bandsIds, ...rest } = track;
				return {
					id: _id,
					bands: bandsIds,
					artists: artistsIds,
					genres: genresIds,
					...rest,
				};
			});
		},
		track: async (_: any, { trackId }: any, { dataSources }: any) => {
			const data: ITrackResponse = await dataSources.tracksAPI.getTrack(trackId);
			const { _id, genresIds, artistsIds, bandsIds, ...rest } = data;
			return {
				id: _id,
				bands: bandsIds,
				artists: artistsIds,
				genres: genresIds,
				...rest,
			};
		},
	},
	Artists: {
		artist: async (parent: any, _: any, { dataSources }: any) => {
			console.log(parent);
			const data: IArtistResponse = await dataSources.artistsAPI.getArtist(parent);
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
		createTrack: async (
			_: any,
			{ title, artists, bands, duration, released, genres }: any,
			{ dataSources }: any,
		) => {
			const body = {
				title,
				artistsIds: artists,
				bandsIds: bands,
				duration,
				released,
				genresIds: genres,
			};
			const data: ITrackResponse = await dataSources.tracksAPI.createTrack(
				body,
				dataSources.tracksAPI,
			);
			const { _id, genresIds, artistsIds, bandsIds, ...rest } = data;
			return {
				id: _id,
				bands: bandsIds,
				artists: artistsIds,
				genres: genresIds,
				...rest,
			};
		},
		updateTrack: async (
			_: any,
			{ id, title, artists, bands, duration, released, genres }: any,
			{ dataSources }: any,
		) => {
			const body = {
				title,
				artistsIds: artists,
				bandsIds: bands,
				duration,
				released,
				genresIds: genres,
			};
			const data: ITrackResponse = await dataSources.tracksAPI.updateTrack(
				id,
				body,
				dataSources.tracksAPI,
			);
			const { _id, genresIds, artistsIds, bandsIds, ...rest } = data;
			return {
				id: _id,
				bands: bandsIds,
				artists: artistsIds,
				genres: genresIds,
				...rest,
			};
		},
		deleteTrack: async (_: any, { id }: any, { dataSources }: any) => {
			return await dataSources.tracksAPI.deleteTrack(id, dataSources.tracksAPI);
		},
	},
};

export default tracksResolvers;
