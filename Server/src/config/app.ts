import express from "express";
import * as bodyParser from "body-parser";
import mongoose = require("mongoose");
import environment from "../environment";
import {TestRoutes} from "../routes/user_routes";
import {CommonRoutes} from "../routes/common_routes";

class App {

    public app: express.Application;
    public mongoUrl: string = 'mongodb://localhost:27017/' + environment.getDBName();

    private test_routes: TestRoutes = new TestRoutes();
    private common_routes: CommonRoutes = new CommonRoutes();

    constructor() {
        this.app = express();
        this.config();
        this.mongoSetup();
        this.test_routes.route(this.app);
        this.common_routes.route(this.app);
    }

    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({extended: false}));
        this.app.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
    }

    private mongoSetup(): void {
        mongoose.connect(this.mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true}).then((data) => {
            console.log("Success connecting to db!");
        }).catch((err) => {
            console.log("Error connecting to db!. - error = ", err);

        })
    }

}

export default new App().app;