export const getUserQuery = `
    query GetUser($email: String!){
        user(by: {email: $email}) {
            id
            name
            email
            avatarUrl
            description
            githubUrl
            linkedinUrl
        }
    }
`
//can also be created using grafbase pathfinder, if you want to avoid typing.

export const createUserMutation = `
    query CreateUser($input: UserCreateInput!) {
        userCreate(input: $input){
            user {
                name
                email
                avatarUrl
                description
                githubUrl
                linkedinUrl
                id
            }
        }
    }
`