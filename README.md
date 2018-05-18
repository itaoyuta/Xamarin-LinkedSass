#LinkedSass project  

This project is the minimum skeleton necessary to advance Xamarin CSS development in sass format.

## 0. Verification environment

|platform    |version                 |
|----------|--------------------------|
|OS    |Mac OS 10.13.4                 |
|VisualStudio  |VS for Mac 7.5.1         |
|Node.js  |v5.10.0         |

## 1. Settings
### yarn install
```
$ cd LinkedSass/assets
$ yarn install
```

### VS Custom Command Setting
<img width="958" alt="2018-05-18 22 37 42" src="https://user-images.githubusercontent.com/834927/40240025-8f732a1e-5af2-11e8-8ca0-458ba1f35724.png">

## 2. Create CSS
you can use Scss for your Xamarin project.

__before.scss__  

```
.l-body {
	background-color: #c0c0c0;
	font-size: 14;
	.text-main{
		color: red;
	}
}


[base]contentpage {
	background-color: blue;
	padding: 20;
}

```

__style.css__
 
```
.l-body {
  background-color: #c0c0c0;
  font-size: 14;
}

.l-body .text-main {
  color: red;
}

^contentpage {
  background-color: blue;
  padding: 20;
}
```

## 3. Why use "[base]"
[This is the reason.](https://github.com/itaoyuta/postcss-selector-replace#postcss-selector-replace)
