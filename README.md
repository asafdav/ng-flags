ng-flags - AngularJS country flags directive
========

Simple directive for country flags,
The directive takes country iso code and creates a thumbnail of the country's flag.


## Usage
1. Add ng-flag.js to your main file (index.html)

2. Set `ngFlag` as a dependency in your module
  ```javascript
  var myapp = angular.module('myapp', ['ngFlag'])
  ```

3. Add the following line to the head section of your main file
  ```code
  <link rel="stylesheet" type="text/css" href="http://cloud.github.com/downloads/lafeber/world-flags-sprite/flags16.css" />
  ```

4. Start drawing flags
  ```html
  <flag country="us" size="16"></flag>

* 32x32 thumbnails are also supported, just add the following line to your head:

```code
<link rel="stylesheet" type="text/css" href="http://cloud.github.com/downloads/lafeber/world-flags-sprite/flags32.css" />
```

And and specify the wanted sizein your html:
  ```html
  <flag country="us" size="32"></flag>
  ```


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/asafdav/ng-flags/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

