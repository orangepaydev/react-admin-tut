package pie.web.backend.config

import com.google.gson.Gson
import javax.enterprise.context.ApplicationScoped
import javax.enterprise.inject.Produces

@ApplicationScoped
class AppMain {
    @Produces
    fun gson() = Gson()
}