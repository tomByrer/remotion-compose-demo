# Remotion demo video

<p align="center">
  <a href="https://github.com/JonnyBurger/remotion-logo">
    <img src="https://github.com/JonnyBurger/remotion-logo/raw/main/withtitle/element-0.png">
  </a>
</p>

This is a Remotion demo reel I made to explore [how to compose grouped timed events](https://github.com/remotion-dev/remotion/issues/755).  It is composed like this (assumes you are in `src/`):

 * Main video root: `arrangements/AboutRemotion.jsx`
 * calls `segments/LogoTwoTitle.jsx` 3 times, which uses Remotion's `<Sequence>`
 * logos used in `<LogoTwoTitle />` are in `parts`
 * `actions/lift` wraps the logos to add a bit of animaton


## Commands

**Start Preview**

```console
npm start
```

**Render video**

```console
npm run build
```

**Server render demo**

```console
npm run server
```

See [docs for server-side rendering](https://www.remotion.dev/docs/ssr) here.


## Docs

Get started with Remotion by reading the [fundamentals page](https://www.remotion.dev/docs/the-fundamentals).

## Issues

Found an issue with Remotion? [File an issue here](https://github.com/JonnyBurger/remotion/issues/new).

## License

Animated React & Remotion logos & most of the scripts are from [github.com/remotion-dev](https://github.com/remotion-dev), with a commertial license.  Notice that for some entities a company license is needed. Read [the terms here](https://github.com/JonnyBurger/remotion/blob/main/LICENSE.md).
