import { NextFunction, Request, Response } from 'express'
import ApiError from '../errors/ApiError'
type CustomError = ApiError | Error;
const apiErrorHandler = (err:CustomError , req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ApiError) {
    res.status(err.code).json({ msg: err.message })
    return
  }
  else{
    
    res.status(500).json({ msg: err.message })
  }
}

export default apiErrorHandler
