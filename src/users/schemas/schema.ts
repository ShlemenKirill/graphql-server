import { gql } from 'apollo-server';

export const userTypeDefs = gql`
	type User {
		id: ID
		firstName: String
		lastName: String
		password: String
		email: String
	}
	type LoginResult {
		jwt: String
	}

	type Query {
		user(userId: ID): User
	}

	type Mutation {
		jwt(email: String, password: String): LoginResult
		register(firstName: String, lastName: String, password: String, email: String): User
	}
`;
