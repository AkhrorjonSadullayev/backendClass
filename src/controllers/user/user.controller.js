import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import {asyncHadler} from '../../middleware/async-hadler.middleware.js';
import { HttpException } from '../../utils/http.exception.js';
import { User } from '../../models/user/user.model.js';
import { HashingHelpers } from "../../utils/hashing.helpers.js" ;


export class UserController { 
   static signUp =  asyncHadler( async(req,res,next)=>{
    const { full_name, phone_number, email, password } = req.body

    const user = await User.findOne({email})
    if(user){
        throw new HttpException(
            StatusCodes.CONFLICT,
            ReasonPhrases.CONFLICT,
            "This email already used!"
        );
    }

    await User.create({ full_name,phone_number,email, password: await HashingHelpers.generatePassword(password), })

    res.status(StatusCodes.CREATED).json({success:true, msg:'Successfully signed up!'})
   });
   static login = asyncHadler(async (req,res) => {
    const { email,password } = req.body

    const user = await User.findOne({email}).select("+password")
    if(!user){
        throw new HttpException(
            StatusCodes.UNAUTHORIZED,
            ReasonPhrases.UNAUTHORIZED,
            "Invalid login credentials!"
        );
    }
    if(!HashingHelpers.comparePassword(password,user.password)){
        throw new HttpException(
            StatusCodes.UNAUTHORIZED,
            ReasonPhrases.UNAUTHORIZED,
            "Invalid login credentials!"
        );     
    };

    res.status(StatusCodes.OK).json({ success:true, user }); 
   })
}