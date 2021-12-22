import { prisma } from '../../../database/prismaClient'
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'


interface IAuthClient{
    username: string,
    password: string



}

export class AuthClientUseCase{
    async execute({username, password}: IAuthClient){

        const client = await prisma.clients.findFirst({
            where: {
                username: {
                    equals:username,
                    mode: 'insensitive'
                }
            },
        })

        if(!client){
            throw new Error('Nao existe');
        }

        const passwordMatch = await compare(password, client.password);

        if(!passwordMatch){
            throw new Error('Senha errada');
        }

        const token = sign({username}, '3f0e079bae9bb2fa26b411c85dfc8988', {
            subject: client.id,
            expiresIn: '1d',
        })

        return token;


    }
}