import { gql } from 'apollo-server';

export const albumsTypeDefs = gql`
	type Album {
		id: ID!
		name: String
		released: Int
		artists: [Artists]
		bands: [Bands]
		tracks: [Tracks]
		genres: [Genres]
		image: String
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
	type Tracks {
		track: Track
	}
	type Query {
		albums: [Album]
		album(albumId: ID): Album
	}
	type Mutation {
		createAlbum(
			name: String
			released: Int
			artists: String
			bands: [String]
			tracks: [String]
			genres: [String]
			image: String
		): Track
		updateAlbum(
			id: ID
			name: String
			released: Int
			artists: String
			bands: [String]
			tracks: [String]
			genres: [String]
			image: String
		): Track
		deleteAlbum(id: ID): Result
	}
`;
