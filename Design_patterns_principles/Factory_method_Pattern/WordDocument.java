package deepskilling.Design_patterns_principles.Factory_method_Pattern;

public class WordDocument implements Document {

    @Override
    public void open() {
        System.out.println("Opening Word Document");
    }
}