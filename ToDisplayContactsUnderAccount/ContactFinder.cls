public with sharing class ContactFinder {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList(Id accountId){
        List<contact> contactList = [SELECT Id,Name,FirstName,LastName,Title, Phone, Email,AccountId 
        FROM Contact 
        WHERE AccountId=:accountId];
        return contactList;
    }
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactsRelatedToAccount(String accId) {
        system.debug('accId >> ' + accId);
        return [SELECT Id, Name, Title, Phone, Email, FirstName, LastName from Contact where AccountId = :accId];
    }

    @AuraEnabled(cacheable=true)
    public static List<Contact> findContacts(String searchKey, String accId) {
        String key = '%' + searchKey + '%';
        return [
            SELECT Id, Name, Title, Phone, Email
            FROM Contact
            WHERE Name LIKE :key And AccountId = :accId
        ];
    }
}
