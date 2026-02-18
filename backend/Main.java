import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        User user = new User("Navi");
        user.greetUser();

        ProductService productService = new ProductService();
        List<Product> products = productService.getProducts();
        Map<Integer, Product> productById = indexProducts(products);

        Cart cart = new Cart();

        while (true) {

            System.out.println("\n1. View Products");
            System.out.println("2. Add Product to Cart");
            System.out.println("3. View Cart");
            System.out.println("4. Exit");
            System.out.print("Enter choice: ");

            int choice = readInteger(sc);

            switch (choice) {

                case 1:
                    productService.displayProducts(products);
                    break;

                case 2:
                    if (products.isEmpty()) {
                        System.out.println("No products available to add.");
                        break;
                    }

                    System.out.print("Enter product ID: ");
                    int id = readInteger(sc);
                    Product selectedProduct = productById.get(id);

                    if (selectedProduct != null) {
                        cart.addProduct(selectedProduct);
                    } else {
                        System.out.println("Invalid product ID");
                    }
                    break;

                case 3:
                    cart.showCart();
                    break;

                case 4:
                    System.out.println("Thank you for visiting!");
                    sc.close();
                    return;

                default:
                    System.out.println("Invalid choice");
            }
        }
    }

    private static int readInteger(Scanner scanner) {
        while (true) {
            String input = scanner.nextLine().trim();
            try {
                return Integer.parseInt(input);
            } catch (NumberFormatException e) {
                System.out.print("Please enter a valid number: ");
            }
        }
    }

    private static Map<Integer, Product> indexProducts(List<Product> products) {
        Map<Integer, Product> productById = new HashMap<>();
        for (Product product : products) {
            productById.put(product.getId(), product);
        }
        return productById;
    }
}
