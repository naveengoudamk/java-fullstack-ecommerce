import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBConnection {

    private static final String DEFAULT_URL = "jdbc:mysql://localhost:3306/ecommerce";
    private static final String DEFAULT_USER = "root";
    private static final String DEFAULT_PASSWORD = "yourpassword";

    private DBConnection() {
    }

    public static Connection getConnection() throws SQLException {
        String url = getEnvOrDefault("ECOM_DB_URL", DEFAULT_URL);
        String user = getEnvOrDefault("ECOM_DB_USER", DEFAULT_USER);
        String password = getEnvOrDefault("ECOM_DB_PASSWORD", DEFAULT_PASSWORD);
        return DriverManager.getConnection(url, user, password);
    }

    private static String getEnvOrDefault(String key, String fallback) {
        String value = System.getenv(key);
        return (value == null || value.isBlank()) ? fallback : value;
    }
}
