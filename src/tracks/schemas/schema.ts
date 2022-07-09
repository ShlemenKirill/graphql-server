import { gql } from 'apollo-server';

export const tracksTypeDefs = gql`
	type Track {
		id: ID!
		title: String!
		artists: [Artists]
		bands: [Bands]
		duration: Int
		released: Int
		genres: [Genres]
	}
	type Artists {
		artist: Artist
	}
	type Bands {
		band: Band
	}
	type Genres {
		genre: Genre
	}
	type Query {
		tracks: [Track]
		track(trackId: ID): Track
	}
	type Mutation {
		createTrack(
			title: String!
			artists: [String]
			bands: [String]
			duration: Int
			released: Int
			genres: [String]
		): Track
		updateTrack(
			id: ID
			title: String!
			artists: [String]
			bands: [String]
			duration: Int
			released: Int
			genres: [String]
		): Track
		deleteTrack(id: ID): Result
	}
`;
