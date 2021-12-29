
import { prisma } from '../../../../database/PrismaClient'

export class FindAllDeliveriesUseCase{
    async execute(id_client: string){
        const deliveries = await prisma.clients.findMany({ 
            where:{
                id: id_client
            },
            select:{
                id: true,
                username: true,
                Deliveries: true,

            },
        })

        return deliveries;

    }
}