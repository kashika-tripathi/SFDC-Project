public class videoGalleryController {
    @AuraEnabled
    public static videoToEmbed__c[] getVideos(){
        videoToEmbed__c[] videos = [select video_link__c,Id from videoToEmbed__c];
        return videos;
    }
}
