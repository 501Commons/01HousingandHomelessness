({
    doInit : function(component, event, helper) {

    },

    handleFlowLaunch: function(component, event, helper) {
        var eventData = event.getParam('eventParams');
        component.set("v.showModal",eventData.showFlow);
        var inputVariables = [];
        if(eventData.showFlow){
            var flow = component.find("flow");
            flow.startFlow("CreateAccLwc", inputVariables);
        }
    },

    statusChange : function (event) {

        if (event.getParam('status') === "FINISHED") {
            var outputVariables = event.getParam("outputVariables");
            window.console.log('flow data',JSON.stringify(outputVariables) );
            for(var i = 0; i < outputVariables.length; i++) {
               var outputVar = outputVariables[i];
                if(outputVar.name === "accInfoCreated") {
                  var toastEvent = $A.get("e.force:showToast");
                  toastEvent.setParams({
                    "title": "Success!",
                    "message":"Referral Sent",
                      "type":"success"
                  });
                  toastEvent.fire();
                }
            }
        }

    }
})