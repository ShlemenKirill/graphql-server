import { gql } from 'apollo-server';

export const bandsTypeDefs = gql`
	type Band {
		id: ID
		name: String
		origin: String
		members: [Member]
		website: String
		genres: [Genres]
	}
	type Query {
		bands: [Band]
		band(bandId: ID): Band
	}
	type Member {
		member: Artist
	}
	type Genres {
		genre: Genre
	}
	type Mutation {
		createBand(
			name: String
			origin: String
			members: [String]
			website: String
			genres: [String]
		): Band
		updateBand(
			id: ID
			name: String
			origin: String
			members: [String]
			website: String
			genres: [String]
		): Band
		deleteBand(id: ID): Result
	}
`;
