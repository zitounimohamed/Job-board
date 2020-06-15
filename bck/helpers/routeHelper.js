const Joi = require('joi');


module.exports={
    validateBody : (schema) =>{
        return(req, res, next)=>{
            const result=Joi.validate(req.body, schema);
            if (result.error){
                return res.status(400).json(result.error);
            }
            if(!req.value)  {req.value={};}   
            req.value['body'] = result.value;
            next();
            

        }

    },
    schemas: {
        authSchema : Joi.object().keys({
            email : Joi.string().email().required(),
            username : Joi.string().required(),
            password : Joi.string().required() ,
            repeat_password: Joi.ref('password'),
            tel : Joi.number().integer().required(),
            location : Joi.string().required(),
            nom : Joi.string().required(),
            
                

            
        }),
        lSchema : Joi.object().keys({
            email : Joi.string().email().required(),
            password : Joi.string().required()
        }),
        
        schemasociety : Joi.object().keys({
            email : Joi.string().email().required(),
            name : Joi.string().required(),
            pass : Joi.string().required(),
            re_pass : Joi.ref('pass'),
            nomEn : Joi.string().required(),
            site : Joi.string().required(),
            tel : Joi.number().integer().required(),
            emp : Joi.string().required(),
            //logo : Joi.string().required(),
            desc : Joi.string().required()
        })

    }
}