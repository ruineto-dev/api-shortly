import { Router } from "express";
import { deleteUrl, getShortUrl, getUrls, postUrl } from "../controllers/urlsController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { validateTokenMiddleware } from "../middlewares/validateTokenMiddleware.js";
import urlSchema from "../schemas/urlSchema.js";

const urlRouter = Router();
urlRouter.get('/urls', getUrls);
urlRouter.post('/urls/shorten', validateTokenMiddleware, validateSchemaMiddleware(urlSchema), postUrl);
urlRouter.get('/urls/:shortUrl', getShortUrl);
urlRouter.delete('/urls/:id', validateTokenMiddleware, deleteUrl);
export default urlRouter;