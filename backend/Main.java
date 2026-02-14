import java.util.ArrayList;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        User user = new User("Navi");
        user.greetUser();

        ProductService productService = new ProductService();
        ArrayList<Product> products = productService.getProducts();

        Cart cart = new Cart();

        while (true) {

            System.out.println("\n1. View Products");
            System.out.println("2. Add Product to Cart");
            System.out.println("3. View Cart");
            System.out.println("4. Exit");
            System.out.print("Enter choice: ");

            int choice = sc.nextInt();

            switch (choice) {

                case 1:
                    productService.displayProducts(products);
                    break;

                case 2:
                    System.out.print("Enter product ID: ");
                    int id = sc.nextInt();

                    if (id > 0 && id <= products.size()) {
                        cart.addProduct(products.get(id - 1));
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
}
