package org.example.tic1.config;
import java.sql.Connection;

public class DBDConnection {
    #application.properties

#PostgreSQL Database connection settings
    spring.datasource.url=jdbc:postgresql://10.252.62.237:5432/cine
    spring.datasource.usrname=proyecto
    spring.datasource.password=nuestroproyecto
    spring.datasource.driver-class-name=org.postgresql.driver

# Hibernate settings (if using JPA)
    spring.jpa.database-platform=Korg.hibernate.dialect.PostgreSQLDialect
}
