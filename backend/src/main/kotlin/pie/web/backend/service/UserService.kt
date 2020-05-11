package pie.web.backend.service

import pie.web.backend.obj.entity.User
import javax.enterprise.context.ApplicationScoped
import javax.inject.Inject
import javax.persistence.EntityManager
import javax.transaction.Transactional

@ApplicationScoped
class UserService {
    @Inject
    lateinit var em: EntityManager

    @Transactional
    fun createUser(user: User) {
        em.persist(user)
    }

    fun getUser(userEmail: String): User? {
        val query = em.createQuery("select user from User user where user.email = ?1", User::class.java)
        query.setParameter(1, userEmail)
        val resultList = query.resultList
        return if ((resultList != null) && (resultList.size > 0)) {
            resultList[0]
        } else {
            null
        }
    }
}