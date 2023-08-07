import { db } from "../configurations/fireBase.js";

export default {

    show: async (req, res) => {

        try {

            let dataResponse = [];

            const userRef = db.collection("user")

            const response = await userRef.get();

            response.forEach(doc => dataResponse.push(doc.data()));

            return res.status(200).send(dataResponse);

        } catch (error) {
            console.log(error.toString())
            return res.status(400).send({ message: error })
        }
    },

    create: async (req, res) => {
        
        try {

            console.log(req.body)

            return res.status(200).send({ message: 'OK' });
        } catch (error) {
            res.status(400).send({ message: error });
        }
    },

    remove: async (req, res) => {
        try {
            return res.status(200).send({ message: 'OK' });
        } catch (error) {
            res.status(400).send(error);
        }
    },

    update: async (req, res) => {
        try {
            return res.status(200).send({ message: 'OK' });
        } catch (error) {
            res.status(400).send(error);
        }
    }
}