# extendJSAPI
Quick and dirty Tableau JS API extension

WIP, the patching method is still very dirty...

Usage:

Download and host the embedrocks.js script

Include the js script AFTER the tableau.x.x.x.js

```html
    <script type="text/javascript" src=".../javascripts/api/tableau-2.5.1.js"></script>
    <script type="text/javascript" src=".../embedrocks.js"></script>
```


Now you have a new method on viz for opening the native "Custom Views" popup:

viz.showCustomViewsDialog()

![ScreenShot](https://raw.githubusercontent.com/aalteirac/extendJSAPI/master/pic.png)
