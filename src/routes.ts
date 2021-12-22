import { Router } from "express";

import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";

import { AuthClientController } from "./modules/accounts/authClient/AuthClientController";

const routes = Router();

const createClientController = new CreateClientController();
const authClientController = new AuthClientController();

routes.post('/client/', createClientController.handle); 
routes.post('/auth', authClientController.handle);

export{ routes }