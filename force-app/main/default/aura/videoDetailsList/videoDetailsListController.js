// ({
//     clickCreateItem: function(component, event, helper) {
//         var validRecord = component.find('videoform').reduce(function (validSoFar, inputCmp) {
//             inputCmp.showHelpMessageIfInvalid();
//             return validSoFar && inputCmp.get('v.validity').valid;
//         }, true);
//         if(validRecord){
//             var newRecordItem = component.get("v.newItem");
//             var records = component.get("v.items");
//             var item = JSON.parse(JSON.stringify(newRecordItem));
//             records.push(item);
//             component.set("v.items",records);
//         }
//     }
// })

({
    handleCreateVideo: function(component, event) {
        var saveVideoAction = component.get("c.createVideo");
            saveVideoAction.setParams({
                "video": component.get("v.newVideoRecord")
            });

            console.log(video);
        
        // Configure the response handler for the action
        saveVideoAction.setCallback(this, function(response) {
            var state = response.getState();
            if(state === "SUCCESS") {
                component.set("v.message", "Video created successfully");
            }
            else if (state === "ERROR") {
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