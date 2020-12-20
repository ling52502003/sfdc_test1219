({
    clickCreate: function(component, event, helper) {
        let validExpense = component.find('expenseform').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        // If we pass error checking, do some real work
        if(validExpense){
            // Create the new expense
            let newExpense = component.get("v.newExpense");
            console.log("Create expense: " + JSON.stringify(newExpense));
            helper.createExpense(component, newExpense);

            // DB更新
            var action = component.get("c.updExpense");
            action.setParams(
                {"expense":newExpense}
            );
            action.setCallback(this, function(response) {
                    var state = response.getState();
                    if (state === "SUCCESS") {
                        var expensItems = response.getReturnValue();
                        component.set("v.expenses", expensItems);
                    }
                });
            $A.enqueueAction(action);    
        }
    },
    init: function(component, event, helper) {
        var action = component.get("c.getExpenseLst");
		action.setCallback(this, function(response) {
				var state = response.getState();
				if (state === "SUCCESS") {
					var expensItems = response.getReturnValue();
					component.set("v.expenses", expensItems);
				}
			});
		$A.enqueueAction(action);
    }
})