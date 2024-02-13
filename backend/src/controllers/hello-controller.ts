import { Request, Response, NextFunction } from 'express'

import HttpException from '../exceptions/http-exception'
import { HelloWorldRequest } from '../models/hello-world'
import { helloService } from '../services/hello-service'

export const helloController = {
  async get(
    req: Request<unknown, unknown, unknown, HelloWorldRequest>,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { name } = req.query
    const data = await helloService.getHelloWorld(name).catch(error => {
      next(new HttpException(400, error))
    })
    if (data) {
      res.status(200).json(data)
    }
  },
}
