# extendJSAPI
Quick Tableau JS API extension

# DISCLAIMER: THIS IS NOT SUPPORTED BY TABLEAU SOFTWARE AND DELIVERED AS IS WITHOUT WARRANTY
# USE AT YOUR OWN RISK

Usage:

Download and host the embedrocks.js script

Include the js script AFTER the tableau.x.x.x.js


WARNING: Works with all UNMINIFIED tableau.js versions but only works with following tableau.js MINIFIED versions: 

2.7.0, 2.6.0, 2.5.0, 2.4.0, 2.3.0, 2.2.2, 2.2.1

If others are needed contact me :-)

```html
    <script type="text/javascript" src=".../javascripts/api/tableau-2.5.0.min.js"></script>
    <script type="text/javascript" src=".../embedrocks.js"></script>
```


Now you have methods on viz for opening the native 

"Alert" popup:
viz.showDataAlertDialog()

"Subscription" popup:
viz.showSubscriptionDialog()

"Custom Views" popup:
viz.showCustomViewsDialog()

![ScreenShot](https://raw.githubusercontent.com/aalteirac/extendJSAPI/master/pic.png)
