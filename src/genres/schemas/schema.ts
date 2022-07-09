import { gql } from 'apollo-server';

export const genreTypeDefs = gql`
	type Genre {
		id: ID
		name: String
		description: String
		country: String
		year: Int
	}
	type Query {
		genres: [Genre]
		genre(genreId: String): Genre
	}
	type Mutation {
		createGenre(name: String, description: String, country: String, year: Int): Genre
		updateGenre(
			genreId: String
			name: String
			description: String
			country: String
			year: Int
		): Genre
		deleteGenre(genreId: String): Result
	}
`;
