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
	}
})