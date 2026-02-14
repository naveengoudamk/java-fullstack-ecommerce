import java.util.ArrayList;

public class ProductService {

    public ArrayList<Product> getProducts() {

        ArrayList<Product> products = new ArrayList<>();

        products.add(new Product(1, "Laptop", 55000));
        products.add(new Product(2, "Phone", 20000));
        products.add(new Product(3, "Headphones", 3000));

        return products;
    }

    public void displayProducts(ArrayList<Product> products) {
        System.out.println("Available Products:");
        for (Product p : products) {
            p.displayProduct();
        }
    }
}
