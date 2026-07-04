package deepskilling.Design_patterns_principles.Factory_method_Pattern;

public class PdfDocument implements Document {

    @Override
    public void open() {
        System.out.println("Opening PDF Document");
    }
}