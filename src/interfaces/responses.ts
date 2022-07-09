export interface IUserResponse {
	_id: string;
	firstName: string;
	lastName: string;
	password: string;
	email: string;
	__v: number;
}

export interface ICommonResponse<T> {
	items: T[];
	limit: number;
	offset: number;
	total: number;
}

export interface IItemResponse {
	_id: string;
	name: string;
	description: string;
	country: string;
	year: string;
	__v: number;
}

export interface IArtistResponse {
	_id: string;
	firstName: string;
	middleName: string;
	secondName: string;
	birthDate: string;
	birthPlace: string;
	country: string;
	bands: string[];
	instruments: string[];
	__v: number;
}

export interface IBandResponse {
	_id: string;
	name: string;
	origin: string;
	members: string[];
	genresIds: string[];
	website: string;
	__v: number;
}

export interface IBandsResponse {
	items: IBandResponse[];
	limit: number;
	offset: number;
	total: number;
}

export interface IArtistsResponse {
	items: IArtistResponse[];
	limit: number;
	offset: number;
	total: number;
}

export interface ITrackResponse {
	_id: string;
	title: string;
	bandsIds: string[];
	artistsIds: string[];
	duration: number;
	released: number;
	genresIds: string[];
	__v: number;
}

export interface ITracksResponse {
	items: ITrackResponse[];
	limit: number;
	offset: number;
	total: number;
}

export interface IAlbumsResponse {
	items: IAlbumResponse[];
	limit: number;
	offset: number;
	total: number;
}

export interface IAlbumResponse {
	_id: string;
	name: string;
	released: number;
	artistsIds: string[];
	bandsIds: string[];
	trackIds: string[];
	genresIds: string[];
	image: string;
	__v: number;
}
