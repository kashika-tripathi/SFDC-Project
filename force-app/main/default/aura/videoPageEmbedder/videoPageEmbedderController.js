({
    handleLikeToggle : function (cmp, event) {
        var increaseLikeAction = cmp.get("c.increaseLike");
        increaseLikeAction.setParams({
                "url": cmp.get("v.videoUrl")
            });
        $A.enqueueAction(increaseLikeAction);
    },
    handleDisLikeToggle : function (cmp, event) {
        var increaseDisLikeAction = cmp.get("c.increaseDisLike");
        increaseDisLikeAction.setParams({
                "url": cmp.get("v.videoUrl")
            });
        $A.enqueueAction(increaseDisLikeAction);
    }
})