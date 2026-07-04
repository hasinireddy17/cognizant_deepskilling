package deepskilling.Design_patterns_principles.Factory_method_Pattern;

public class PdfFactory extends DocumentFactory {

    @Override
    public Document createDocument() {
        return new PdfDocument();
    }
}