public class Product {

    private final int id;
    private final String name;
    private final double price;

    public Product(int id, String name, double price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void displayProduct() {
        System.out.printf("Product ID: %d%n", id);
        System.out.printf("Product Name: %s%n", name);
        System.out.printf("Price: INR %.2f%n", price);
        System.out.println("-------------------------");
    }

    public double getPrice() {
        return price;
    }
}
