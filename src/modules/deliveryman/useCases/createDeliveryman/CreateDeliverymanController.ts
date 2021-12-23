import {Request, Response} from 'express';
import { CreateDeliveryManUseCase } from './CreateDeliverymanUseCase';

export class CreateDeliveryManController{
    async handle(req: Request, res: Response): Promise<Response> {
            const {username, password} = req.body;
            const createDeliveryManUseCase = new CreateDeliveryManUseCase();
    
            const result = await createDeliveryManUseCase.execute({username, password});
    
            return res.status(201).json(result)

    }
}