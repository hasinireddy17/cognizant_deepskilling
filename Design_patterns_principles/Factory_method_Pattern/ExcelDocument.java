package deepskilling.Design_patterns_principles.Factory_method_Pattern;

public class ExcelDocument implements Document {

    @Override
    public void open() {
        System.out.println("Opening Excel Document");
    }
}