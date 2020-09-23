# extendJSAPI
Quick Tableau JS API extension

Usage:

Download and host the embedrocks.js script

Include the js script AFTER the tableau.x.x.x.js

WARNING: Only works with UNMINIFIED version of tableau.js

```html
    <script type="text/javascript" src=".../javascripts/api/tableau-2.5.1.js"></script>
    <script type="text/javascript" src=".../embedrocks.js"></script>
```


Now you have methods on viz for opening the native 

"Subscription" popup:
viz.showSubscriptionDialog()

"Custom Views" popup:
viz.showCustomViewsDialog()

![ScreenShot](https://raw.githubusercontent.com/aalteirac/extendJSAPI/master/pic.png)
