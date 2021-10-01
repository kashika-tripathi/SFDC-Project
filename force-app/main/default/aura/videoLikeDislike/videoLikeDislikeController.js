({
    handleToggle : function (cmp, event) {
        var liked = cmp.get("v.liked");
        cmp.set("v.liked", !liked);
    }
})