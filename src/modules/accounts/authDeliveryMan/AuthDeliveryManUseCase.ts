import { prisma } from '../../../database/prismaClient'
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'


interface IAuthDeliveryMan{
    username: string,
    password: string



}

export class AuthDeliveryManUseCase{
    async execute({username, password}: IAuthDeliveryMan){

        const deliveryMan = await prisma.deliveryman.findFirst({
            where: {
                username: {
                    equals:username,
                    mode: 'insensitive'
                }
            },
        })

        if(!deliveryMan){
            throw new Error('Usuario nao encontrado');
        }

        const passwordMatch = await compare(password, deliveryMan.password);

        if(!passwordMatch){
            throw new Error('Senha ou Usuario errado');
        }

        const token = sign({username}, '3f0e079bae9bb2fa26b411c85dfc8988', {
            subject: deliveryMan.id,
            expiresIn: '1d',
        })

        return token;


    }
}