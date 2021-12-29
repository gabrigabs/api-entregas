import { Request, Response } from "express";
import {FindAllDeliveriesToDoUseCase}  from './FindAllDeliveriesToDoUseCase'
    
export class FindAllDeliveriesToDoController{
    async handle(req: Request, res: Response): Promise<Response>{
        const findAllDeliveriesToDoUseCase = new FindAllDeliveriesToDoUseCase();

        const {id_deliveryman} = req;

        const deliveries = await findAllDeliveriesToDoUseCase.execute(id_deliveryman)
        return res.status(200).json(deliveries);
    }
}
