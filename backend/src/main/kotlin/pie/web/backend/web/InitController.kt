package pie.web.backend.web

import pie.web.backend.obj.entity.User
import pie.web.backend.service.UserService
import javax.inject.Inject
import javax.ws.rs.GET
import javax.ws.rs.Path

@Path("/performinit")
class InitController {
    @Inject
    lateinit var userService: UserService

    @GET
    fun perform():String {
        var user = User()
        user.let {
            it.name = "User1"
            it.email = "user1@email.com"
            it.status = 1
        }
        userService.createUser(user)

        user = User()
        user.let {
            it.name = "User2"
            it.email = "user2@email.com"
            it.status = 1
        }
        userService.createUser(user)

        println ("Initialized")

        return "done"
    }
}