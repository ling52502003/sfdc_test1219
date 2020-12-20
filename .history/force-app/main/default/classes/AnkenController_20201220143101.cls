/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 12-20-2020
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
 * Modifications Log 
 * Ver   Date         Author                               Modification
 * 1.0   12-20-2020   ChangeMeIn@UserSettingsUnder.SFDoc   Initial Version
**/
public without sharing class AnkenController {
    
    /**
     * 
     * 案件一覧取得処理
     * 
     * */
    @AuraEnabled
    public static List<Anken__c> getAnkenList() {
        List<Anken__c> ankenList = [SELECT Id, OwnerId, IsDeleted, Name, CreatedDate, CreatedById, LastModifiedDate, LastModifiedById, SystemModstamp, Type__c, AnkenKanriID__c, AnkenSyubetu__c, BukenImage__c, Address_A__c, Address_B__c, CloseDate__c, Kannryoukigen__c, IsMyAnken__c, status__c, PostCode__c, StartDate__c, ItakuComp__c, KaishiActDate__c, KanryoActDate__c, Price__c FROM Anken__c order by LastModifiedDate desc];
        return ankenList;
    }

    /**
    *案件登録
    */
    @AuraEnabled
    public static void createAnken(Anken__c anken) {
     upsert anken;
    }
}