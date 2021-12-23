import { Request, Response, NextFunction} from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload{
    sub: string;
}

const ensureAuthClient = async (req: Request, res: Response, next: NextFunction) =>{
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).json({error: 'Missing Token'});
    }

    const [, token] = authHeader.split(' ')

    try{
       const {sub} = verify(token, '3f0e079bae9bb2fa26b411c85dfc8988') as IPayload;
       req.id_client = sub;
       return next();
    }catch(err){
        return res.status(401).json({error: 'Invalid token'});
    }


}

export { ensureAuthClient };