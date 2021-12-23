import{Request, Response} from 'express';
import { CreateDeliveryUseCase } from './createDeliveryUseCase';


export class CreateDeliveryController{
    async handle(req: Request, res: Response): Promise<Response> {
        const { item_name, id_client} = req.body;
        const createDeliveryUseCase = new CreateDeliveryUseCase();

        const delivery = await createDeliveryUseCase.execute({item_name, id_client});

        return res.json(delivery);
    }
}