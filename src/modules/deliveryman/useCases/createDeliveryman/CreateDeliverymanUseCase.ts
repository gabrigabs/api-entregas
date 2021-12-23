import { prisma } from '../../../../database/PrismaClient'
import { hash } from 'bcrypt'


interface ICreacteDeliveryMan{
    username: string,
    password: string
}

export class CreateDeliveryManUseCase{
    async execute({username, password}: ICreacteDeliveryMan){
            const findDeliveryMan = await prisma.deliveryman.findFirst({
                where: {
                    username: {
                        equals:username,
                        mode: 'insensitive'
                    }
                },
    

            })
            if(!findDeliveryMan){
                const hashPassword = await hash(password, 10);
                const deliveryman = await prisma.deliveryman.create({
                    data: {
                        username,
                        password: hashPassword
                    }
                })
            
                return deliveryman
            }else{
                throw new Error('Deliveryman already exists');
            }


}
}