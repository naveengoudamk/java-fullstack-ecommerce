public class User {

    private String username;

    public User(String username) {
        this.username = username;
    }

    public void greetUser() {
        System.out.println("Welcome, " + username + "!");
    }
}
