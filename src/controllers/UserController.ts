import { Request, Response } from "express";
import User from "../db/models/User";

import Helper from "../helpers/Helper";

const Register = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { name, email, password, confirmPassword } = req.body;

        const user = await User.create({
            name, 
            email, 
            password, 
            active: true, 
            verified: true, 
            roleId: 1
        });

        return res.status(201).send(Helper.ResponseData(201, "Created", null, user));
    } catch (error) {
        return res.status(500).send(Helper.ResponseData(500, "", error, null))
    }
};

export default { Register };