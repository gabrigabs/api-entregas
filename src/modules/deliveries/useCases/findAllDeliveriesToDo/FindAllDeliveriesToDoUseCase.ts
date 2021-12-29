import { prisma } from '../../../../database/PrismaClient'

export class FindAllDeliveriesToDoUseCase{

    async execute(id_deliveryman: string){

        const deliveryman = await prisma.deliveryman.findMany({
            where:{
                id: id_deliveryman
            },

            select:{
                id: true,
                username: true,
                Deliveries: true

            }
        })

        return deliveryman;

    }
}