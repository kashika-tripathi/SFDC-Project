({
    clickCreateItem: function(component, event, helper) {
        var validRecord = component.find('videoform').reduce(function (validSoFar, inputCmp) {
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        if(validRecord){
            var newRecordItem = component.get("v.newItem");
            var records = component.get("v.items");
            var item = JSON.parse(JSON.stringify(newRecordItem));
            records.push(item);
            component.set("v.items",records);
        }
    }
})