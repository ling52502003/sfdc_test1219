({
    clickCreate: function(component, event, helper) {
        var validItem = component.find('itemform').reduce(function (validSoFar, inputCmp) {
            //エラーメッセージをフィールドに表示
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        //エラーが無ければ登録処理
        if(validItem){
            //JSON文字列をオブジェクト型に構築。
            var newItem = JSON.parse(JSON.stringify(component.get("v.newItem")));
            //レコード登録
            /*var theItems =new Object;*/
            /*theItems.push(newItem);
            //配列を取得
            var theItems = component.get("v.items");
            //登録したレコードを追加したリストで初期化
            component.set("v.items", theItems);
            //デフォルト値を初期化
            component.set("v.newItem", { 'sobjectType': 'Anken__c',
                                        'Name': 'テスト',
                                        'AnkenSyubetu__c': '新規',
                                        'Price__c': 0});*/
            alert(JSON.stringify(component.get("v.newItem")));
        }
    }
})