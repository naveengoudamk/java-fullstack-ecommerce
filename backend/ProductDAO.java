import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class ProductDAO {

    private static final String FETCH_PRODUCTS_QUERY = "SELECT id, name, price FROM products";

    public List<Product> getAllProducts() {
        List<Product> products = new ArrayList<>();

        try (
                Connection con = DBConnection.getConnection();
                PreparedStatement ps = con.prepareStatement(FETCH_PRODUCTS_QUERY);
                ResultSet rs = ps.executeQuery()
        ) {

            while (rs.next()) {
                products.add(new Product(
                        rs.getInt("id"),
                        rs.getString("name"),
                        rs.getDouble("price")
                ));
            }

        } catch (SQLException e) {
            System.out.println("Unable to fetch products from database.");
            e.printStackTrace();
        }

        return products;
    }
}
