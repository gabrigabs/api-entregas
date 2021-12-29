import { Request, Response } from "express";
import { UpdateDeliveryManUseCase } from "./UpdateDeliveryManUseCase";

export class UpdateDeliveryManController{
    async handle(req: Request, res: Response): Promise<Response> {
        const {id_deliveryman} = req;
        const { id: id_delivery } = req.params;

        const updateDeliveryManUseCase = new UpdateDeliveryManUseCase();

        const delivery = await updateDeliveryManUseCase.execute({id_delivery, id_deliveryman})

        return res.status(200).json(delivery);
    }
}