public with sharing class VideoFormController {
 
       
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

