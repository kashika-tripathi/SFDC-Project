({
    callServer : function(component,method,callback,params) {
       
        //method->getBoatTypes ie server side method name
        //params->parameter whic is passed insde the method
        var action=component.get(method);
        if(params){
            action.setParams(params);
        }
        action.setCallback(this,function(response){
            var state=response.getState();
            if(state==="SUCCESS"){
                callback.call(this,response.getReturnValue());
            }else if(state==="ERROR"){
                var errors=response.getError();
                if(errors){
                    console.log("Errors",errors);
                    if(errors[0] && errors[0].message){
                        throw new Error("Error",errors[0].message);
                    }
                }else{
                    throw new Error("unknown error");
                }
            }
        });

        $A.enqueueAction(action);

    }
})
