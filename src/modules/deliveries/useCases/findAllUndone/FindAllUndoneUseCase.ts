import { prisma } from '../../../../database/PrismaClient'

export class FindAllUndoneUseCase{
    async execute(){
        const deliveries = await prisma.deliveries.findMany({
            where:{
                ended_at: null,
                id_deliveryman: null
            }
        })

        return deliveries;

    }
}