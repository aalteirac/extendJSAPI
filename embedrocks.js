if(tableau)
    tableau.ptxx=setInterval(()=>{
        tableau.VizManager.getVizs().map((v)=>{
            if(!v.patched){
                console.log("API successfully patched with v1.00");
                v.showCustomViewsDialog= function Viz$ShowCustomViewsDialog() {
                    var returnHandler={
                        $commandName:"api.ShowCustomViewsDialog",
                        $errorCallback:  function(a,b){},
                        $successCallBack: function(a){},
                        $successCallbackTiming:1,
                        get_commandName:function(){return this.$commandName}
                    }
                    this._impl.$messagingOptions.sendCommand(Object).call(this._impl.$messagingOptions, null, returnHandler);
                }
                v.patched=true;
            }
        })
    },1000)