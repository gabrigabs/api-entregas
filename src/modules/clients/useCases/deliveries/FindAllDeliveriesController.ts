import { Request, Response } from "express";
import {FindAllDeliveriesUseCase}  from './FindAllDeliveriesUseCase'

export class FindAllDeliveriesController{
    async handle(req: Request, res: Response): Promise<Response>{
        const findAllDeliveriesUseCase = new FindAllDeliveriesUseCase();

        const {id_client} = req;

        const deliveries = await findAllDeliveriesUseCase.execute(id_client)
        return res.status(200).json(deliveries);
    }
}
