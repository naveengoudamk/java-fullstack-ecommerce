import java.util.ArrayList;

public class ProductService {

    ProductDAO productDAO = new ProductDAO();

    public ArrayList<Product> getProducts() {
        return productDAO.getAllProducts();
    }

    public void displayProducts(ArrayList<Product> products) {
        System.out.println("Available Products:");
        for (Product p : products) {
            p.displayProduct();
        }
    }
}
