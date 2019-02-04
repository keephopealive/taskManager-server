import { NextFunction, Request, Response } from "express";
import colors from 'colors/safe';
// import db from '../../config/mysql.config';
import sequelize from "../../config/sequelize.config";

export default {

    getAllTasks: function (request: Request, response: Response, next: NextFunction) {
        console.log(colors.bgBlue("SERVER > Admin > categories > categories.ctrl.ts > getAllCategories"));
        sequelize
    },

    getOneTaskById: function (request: Request, response: Response, next: NextFunction) {
        console.log(colors.bgBlue("SERVER > Admin > categories > categories.ctrl.ts > getOneTaskById"));
    },

    deleteOneTaskById: function (request: Request, response: Response, next: NextFunction) {
        console.log(colors.bgBlue("SERVER > Admin > categories > categories.ctrl.ts > deleteOneTaskById"));

    },

    createTask: function (request: Request, response: Response, next: NextFunction) {
        console.log(colors.bgBlue("SERVER > Admin > categories > categories.ctrl.ts > createTask"));
    },

    getAllTasksAndProductByProductId: function (request: Request, response: Response, next: NextFunction) {
        console.log(colors.bgBlue("SERVER > Admin > categories > categories.ctrl.ts > getAllCategoriesAndProductByProductId"));
    },

}