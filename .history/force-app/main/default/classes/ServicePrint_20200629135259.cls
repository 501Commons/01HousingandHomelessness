public class ServicePrint {
    public Blob html {get;set;}
    public String serviceId {get;set;}
    public PageReference ref {get;set;}
    public ServicePrint() {

    }

    @AuraEnabled
    public Blob PrintPage(Id serviceId){
        Blob body;

        System.debug('serviceId' + serviceId);

        Service__c service [SELECT Id, Name FROM Service__c WHERE id = :serviceId];

        try {
            //body = ref.getContentAsPDF();
           	PageReference nr = Page.ServicePrintPage;
            nr.getParameters().put('service', service);
            body = nr.getContentAsPDF();
            
            System.debug('Body of PDF should be good.');
            // need to pass unit test -- current bug
        } catch (VisualforceException err) {
            System.debug('An Error occurred generating the PDF: ' + err);
            body = Blob.valueOf('Err');
        }

        return body;
    }
}