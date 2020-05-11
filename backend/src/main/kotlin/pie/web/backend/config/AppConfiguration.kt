package pie.web.backend.config

import io.quarkus.arc.config.ConfigProperties

@ConfigProperties(prefix = "backend")
class AppConfiguration {
    lateinit var prop1: String
}