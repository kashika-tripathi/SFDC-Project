({
    createRecord: function(component, item) {
        var theitems = component.get("v.items");
        var newitem = JSON.parse(JSON.stringify(item));
        theitems.push(newitem);
        component.set("v.items", theitems);
        
        component.set("v.newItem",{ 'sobjectType': 'videoToEmbed__c','Name': '','video_creationDate__c': null,
                    'video_discription__c': '','video_dislike__c': 0,'video_dislike__c': 0});
    }
})