({
    
    onVideoSelect:function(cmp,event,helper){
        var attribute = event.getParam("videosSelected");
        var attributeShow = event.getParam("show");
        if(helper.pla!=10 && helper.pla!=1 && attributeShow==true && helper.pla!=2){
            helper.pla.destroy();
            helper.pla=2;
        }
        cmp.set("v.isWatching",false);
        
        cmp.set("v.videos", attribute);
        cmp.set("v.videoUrl","please select");
    },
    initialiseVideos : function(cmp,event,helper){
       
        cmp.set("v.videoUrl",cmp.find("onjId").get("v.value"));
        
        if(helper.pla!=10 && helper.pla!=1 && helper.pla!=2){
            helper.pla.destroy();
            helper.pla=1;
            cmp.set("v.isWatching",false);
            cmp.set("v.isWatchingvideo",false);
        }
    },
    handleVideoWatch : function(cmp,event,helper){
        
        var userId = $A.get("$SObjectType.CurrentUser.Id");
        cmp.set("v.uId",userId);
        var url = cmp.get("v.videoUrl");
        if(url===" " || url==="please select"){
            alert("please select a video to show");
        }
        else{
            cmp.set("v.isWatching",true);
            
            var createWatchedUser = cmp.get("c.videoViewUserController");
        createWatchedUser.setParams({
            "uId": userId,
            "url": url,
        });
        $A.enqueueAction(createWatchedUser);
        url=url.split('embed/')[1];
        
        const containerElem = cmp.find("div1").getElement();
        const playerElem = document.createElement('DIV');
        containerElem.appendChild(playerElem);
        helper.pla = new YT.Player(playerElem, {
            height: '390',
            width: '100%',
            videoId: url,
            playerVars: {'autoplay': 1,'controls': 0 }
        });
        }
        
        //component.set("v.play",player);
    },
    
    handleStopVideo:function(cmp,event,helper){
        helper.pla.destroy();
        helper.pla=1;
        cmp.set("v.isWatching",false);
        cmp.set("v.isWatchingvideo",false);
    },
    handlePlayVideo : function(cmp,event,helper){
        helper.pla.playVideo();
    },
    handlePauseVideo : function(cmp,event,helper){
        helper.pla.pauseVideo();
        var a = cmp.get('c.handleVideoShowPercentage');
        $A.enqueueAction(a);
    },
    handleVideoShowPercentage : function(cmp,event,helper){
        var pausedTime = helper.pla.getCurrentTime();
        var totalTime = helper.pla.getDuration();
        var percentage = (pausedTime/totalTime)*100;

        var action = cmp.get("c.updatePercentageWatched");
        action.setParams({
            "uId": cmp.get("v.uId"),
            "percent": percentage
        });
        $A.enqueueAction(action);
    },
    handleLikeToggle : function (cmp, event) {
        cmp.set("v.liked",true);
        var increaseLikeAction = cmp.get("c.increaseLike");
        increaseLikeAction.setParams({
                "url": cmp.get("v.videoUrl")
            });
        $A.enqueueAction(increaseLikeAction);
    },
    handleDisLikeToggle : function (cmp, event) {
        cmp.set("v.disLiked",true);
        var increaseDisLikeAction = cmp.get("c.increaseDisLike");
        increaseDisLikeAction.setParams({
                "url": cmp.get("v.videoUrl")
            });
        $A.enqueueAction(increaseDisLikeAction);
    }
})