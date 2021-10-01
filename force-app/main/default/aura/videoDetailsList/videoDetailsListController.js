

({
    handleCreateVideo: function(component, event) {
        var saveVideoAction = component.get("c.createVideo");
            saveVideoAction.setParams({
                "video": component.get("v.newVideoRecord")
            });

            console.log(saveVideoAction);
        
        // Configure the response handler for the action
        saveVideoAction.setCallback(this, function(response) {
            var state = response.getState();
            if(state === "SUCCESS") {
                component.set("v.message", "Video created successfully");
            }
            else if (state === "ERROR") {
                console.log(response.getError());
                console.log('Problem saving Video, response state: ' + state);
            }
            else {
                console.log('Unknown problem, response state: ' + state);
            }
        });

        // Send the request to create the new Video
        $A.enqueueAction(saveVideoAction);
    },
})