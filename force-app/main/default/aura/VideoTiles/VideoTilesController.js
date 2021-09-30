({
    handleChange : function(component, event, helper) {
        var videoTypeId = event.getParam("videoTypeId");

        console.log(videoTypeId);
        // set the handler attributes based on event data
        debugger;
        alert("hello"+videoTypeId);
        cmp.set("v.videoLink", videoTypeId);
        
       
    }
})
