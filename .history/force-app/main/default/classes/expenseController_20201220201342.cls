public without sharing class expenseController {

    
    @AuraEnabled
    public static List<Expense__c> getExpenseLst(){
        
        // 経費情報取得
        List<Expense__c> expenseLst = [SELECT Id, OwnerId, IsDeleted, Name, CreatedDate, CreatedById, LastModifiedDate, LastModifiedById, SystemModstamp, Amount__c, Client__c, Date__c, 
                                       Reimbursed__c, date_type__c FROM Expense__c];
    
        return expenseLst;
    }
    
    @AuraEnabled
    public static List<Expense__c> updExpense(Expense__c expense){
        
        // 更新
        upsert expense;
        // 経費情報取得
        List<Expense__c> expenseLst = [SELECT Id, OwnerId, IsDeleted, Name, CreatedDate, CreatedById, LastModifiedDate, LastModifiedById, SystemModstamp, Amount__c, Client__c, Date__c, 
                                       Reimbursed__c, date_type__c FROM Expense__c];
    
        return expenseLst;
    }   
    
}