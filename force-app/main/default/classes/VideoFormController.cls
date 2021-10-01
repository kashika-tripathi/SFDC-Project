public with sharing class VideoFormController {
 
       
    @AuraEnabled
    public static videoToEmbed__c createVideo(videoToEmbed__c video){
        upsert video;
        System.debug(video);
        return video;
    }
    }

