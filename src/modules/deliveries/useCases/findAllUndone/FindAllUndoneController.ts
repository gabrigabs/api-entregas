import{Request, Response} from 'express';
import { FindAllUndoneUseCase } from './FindAllUndoneUseCase';

export class FindAllUndoneController{

    async handle(req: Request, res: Response): Promise<Response>{
        const findAllUndoneUseCase = new FindAllUndoneUseCase();
        const deliveries =  await findAllUndoneUseCase.execute()
        return res.json(deliveries);
    }

}


