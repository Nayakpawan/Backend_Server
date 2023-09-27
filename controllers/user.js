const user = require('../models/user')
const userModel = require('../models/user')
const contectModel = require('../models/Contectus')
const contectOwnModel = require('../models/websiteOwn')
const startProject = require('../models/StartProject')
// const express = require('express')
// const app = express();
module.exports.addUser = async (req, res) => {
    try {
        const date = req.body.date
        const title = req.body.title
        const image = req.file.path
        const description = req.body.description

        if (!date || !image || !description || !title) {
            return res.send({ code: 400, message: 'Bad Request' })
        }
        const newUser = new userModel({ date, image, description, title })
        const response = await newUser.save()
        if (response) {
            return res.send({ code: 200, message: 'Bloge Added Success' })
        }
    } catch (err) {
        return res.send({ code: 500, message: 'Server Error' })
    }
}
module.exports.contectUs = async (req, res) => {
    const newUser = new contectModel(req.body)
    const response = await newUser.save()
    if (response) {
        return res.send({ code: 200, message: 'Successfull Submit' })
    } else {
        return res.send('error')
    }
}
module.exports.contectOwn = async (req, res) => {
    const newUser = new contectOwnModel(req.body)
    const response = await newUser.save()
    if (response) {
        return res.send({ code: 200, message: 'Successfull Submit Your Data' })
    } else {
        return res.send('error')
    }
}

module.exports.startproject = async (req, res) => {
    const newUser = new startProject(req.body)
    const response = await newUser.save()
    if (response) {
        return res.send({ code: 200, message: 'Successfull Submit Your Data' })
    } else {
        return res.send('error')
    }
}

// app.post('/contcect',async (re, res)  =>  {
//     let contect = await new contectModel(req.body);
//     let result = await contect.save();
//     res.json({
//         status: 200,
//         contect: result,
//     });
// })

module.exports.getUser = async (req, res) => {
    try {
        const _userId = req.params.id
        const _data = await userModel.findOne({ _id: _userId })
        res.send({ code: 200, message: 'Find Success', data: _data })
    } catch (err) {
        res.send({ code: 500, message: 'Server Error' })
    }
}

module.exports.getUsers = async (req, res) => {
    try {
        const _data = await userModel.find({})
        res.send({ code: 200, message: 'Find Success', data: _data })
    } catch (err) {
        res.send({ code: 500, message: 'Server Error' })
    }
}

module.exports.editUser = async (req, res) => {
    try {
        const id = req.params.id
        console.log(req.body, req.file, id, "45")
        let _data = {}
        if (req.body.name) {
            _data["name"] = req.body.name
        }
        if (req.body.mobile) {
            _data["mobile"] = req.body.mobile
        }
        if (req.file && req.file.path) {
            _data["image"] = req.file.path
        }
        console.log(_data, "57")
        const response = await userModel.findByIdAndUpdate(id, _data, { new: true })
        if (response) {
            res.send({ code: 200, message: 'Edit user success', data: response })
        }
    } catch (err) {
        console.log(err)
        res.send({ code: 500, message: 'Server Error' })
    }
}
module.exports.deleteUser = async (req, res) => {
    try {
        const id = req.params.id
        const response = await userModel.deleteOne({ _id: id })
        if (response) {
            res.send({ code: 200, message: 'Delete User Success' })
        }
    } catch (err) {
        res.send({ code: 500, message: 'Server Error' })
    }
}