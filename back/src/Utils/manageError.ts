import { Request, Response, NextFunction } from "express";
export const catchAsync= (controller:Function)=>{
    return (req:Request, res: Response, next:NextFunction)=>{
        controller(req,res).catch((err:string)=>{next(err)})
    }
}