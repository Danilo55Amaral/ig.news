import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        { id: 1, name: 'Danilo'},
        { id: 2, name: 'Gaby'},
        { id: 1, name: 'Pedro'},
    ]

    return response.json(users)
}