import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Cart {

    private final List<Product> products = new ArrayList<>();
    private double total = 0;

    public void addProduct(Product product) {
        products.add(product);
        total += product.getPrice();
        System.out.println("Product added to cart.");
    }

    public List<Product> getProducts() {
        return Collections.unmodifiableList(products);
    }

    public double getTotal() {
        return total;
    }

    public void showCart() {
        if (products.isEmpty()) {
            System.out.println("Your cart is empty.");
            return;
        }

        System.out.println("Your Cart:");
        for (Product p : products) {
            p.displayProduct();
        }

        System.out.printf("Total Price: INR %.2f%n", total);
    }
}
