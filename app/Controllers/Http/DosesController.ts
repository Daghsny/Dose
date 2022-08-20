 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import View from "@ioc:Adonis/Core/View";
import Dose from "App/Models/Dose";
import {  schema } from '@ioc:Adonis/Core/Validator'

export default class DosesController {
    public async index() {
        const doses = await Dose.all()
        return View.render('index', {doses})
    }

    public async store({request, response}:HttpContextContract) {

        // store without validation

        // const dose = new Dose()
        // dose.name = request.input('name')
        // await dose.save()
        // return  response.redirect('/')

        // store with validation

        // const ValidationSchema = schema.create({
        //     name: schema.string({trim:true},[ rules.maxLength(255)]),
            
            
        // })
        // const ValidateData = await request.validate({
        //     schema: ValidationSchema,
        //     messages: {
        //         'name.required': "hir doses name"
        //     }
        // })
        // await Dose.create({
        //     name: request.input(('name'))
        // })

        // ValidateData.name
        // return response.redirect('/')


        /** Validation deuxoemme type*/

        const newPostSchema= schema.create({
            name: schema.string(), })
            const payload = await request.validate({
                schema: newPostSchema,
                messages:{
                    'name.required' : 'hot essm'
                }
            })

            await Dose.create({
                name: request.input('name')
            })

            payload.name

            return response.redirect('/')
       

    }
}
