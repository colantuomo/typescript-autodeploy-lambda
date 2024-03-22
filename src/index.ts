import { Handler } from "aws-lambda";
import { formatResponse } from "./utils";

export const handler: Handler = async (event, context) => {
    return formatResponse(200, {
        message: 'Lambda function executed successfully!'
    });
};