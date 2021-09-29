({
    handleChange : function(component, event, helper) {
        var videoTypeId = event.getParam("videoTypeId");

        // set the handler attributes based on event data
        cmp.set("v.VideoLink", videoTypeId);
        alert("hello"+videoTypeId);
       
    }
})
