global with sharing class videoToEmbedController extends VisualEditor.DynamicPickList{
    global override VisualEditor.DataRow getDefaultValue(){
        VisualEditor.DataRow defaultValue = new VisualEditor.DataRow(' ',' ');
        return defaultValue;
    }
    
    // To return the list of Sobjects.
    global override VisualEditor.DynamicPickListRows getValues() {
        List<videoToEmbed__c> videos = [select video_link__c,video_name__c from videoToEmbed__c];
        VisualEditor.DataRow objListValue;
        VisualEditor.DynamicPickListRows  lstVideobjectsLinks = new VisualEditor.DynamicPickListRows();
        for( videoToEmbed__c video : videos){
            objListValue = new VisualEditor.DataRow(video.video_name__c,video.video_link__c);
        	lstVideobjectsLinks.addRow(objListValue);
        }
        return lstVideobjectsLinks;
    }
}
