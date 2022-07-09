import {
	IAlbumResponse,
	IAlbumsResponse,
	IArtistResponse,
	IBandResponse,
	ITrackResponse,
} from 'interfaces/responses';

const albumsResolvers = {
	Query: {
		albums: async (_: any, __: any, { dataSources }: any) => {
			const data: IAlbumsResponse = await dataSources.albumsAPI.getAlbums();
			const { items } = data;
			return items.map((album) => {
				const { _id, genresIds, artistsIds, bandsIds, trackIds, ...rest } = album;
				return {
					id: _id,
					bands: bandsIds,
					artists: artistsIds,
					genres: genresIds,
					tracks: trackIds,
					...rest,
				};
			});
		},
		album: async (_: any, { albumId }: any, { dataSources }: any) => {
			const data: ITrackResponse = await dataSources.albumsAPI.getAlbum(albumId);
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
	Tracks: {
		track: async (parent: any, _: any, { dataSources }: any) => {
			const data: ITrackResponse = await dataSources.tracksAPI.getTrack(parent);
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
	Mutation: {
		createAlbum: async (
			_: any,
			{ name, artists, bands, released, genres, tracks, image }: any,
			{ dataSources }: any,
		) => {
			const body = {
				name,
				released,
				trackIds: tracks,
				image,
				artistsIds: artists,
				bandsIds: bands,
				genresIds: genres,
			};
			const data: IAlbumResponse = await dataSources.albumsAPI.createAlbum(
				body,
				dataSources.albumsAPI,
			);
			const { _id, genresIds, artistsIds, bandsIds, trackIds, ...rest } = data;
			return {
				id: _id,
				bands: bandsIds,
				artists: artistsIds,
				genres: genresIds,
				tracks: trackIds,
				...rest,
			};
		},
		updateTrack: async (
			_: any,
			{ id, name, artists, bands, released, genres, tracks, image }: any,
			{ dataSources }: any,
		) => {
			const body = {
				name,
				released,
				trackIds: tracks,
				image,
				artistsIds: artists,
				bandsIds: bands,
				genresIds: genres,
			};
			const data: IAlbumResponse = await dataSources.albumsAPI.updateAlbum(
				id,
				body,
				dataSources.albumsAPI,
			);
			const { _id, genresIds, artistsIds, bandsIds, trackIds, ...rest } = data;
			return {
				id: _id,
				bands: bandsIds,
				artists: artistsIds,
				genres: genresIds,
				tracks: trackIds,
				...rest,
			};
		},
		deleteAlbum: async (_: any, { id }: any, { dataSources }: any) => {
			return await dataSources.albumsAPI.deleteAlbum(id, dataSources.albumsAPI);
		},
	},
};

export default albumsResolvers;
