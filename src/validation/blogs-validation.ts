import {body, check, validationResult} from "express-validator";
import {NextFunction, Request, Response} from "express";
import {ErrorType} from "../types/error-type";

const pattern = /^https:\/\/([a-zA-Z0-9_-]+\.)+[a-zA-Z0-9_-]+(\/[a-zA-Z0-9_-]+)*\/?$/

export const blogNameValidation = body('name').trim().isLength({min: 4, max: 15}).withMessage({
    message: 'name',
    field: 'name'
})
export  const blogDescValidation = body('description').trim().isLength({min: 4, max: 500}).withMessage({
    message: 'description is wrong',
    field: 'description'
})


export  const blogWebUrlValidation = check('websiteUrl').matches(pattern).withMessage({
    message: 'websiteUrl is wrong',
    field: 'websiteUrl'
})
export  const blogWebUrlValidation2 =   body('websiteUrl').trim().isLength({min: 6, max: 100}).withMessage({
    message: 'websiteUrl is wrong',
    field: 'websiteUrl'
})

export const blogIdValidation = body('id').trim().isLength({min: 1, max: 300}).isString().withMessage({
    message: 'id is wrong',
    field: 'id'
})
export const inputValidationMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        let errorsForClient:ErrorType[] = []
        for (const error of errors.array()) {
            if(!errorsForClient.find(e => e.field === error.msg.field)){
                errorsForClient.push(error.msg)
            }
        }

        res.status(400).json({errorsMessages: errorsForClient})
        return
    } else {
        next()
    }
}
