# VitalSource Downloader

This script lets you download an ebook from VitalSource in EPUB format.

## Usage

Go to [`index.js`](index.js). Change `globalCookieVal` to the cookie header sent from jigsaw.vitalsource.com in the browser after authentication. Then change `bookID` to the numerical ISBN of the ebook you're downloading.

```bash
npm start
```

Alternatively, you can also run `node index`

![](sample.png)

## License

[MIT](LICENSE) © [Cyberscape](https://cyberscape.co/).
