({
	init : function(component, event, helper) {
		var action = component.get("c.getAnkenList");
		action.setCallback(this, function(response) {
				var state = response.getState();
				if (state === "SUCCESS") {
					var stringItems = response.getReturnValue();
					component.set("v.ankenlist", stringItems);
				}
			});
			$A.enqueueAction(action);
	},
	handleChange4AddressA : function(component, event, helper) {

	},
	clickCreate : function(component, event, helper) {
		var action = component.get("c.createAnken");
		var anken = component.get("v.anken");
		action.setParams(
			"anken" : anken
		);
		action.setCallback(this, function(response) {
				var state = response.getState();
				if (state === "SUCCESS") {
					var stringItems = response.getReturnValue();
					component.set("v.ankenlist", stringItems);
				}
			});
			$A.enqueueAction(action);
	}
})