import java.util.List;

public class ProductService {

    private final ProductDAO productDAO;

    public ProductService() {
        this.productDAO = new ProductDAO();
    }

    public List<Product> getProducts() {
        return productDAO.getAllProducts();
    }

    public void displayProducts(List<Product> products) {
        if (products.isEmpty()) {
            System.out.println("No products are available right now.");
            return;
        }

        System.out.println("Available Products:");
        for (Product p : products) {
            p.displayProduct();
        }
    }
}
