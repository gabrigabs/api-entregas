import { prisma } from '../../../../database/PrismaClient'
import { hash } from 'bcrypt'


interface ICreacteClient{
    username: string,
    password: string
}

export class CreateClientUseCase{
    async execute({username, password}: ICreacteClient){
            const finduser = await prisma.clients.findFirst({
                where: {
                    username: {
                        equals:username,
                        mode: 'insensitive'
                    }
                },
    

            })
            console.log(finduser)
            if(!finduser){
                const hashPassword = await hash(password, 10);
                const client = await prisma.clients.create({
                    data: {
                        username,
                        password: hashPassword
                    }
                })
            
                return client
            }else{
                throw new Error('Ja existe');
            }


}
}