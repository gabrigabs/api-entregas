import { Request, Response } from "express";
import { DoneDeliveryUseCase } from "./DoneDeliveryUseCase";

export class DoneDeliveryController{
    async handle(req: Request, res: Response): Promise<Response> {
        const {id_deliveryman} = req;
        const { id: id_delivery } = req.params;

        const doneDeliveryUseCase = new DoneDeliveryUseCase();

        const delivery = await doneDeliveryUseCase.execute({id_delivery, id_deliveryman})

        return res.status(200).json(delivery);
    }
}