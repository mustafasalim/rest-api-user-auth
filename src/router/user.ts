import { isAuthenticated, isOwner } from "../middlewares"
import { deleteUser, getAllUsers, updateUser } from "../controllers/users"
import express from "express"

export default (router: express.Router) => {
  router.get("/users", isAuthenticated, getAllUsers)
  router.delete("/users/:id", isAuthenticated, isOwner, deleteUser)
  router.patch("/users/:id", isAuthenticated, isOwner, updateUser)
}
