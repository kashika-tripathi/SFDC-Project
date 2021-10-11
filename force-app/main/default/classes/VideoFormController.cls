public with sharing class VideoFormController {
 
    @AuraEnabled
    public static void videoViewUserController(String uId,String url) {
        UserWatchedVideo__c viewer = new UserWatchedVideo__c();
        UserWatchedVideo__c[] viewerAlready = [select UserWhoIsWatching__r.Id,video_watched__r.video_link__c from UserWatchedVideo__c];
        for(UserWatchedVideo__c userPresent : viewerAlready){
            if(userPresent.UserWhoIsWatching__r.Id==uId && userPresent.video_watched__r.video_link__c==url){
                return;
            }
        }
        User current = [select Name from User where Id=: uId];
        videoToEmbed__c video = [select Id from videoToEmbed__c where video_link__c=:url];
        viewer.UserWhoIsWatching__c = uId;
        viewer.Name = current.Name;
        viewer.video_watched__c = video.Id;
        insert viewer;
    }
    @AuraEnabled
    public static void updatePercentageWatched(String uId,Double percent) {
        UserWatchedVideo__c current = [select Name,watched_Percentage__c from UserWatchedVideo__c where UserWhoIsWatching__r.Id=: uId];
        current.watched_Percentage__c = percent;
        update current;
    }

    @AuraEnabled
    public static videoToEmbed__c createVideo(videoToEmbed__c video){
        upsert video;
        System.debug(video);
        return video;
    }

    @AuraEnabled
    public static void increaseLike(String url){
        videoToEmbed__c video = [select video_like__c from videoToEmbed__c where  video_link__c=:url];
        video.video_like__c = video.video_like__c + 1;
        update video;
    }

    @AuraEnabled
    public static void increaseDisLike(String url){
        videoToEmbed__c video = [select video_dislike__c from videoToEmbed__c where  video_link__c=:url];
        video.video_dislike__c = video.video_dislike__c + 1;
        update video;
    }
}

