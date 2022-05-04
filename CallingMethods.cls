public class CallingMethods {
    @AuraEnabled
    public static string callMethod1(){
        return 'METHOD-1 ';
    }
    @AuraEnabled
    public static string callMethod2()
    {
        return 'METHOD-2 ';
    }
    @AuraEnabled
    public static string callMethod3()
    {
        return 'METHOD-3';
    }

}
