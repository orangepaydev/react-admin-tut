package pie.web.backend.web

import com.google.gson.Gson
import pie.web.backend.config.AppConfiguration
import pie.web.backend.obj.Roles
import pie.web.backend.obj.User
import pie.web.backend.service.UserService
import javax.inject.Inject
import javax.ws.rs.GET
import javax.ws.rs.POST
import javax.ws.rs.Path
import javax.ws.rs.Produces
import javax.ws.rs.core.MediaType

@Path("/auth")
class BatchController {

    @Inject
    lateinit var gson: Gson

    @Inject
    lateinit var appConfiguration: AppConfiguration

    @Inject
    lateinit var userService: UserService

    @GET
    fun hello() = "hello" + gson.toJson(
            userService.getUser("user1@email.com")
    )

    @Path("/login")
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    fun hello(
            requestBody: String
    ): User {
        println(requestBody)
        return User(
                name = "Main User",
                email = "",
                id = 1000,
                roles = arrayOf<Roles>(
                        Roles(name = "admin", code = "admin"),
                        Roles(name = "operator", code = "operator"),
                        Roles(name = "designer", code = "designer")
                )
        )
    }
}