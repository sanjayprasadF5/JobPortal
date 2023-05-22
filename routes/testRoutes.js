// Import
import express from "express"
import { testController } from "../controllers/testController.js"

// router objects
const router = express.Router()

router.post("/", testController.testController2)
router.post("/test1", testController.testController1)

// export
export default router
