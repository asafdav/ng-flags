ng-flags
========

Simple directive for country flags,
The directive takes country iso code and creates a thumbnail of the country's flag.

Simple directive that turns arrays and objects into downloadable CSV files


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
  <span flag="'us'" flag-size="f16"></span>
  ```

* 32x32 thumbnails are also supported, just add the following line to your head:

```code
<link rel="stylesheet" type="text/css" href="http://cloud.github.com/downloads/lafeber/world-flags-sprite/flags32.css" />
```

And and specify the wanted sizein your html:
  ```html
  <span flag="'us'" flag-size="f32"></span>
  ```
