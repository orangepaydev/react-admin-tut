package pie.web.backend.obj

data class User (
        val name: String,
        val email: String,
        val id: Long,
        val roles: Array<Roles>
)

data class Roles (
        val name: String,
        val code: String
)