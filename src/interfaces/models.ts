export interface IArtist {
	id: string;
	firstName: string;
	secondName: string;
	middleName: string;
	birthDate: string;
	birthPlace: string;
	country: string;
	bandsIds: string[];
	instruments: string[];
}

export interface IBand {
	id: string;
	name: string;
	origin: string;
	members: string[];
	website: string;
	genres: string[];
}

export interface IContext {
	context: {
		token: string;
	};
}
