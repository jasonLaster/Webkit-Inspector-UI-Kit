## Inspector UI Kit

The goal of the project is to capture common UI elements in the webkit inspector and share their css and js.


#### HTML Element
The HTML element is the markup and css needed to display an html element as it shows up in the elements tab.

The big caveat here is that to properly draw a full DOM Node requires extracting the WebInspector.DOMNode and WebInspector.ElementsOutlineTree js, which is outside the scope of this project.

![](http://f.cl.ly/items/2Y3W0v112P272E3H0n0n/Image%202014-10-16%20at%202.37.49%20PM.png)

#### Sidebar Panel

The sidebar panel is the markup and css needed to show the sources sidebar.

It includes a pane with a title, body, and right toolbar.

I also included many of the styles needed for showing a basic property, although that will have to be flushed out more as it gets more usage.

![](http://f.cl.ly/items/2H3E3W2C2s3N2o2H2t0a/Image%202014-10-16%20at%202.22.41%20PM.png)






### Webkit Node Inspector

It goes without saying that none of this would be possible without the fantastic work put into the webkit and blinky devtools. Much of this is available here https://github.com/node-inspector/
