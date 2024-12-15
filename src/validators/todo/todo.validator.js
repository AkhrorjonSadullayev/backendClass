import { body, param } from "express-validator";

export const  addV = ()=>[
    // body("title","Title is required!").notEmpty(),
    body("title","Title must be a string").isString(),
    // body("desc","Desc must be a string").notEmpty(),
    // body("desc","Desc must be a string").isString(),
];

export const updateV = () => [
    param('id', "Id is MongoID").isMongoId(),
    body("title","Title must be a string").isString(),
    body("desc","Desc must be a string").isString(),
]