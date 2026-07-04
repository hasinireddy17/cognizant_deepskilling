package deepskilling.DSA.Ecommerce_Search;

public class SearchTest {

    public static Product linearSearch(Product[] products, String name) {

        for (Product p : products) {
            if (p.productName.equalsIgnoreCase(name)) {
                return p;
            }
        }

        return null;
    }

    public static Product binarySearch(Product[] products, String name) {

        int low = 0;
        int high = products.length - 1;

        while (low <= high) {

            int mid = (low + high) / 2;

            int result = products[mid].productName.compareToIgnoreCase(name);

            if (result == 0)
                return products[mid];

            if (result < 0)
                low = mid + 1;
            else
                high = mid - 1;
        }

        return null;
    }

    public static void main(String[] args) {

        Product[] products = {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Shoes", "Fashion"),
                new Product(103, "Phone", "Electronics"),
                new Product(104, "Watch", "Accessories")
        };

        Product[] sortedProducts = {
                new Product(101, "Laptop", "Electronics"),
                new Product(103, "Phone", "Electronics"),
                new Product(102, "Shoes", "Fashion"),
                new Product(104, "Watch", "Accessories")
        };

        Product p1 = linearSearch(products, "Phone");

        if (p1 != null)
            System.out.println("Linear Search Found : " + p1.productName);

        Product p2 = binarySearch(sortedProducts, "Phone");

        if (p2 != null)
            System.out.println("Binary Search Found : " + p2.productName);

        System.out.println("\nTime Complexity");
        System.out.println("Linear Search : Best O(1), Average O(n), Worst O(n)");
        System.out.println("Binary Search : Best O(1), Average O(log n), Worst O(log n)");

        System.out.println("\nBinary Search is preferred because it is much faster for large sorted data.");
    }
}