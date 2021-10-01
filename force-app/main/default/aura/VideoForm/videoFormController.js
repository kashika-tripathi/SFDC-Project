({
	fireDisplayVideoEvent : function(cmp, event) {
        var appEvent = $A.get("e.c:displayVideo");
        if(appEvent.getParam("show")==false){
            appEvent.setParams({
            "show" : true });
        } else if(appEvent.getParam("show")==true){
            appEvent.setParams({
            "show" : false });
        }else {
            appEvent.setParams({
            "show" : true });
        }
        appEvent.fire();
    },
    handleUrlClick : function (cmp, event, helper) {
        var videoFormSubmit = $A.get("e.c:videoSearchFormSubmit");
        var enteredUrl=cmp.find("urlInput").get("v.value");
        videoFormSubmit.setParams({
            "url" : enteredUrl
        })
        videoFormSubmit.fire();
    }
})