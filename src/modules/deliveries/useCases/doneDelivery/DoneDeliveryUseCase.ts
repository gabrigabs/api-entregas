import { prisma } from '../../../../database/PrismaClient'


interface IUpdateEndDate{
    id_delivery: string;
    id_deliveryman: string;

}

export class DoneDeliveryUseCase{
    async execute({id_delivery, id_deliveryman}: IUpdateEndDate){
        const result = await prisma.deliveries.updateMany({
            where: {
                id: id_delivery,
                id_deliveryman
            },
            data:{
                ended_at: new Date()
            },
        })

        return result;
    }

}