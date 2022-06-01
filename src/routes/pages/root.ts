import { Router, Request, Response, NextFunction } from 'express';

import TestController from '../../controllers/test.controller';
import { Get, Route, Tags, Post, Body, Path, } from "tsoa";

const router = Router();

router.get('/health-check', async (req, res, next) => {
    const controller = new TestController();
    const { httpStatusCode, success, message, data } = await controller.healthCheck();
    return res.customSuccess(httpStatusCode, success, message, data);

});

router.get('/server-check', async (req: Request, res: Response, next: NextFunction) => {
    const controller = new TestController();
    const { httpStatusCode, success, message, data } = await controller.serverCheck();
    return res.customSuccess(httpStatusCode, success, message, data);
});

export default router;
