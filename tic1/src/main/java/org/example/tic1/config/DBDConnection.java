package org.example.tic1.config;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
public class DBDConnection {
    private static final String URL = "jdbc:postgresql://10.252.62.237:5432/cine";
    private static final String USER = "proyecto";
    private static final String PASSWORD = "nuestroproyecto";

    public static Connection getConnection() throws SQLException {
        return DriverManager.getConnection(URL, USER, PASSWORD);
    }
}