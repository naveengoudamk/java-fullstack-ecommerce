import java.util.ArrayList;

public class Cart {

    private ArrayList<Product> products = new ArrayList<>();

    public void addProduct(Product product) {
        products.add(product);
        System.out.println("Product added to cart.");
    }

    public void showCart() {
        double total = 0;

        System.out.println("Your Cart:");
        for (Product p : products) {
            p.displayProduct();
            total += p.getPrice();
        }

        System.out.println("Total Price: ₹" + total);
    }
}
