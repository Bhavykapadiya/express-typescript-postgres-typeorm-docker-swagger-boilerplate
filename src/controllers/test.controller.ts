import { Get, Route } from "tsoa";
import config from '../config/index';

interface TestResponse {
    httpStatusCode: number;
    success: boolean;
    message: string;
    data?: object;
}

@Route("/")
export default class PingController {

    @Get("/health-check")
    public async healthCheck(): Promise<TestResponse> {
        return {
            "success": true,
            "httpStatusCode": 200,
            "message": `Hello World ${config.PROJECT_NAME}`,
        };
    }

    @Get("/server-check")
    public async serverCheck(): Promise<any> {
        return {
            "success": true,
            "httpStatusCode": 200,
            "message": `Server is running on port ${config.PORT}`,
            "data": {
                "id": 1,
                "name": "test",
                "email": "test@techalchemy.co"
            }
        };
    }
}