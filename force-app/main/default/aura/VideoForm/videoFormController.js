({
    handleClick : function (cmp, event, helper) {
        var videoFormSubmit = $A.get("e.c:VideoFormSubmit");
        // var videoFormSubmit=component.getEvent('videoFormSubmit');
        videoFormSubmit.setParams({
            "videoTypeId" : "https://www.youtube.com/watch?v=e0EmESimI7Q"
        })
        videoFormSubmit.fire();
        
    }
});

