import express from 'express'
import handleInsert from '../controller/controller.insert.js'

function insertRoute(pool){
    const router = express.Router()

    router.post('/insert', (req, res) => {
        handleInsert(req, res, pool)
    })

    return router
}

export default insertRoute