import { JwtPayload, Language } from '../JwtPayload';

declare global {
    namespace Express {
        export interface Request {
            jwtPayload: JwtPayload;
            language: Language;
        }
        export interface Response {
            customSuccess(httpStatusCode: number, success: boolean, message: string, data?: any): Response;
        }
    }
}
