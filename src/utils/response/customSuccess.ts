import { response, Response } from 'express';

response.customSuccess = function (httpStatusCode: number, success: boolean, message: string, data: any = null): Response {
    return this.status(httpStatusCode).json({ success, httpStatusCode, message, data });
};
