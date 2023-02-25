import * as express from 'express';
import User from '../models/user'


export class UserController{
    login = (req: express.Request, res: express.Response)=>{
        let username = req.body.username;
        let password = req.body.password;
        
        User.findOne({'username': username, 'password': password}, (err, user)=>{
            if(err) console.log(err);
            else res.json(user);
        })
    }

    register = (req: express.Request, res: express.Response)=>{
        /*let user = new User({firstname: req.body.firstname, lastname: req.body.lastname,
        username: req.body.username, password: req.body.password,
        phoneNumber: req.body.phoneNumber, email: req.body.email, 
        ogranizationName: req.body.ogranizationName,
        ogranizationAddress: req.body.ogranizationAddress,
        organizationMN: req.body.organizationMN, type: req.body.type})*/

        let user = new User(req.body)

        user.save().then(user=>{
            res.status(200).json({'message': 'user added'});
        }).catch(err=>{
            res.status(400).json({'message': 'error'});
        })
    }

    addPicture = (req: express.Request, res: express.Response)=>{

        const image = req.file.path;
        if(!image) {
            return res.status(400).json({'message': 'error'});
        }
         
        User.findOneAndUpdate({username: req.body.username},{slika: image}).then(user=>{
            res.status(200).json({'message': 'picture added'});
        }).catch(err=>{
            res.status(400).json({'message': 'error'});
        })
    }
}