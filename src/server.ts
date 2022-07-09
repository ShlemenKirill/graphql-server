import 'reflect-metadata';
import 'dotenv/config';
import { ApolloServer } from 'apollo-server';
import { userTypeDefs, usersResolvers, UsersApi } from './users';
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
				'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmJiNTcyYzI0NjhhZTQ3Y2EyNDhmZDMiLCJmaXJzdE5hbWUiOiJmaXJzdCBuYW1lIiwibGFzdE5hbWUiOiJsYXN0IG5hbWUiLCJlbWFpbCI6Im1ldDkxMjlAZ21haWwuY29tIiwiaWF0IjoxNjU2NDQ1NjE0fQ.sx2hxE5vCZDO1MTjJ7E7B5hYmJxko2jmvrM2vp3uh4c';
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
