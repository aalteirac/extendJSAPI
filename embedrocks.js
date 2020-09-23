if(tableau)
    Array.prototype.push=(function(){
		var original = Array.prototype.push;
		return function() {
			if(arguments[0] && arguments[0]._impl && arguments[0]._impl.$viz){
				console.log("Viz array ready for patch, restoring original Array prototype...");
				Array.prototype.push=original;
				this.push = function (){
					Array.prototype.push.apply(this,arguments);
					tableau.VizManager.getVizs().map((v)=>{
						if(!v.patched){
							console.log("New Viz successfully patched!!");
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
							v.showSubscriptionDialog= function Viz$ShowSubscriptionDialog() {
								var returnHandler={
									$commandName:"api.ShowSubscribeDialog",
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
					return true;
				}
				console.log("Viz array successfully patched!!",this);
				return this.push.apply(this,arguments);
			};

			return original.apply(this,arguments);
		};
	})();