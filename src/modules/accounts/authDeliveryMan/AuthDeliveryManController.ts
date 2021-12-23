import {Request, Response} from 'express';
import { AuthDeliveryManUseCase } from './AuthDeliveryManUseCase'


export class AuthDeliveryManController{
    async handle(req: Request, res: Response): Promise<Response> {
            const {username, password} = req.body;
            
            const authDeliveryManUseCase = new AuthDeliveryManUseCase();

            const result = await authDeliveryManUseCase.execute({username, password});
            
            return res.status(200).json(result);
}
}