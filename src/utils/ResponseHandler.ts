import { Response } from "express";

class ResponseHandler {
  static send(
    res: Response,
    statusCode: number,
    message: string,
    data = {},
    token?: string | object
  ) {
    return res.status(statusCode).json({ success: true, message, data, token });
  }
}

export default ResponseHandler;
