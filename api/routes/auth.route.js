import  express  from "express";
import  { register, login, logout} from "../controllers/auth.controller.js";


const Router = express.Router();

Router.post("/register",register);
Router.post("/login",login);
Router.post("/logout",logout);


    

export default Router;

