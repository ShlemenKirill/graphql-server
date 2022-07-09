import { gql } from 'apollo-server';

export const artistTypeDefs = gql`
	type Artist {
		id: ID
		firstName: String
		secondName: String
		middleName: String
		birthDate: String
		birthPlace: String
		country: String
		bands: [Bands]
		instruments: [String]
	}
	type Bands {
		band: Band
	}
	type Result {
		acknowledged: String
		deletedCount: Int
	}
	type Query {
		artists: [Artist]
		artist(artistId: String): Artist
	}
	type Mutation {
		createArtist(
			firstName: String
			secondName: String
			middleName: String
			birthDate: String
			birthPlace: String
			country: String
			bandsIds: [String]
			instruments: [String]
		): Artist
		updateArtist(
			artistId: String
			firstName: String
			secondName: String
			middleName: String
			birthDate: String
			birthPlace: String
			country: String
			bandsIds: [String]
			instruments: [String]
		): Artist
		deleteArtist(artistId: String): Result
	}
`;
