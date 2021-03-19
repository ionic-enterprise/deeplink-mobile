# Ionic Customer Success Deep Linking Demo

This application demonstrates the basics of using the [Deeplinks](https://github.com/ionic-team/ionic-plugin-deeplinks) plugin along with the [Deeplinks Ionic Native Wrapper](https://ionicframework.com/docs/native/deeplinks/).

The deep link looks like this: https://cs-demo-deeplink.herokuapp.com/oolong. Any of the tea categories on that web page should deep link into the application itself. Here is a full set of the https links:

- [White](https://cs-demo-deeplink.herokuapp.com/white)
- [Yellow](https://cs-demo-deeplink.herokuapp.com/yellow)
- [Green](https://cs-demo-deeplink.herokuapp.com/green)
- [Oolong](https://cs-demo-deeplink.herokuapp.com/oolong)
- [Black](https://cs-demo-deeplink.herokuapp.com/black)
- [Dark](https://cs-demo-deeplink.herokuapp.com/dark)
- [Puer](https://cs-demo-deeplink.herokuapp.com/puer)
- [Herbal](https://cs-demo-deeplink.herokuapp.com/herbal)

## Android

The deep linking should work out of the box on most Android devices though it does not include the full [Android App Links](https://developer.android.com/training/app-links/#web-assoc) setup.

## iOS

This demo does not fully work on iOS. Some more configuration is required as documented in the following two articles:

* https://developer.apple.com/library/archive/documentation/General/Conceptual/AppSearch/UniversalLinks.html
* https://blog.branch.io/how-to-setup-universal-links-to-deep-link-on-apple-ios/

Links with the `csdldemo://` schema _do_ work. It is just the web links that do not.
