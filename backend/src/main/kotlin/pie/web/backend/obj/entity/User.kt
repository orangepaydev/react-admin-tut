package pie.web.backend.obj.entity

import javax.persistence.*

@Entity
@Table(name = "WebUser")
class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long = 0
    var name: String? = null
    var email: String? = null
    var status: Int = 1
}