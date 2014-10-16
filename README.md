## Inspector UI Kit

The goal of the project is to capture common UI elements in the webkit inspector and share their css and js.


#### HTML Element
The HTML element is the markup and css needed to display an html element as it shows up in the elements tab.

The big caveat here is that to properly draw a full DOM Node requires extracting the WebInspector.DOMNode and WebInspector.ElementsOutlineTree js, which is outside the scope of this project.

![](http://f.cl.ly/items/2t0X3b0J02100T353r3Y/Image%202014-10-15%20at%2011.20.09%20PM.png)


### Webkit Node Inspector

It goes without saying that none of this would be possible without the fantastic work put into the webkit and blinky devtools. Much of this is available here https://github.com/node-inspector/
