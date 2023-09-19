import { createUserMutation, getUserQuery } from '@/graphql';
import { GraphQLClient } from 'graphql-request';

// make it production as well as dev ready
const isProduction = process.env.NODE_ENV === 'production'

// apiUrl is going to be different of production, see above to see how to do it.

const apiUrl = isProduction ? process.env.NEXT_PUBLIC_GRAFBASE_API_URL || '' : 'http://127.0.0.1:4000/graphql';
const apiKey = isProduction ? process.env.NEXT_PUBLIC_GRAFBASE_API_KEY || '' : 'letmein';
const serverUrl = isProduction ? process.env.NEXT_PUBLIC_SERVER_URL : 'http://localhost:3000';

const client = new GraphQLClient('apiUrl');
const makeGraphQLRequest = async (query: string, variables = {}) => {
    try {
        //make connection to database.
        //client.request.....
        return await client.request(query, variables)


    } catch (error) {
        throw error;
    }
}

export const getUser = (email: string) => {
    return makeGraphQLRequest(getUserQuery, { email })
}

export const createUser = (name: string, email: string, avatarUrl: string) => {
    const variables = {
        input: {
            name,email, avatarUrl
        }
    }
    return makeGraphQLRequest(createUserMutation, variables)
}