import 'reflect-metadata';
import 'dotenv/config';
import { ApolloServer } from 'apollo-server';
import { userTypeDefs, usersResolvers, UsersApi, jwtToken } from './users';
import { artistsResolvers, ArtistsAPI, artistTypeDefs } from './artists';
import { genreTypeDefs, genresResolvers, GenresApi } from './genres';
import { bandsTypeDefs, bandsResolvers, BandsAPI } from './bands';
import { tracksTypeDefs, tracksResolvers, TracksApi } from './tracks';
import { albumsTypeDefs, albumsResolvers, AlbumsApi } from './albums';

const main = async () => {
	const server = new ApolloServer({
		typeDefs: [
			artistTypeDefs,
			userTypeDefs,
			genreTypeDefs,
			bandsTypeDefs,
			tracksTypeDefs,
			albumsTypeDefs,
		],
		resolvers: [
			artistsResolvers,
			genresResolvers,
			usersResolvers,
			bandsResolvers,
			tracksResolvers,
			albumsResolvers,
		],
		dataSources: () => {
			return {
				artistsAPI: new ArtistsAPI(),
				genresAPI: new GenresApi(),
				usersAPI: new UsersApi(),
				bandsAPI: new BandsAPI(),
				tracksAPI: new TracksApi(),
				albumsAPI: new AlbumsApi(),
			};
		},
		context: ({ req }) => {
			const token =
				req.headers.authorization ||
				jwtToken;
			return { token };
		},
	});

	server.listen().then(() => {
		console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
  `);
	});
};

main().catch((error) => console.log(error.message));
