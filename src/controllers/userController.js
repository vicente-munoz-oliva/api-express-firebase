import { db } from "../configurations/fireBase.js";
import { userSchema } from "../models/userModel.js";

export default {

    findOne: async (req, res) => {
        try {
            let id = req.params.id;
            const userRef = await db.collection("user").doc(id)
            const data = await userRef.get()
            res.status(200).send({ data: data.data() || [], message: 'Ok' })
        } catch (error) {
            return res.status(400).send({ message: error })
        }
    },

    show: async (req, res) => {
        try {
            let dataResponse = [];
            const userRef = await db.collection("user")
            const response = await userRef.get()
            response.forEach(doc => dataResponse.push({ ...doc.data(), id: doc.id }))
            res.status(200).send({ data: dataResponse, message: 'Ok' })
        } catch (error) {
            return res.status(400).send({ message: error })
        }
    },

    create: async (req, res) => {
        try {
            const data = await userSchema.validateAsync(req.body)
            await db.collection("user").add(data)
            res.status(200).send({ data, message: 'User Created' })
        } catch (error) {
            res.status(400).send({ message: error })
        }
    },

    remove: async (req, res) => {
        try {
            let id = req.params.id
            await db.collection("user").doc(id).delete()
            res.status(200).send({ message: 'User deleted' })
        } catch (error) {
            res.status(400).send(error)
        }
    },

    update: async (req, res) => {
        try {
            let id = req.params.id
            const data = await userSchema.validateAsync(req.body)
            await db.collection("user").doc(id).update(data)
            res.status(200).send({ data, message: 'User updated' })
        } catch (error) {
            res.status(400).send(error)
        }
    }
}