package pie.web.backend.web

import com.google.gson.Gson
import pie.web.backend.obj.entity.User
import pie.web.backend.service.UserService
import javax.inject.Inject
import javax.ws.rs.*
import javax.ws.rs.core.MediaType

// Make sure comply to
// https://react-admin.com/docs/en/data-providers.html
@Path("/users")
class UserController {
    @Inject
    lateinit var userService: UserService

    @Inject
    lateinit var gson: Gson

    // GET_LIST
    fun getList (@QueryParam("sort") sort:String, @QueryParam("range") range:String, @QueryParam("filter") filter:String): Array<User> {
        return arrayOf()
    }

    @Path("/{userId}")
    @Produces(MediaType.APPLICATION_JSON)
    @GET
    fun getUser(@PathParam("userId") userId:Long) = gson.toJson(userService.getUser(userId))

    @Path("/{userId}")
    @Produces(MediaType.APPLICATION_JSON)
    @POST
    fun createUser(@PathParam("userId") userId:Long, requestBody:String) {

    }

    @Path("/{userId}")
    @Produces(MediaType.APPLICATION_JSON)
    @PUT
    fun updateUser(@PathParam("userId") userId:Long, requestBody:String) {

    }
}