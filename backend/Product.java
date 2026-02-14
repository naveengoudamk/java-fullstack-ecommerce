public class Product {

    private int id;
    private String name;
    private double price;

    public Product(int id, String name, double price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    public void displayProduct() {
        System.out.println("Product ID: " + id);
        System.out.println("Product Name: " + name);
        System.out.println("Price: ₹" + price);
        System.out.println("-------------------------");
    }

    public double getPrice() {
        return price;
    }
}
