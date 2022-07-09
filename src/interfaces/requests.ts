export interface IArtistRequest {
	firstName: string;
	secondName: string;
	middleName: string;
	birthDate: string;
	birthPlace: string;
	country: string;
	bandsIds: string[];
	instruments: string[];
}

export interface IGenreCreateRequest {
	name: string;
	description: string;
	country: string;
	year: string;
}

export interface IRegisterRequest {
	firstName: string;
	lastName: string;
	password: string;
	email: string;
}

export interface IBandRequest {
	name: string;
	origin: string;
	members: string[];
	website: string;
	genres: string[];
}

export interface ITrackRequest {
	title: string;
	artistsIds: string[];
	bandsIds: string[];
	duration: number;
	released: number;
	genresIds: string[];
}

export interface IAlbumRequest {
	name: string;
	released: number;
	artistsIds: string;
	bandsIds: string[];
	trackIds: string[];
	genresIds: string[];
	image: string;
}
