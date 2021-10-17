public class videoGalleryController {
    @AuraEnabled
    public static videoToEmbed__c[] getVideos(String[] category){

        videoToEmbed__c[] videos = [select video_name__c,video_link__c,Id from videoToEmbed__c where video_category__c In :category];
        return videos;
    }
}
