import { Router } from "express";


import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";

import { AuthClientController } from "./modules/accounts/authClient/AuthClientController";
import { CreateDeliveryManController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";
import { AuthDeliveryManController } from "./modules/accounts/authDeliveryMan/AuthDeliveryManController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDelivery/createDeliveryController";
import { ensureAuthClient } from "./middlewares/ensureAuthClient";

const routes = Router();

const createClientController = new CreateClientController();
const authClientController = new AuthClientController();
const createDeliveryManController = new CreateDeliveryManController();
const authDeliveryManController = new AuthDeliveryManController();
const createDeliveryController = new CreateDeliveryController();

routes.post('/client/', createClientController.handle);
routes.post('/deliveryman/', createDeliveryManController.handle); 
routes.post('/client/auth/', authClientController.handle);
routes.post('/deliveryman/auth', authDeliveryManController.handle);
routes.post('/delivery/', ensureAuthClient,createDeliveryController.handle);

export{ routes }