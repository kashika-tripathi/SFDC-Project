({
    initialiseVideos : function(component, event, helper) {
        var action = component.get("c.getVideos"); 
         action.setCallback(this, function(response) {
             var state = response.getState();
             if (state === "SUCCESS") {           
                 var allVideos = response.getReturnValue();
                 component.set("v.videos", allVideos);
             }                    
             else if (state === "ERROR") {
                 var errors = response.getError();
                 if (errors) {
                     if (errors[0] && errors[0].message) {
                         console.log("Error message: " + 
                                     errors[0].message);
                     }
                 } 
                 else {
                     console.log("Unknown Error");
                 }
             }
         });
         $A.enqueueAction(action);
     }
})