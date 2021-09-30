({
	handleShowVideoEvent : function(cmp, event) {
        var attribute = event.getParam("show");
        cmp.set("v.renderVideo", attribute);
    },
    handleVideoFormSubmitEvent : function(cmp, event) {
        var getUrl = event.getParam("url");
        cmp.set("v.videoUrl", getUrl);
    },
    handleHideVideo : function(cmp, event) {
        cmp.set("v.render", false);
    }
})