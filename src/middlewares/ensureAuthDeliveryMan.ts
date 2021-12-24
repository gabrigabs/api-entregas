import { Request, Response, NextFunction} from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload{
    sub: string;
}

const ensureAuthDeliveryMan = async (req: Request, res: Response, next: NextFunction) =>{
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).json({error: 'Missing Token'});
    }

    const [, token] = authHeader.split(' ')

    try{
       const {sub} = verify(token, 's6d56s5d65s62f3d2g3der') as IPayload;
       req.id_deliveryman = sub;
       return next();
    }catch(err){
        return res.status(401).json({error: 'Invalid token'});
    }


}

export { ensureAuthDeliveryMan };