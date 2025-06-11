# Core directives

This folder contains Vue directives that are used in the application.
All other domains can use directives created here pretty much the same as anything in the Core domain.

## Available directives

As of today, we have only 1 custom directive - **v-style**.
This directive combines the power of UnoCSS with CSS custom variables to provide a way to
dynamically style component DOM nodes based on API response.
We use this directive mainly inside CMS components since those components'
styling is not deterministic and can be customized via CMS configurations.

V-style directive is quite simple, it only does 2 things with a DOM node it's attached to:

- It adds a set of CSS classes that are tight to UnoCSS custom properties' generation.
- It adds a set of styles that specify the value of those custom properties.

### Usage

Make sure you use this directive
only when you have to support responsive styling on different breakpoints.
If you only need to apply the same dynamic styling on all resolutions,
use regular inline styles instead.
You can check how this directive is used in a lot of CMS components of the project,
but here is a quick example:

Let's assume we have a response with the next data object:

```JSON
"titleColor": {
  "sm": "#656565e0",
  "md": "red",
  "lg": "blue"
}
"titleBackground": {
  "sm": "#656565e0",
  "md": "red",
  "lg": "green"
}
```

> Using as a single prop, you can directly specify which CSS property you want to style.
> List of all available properties can be found inside the directive's code.
> Prop prefixes should match UnoCSS utility names,
> in the example below we will provide a responsive value for the CSS `color` property.

```html
<template>
  <div v-style:c="titleColor" />
</template>
```

> If you want to style several properties on a single DOM node, you should pass an object instead of
> using a directive prefix

```html
<template>
  <div v-style="{ c: titleColor, bg: titleBackground }" />
</template>
```
Make sure to check internal directive code to see all available properties.

In case of questions, you can reach out to the Core or CMS teams that support this directive.
