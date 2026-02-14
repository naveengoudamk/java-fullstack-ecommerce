public class Main {

    public static void main(String[] args) {

        User user = new User("Navi");
        user.greetUser();

        Product p1 = new Product(1, "Laptop", 55000);
        Product p2 = new Product(2, "Phone", 20000);

        Cart cart = new Cart();

        cart.addProduct(p1);
        cart.addProduct(p2);

        cart.showCart();
    }
}
