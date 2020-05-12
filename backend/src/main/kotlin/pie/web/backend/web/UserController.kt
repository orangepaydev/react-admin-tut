package pie.web.backend.web

import javax.ws.rs.Path
import javax.ws.rs.PathParam

// Make sure comply to
// https://react-admin.com/docs/en/data-providers.html
@Path("/user")
class UserController {
    // GET_LIST
    fun getList (@PathParam("sort") sort:String, @PathParam("range") range:String, @PathParam("filter") filter:String) {

    }
}