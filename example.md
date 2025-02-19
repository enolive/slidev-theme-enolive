---
theme: ./
layout: fancy-intro
image: 'https://cover.sli.dev'
---

<qr-code value="Hello, World!" class="mb-20"/>

# Slidev Theme Starter

Presentation slides for developers

Some more text...

---

# What is Slidev?

Slidev is a slide maker and presentation tool designed for developers. It includes the following features:

- 📝 **Text-based** - focus on your content with Markdown, then style it later
- 🎨 **Themable** - themes can be shared and reused as npm packages
- 🧑‍💻 **Developer Friendly** - code highlighting, live coding with autocompletion
- 🤹 **Interactive** - embed Vue components to enhance your expressions
- 🎥 **Recording** - built-in recording and camera view
- 📤 **Portable** - export to PDF, PPTX, PNGs, or even a hostable SPA
- 🛠 **Hackable** - virtually anything that's possible on a webpage is possible in Slidev

<br>
<br>

Read more about [Why Slidev?](https://sli.dev/guide/why)

---

# Navigation

Hover in the bottom-left corner to see the navigation's controls panel

## Keyboard Shortcuts

|                                                      |                             |
|------------------------------------------------------|-----------------------------|
| <kbd>space</kbd> / <kbd>tab</kbd> / <kbd>right</kbd> | next animation or slide     |
| <kbd>left</kbd>  / <kbd>shift</kbd><kbd>space</kbd>  | previous animation or slide |
| <kbd>up</kbd>                                        | previous slide              |
| <kbd>down</kbd>                                      | next slide                  |

---
layout: image-right
image: https://cover.sli.dev
---

# Code

Use code snippets and get the highlighting directly!

Note that the display language name is displayed in the top right corner of each code block.

```haskell
-- curried function
-- note that the type signature and implementation are separated
-- you can define different implementations via pattern matching
fac :: Int -> Int
fac n
  | n < 1 -> 1
  | otherwise -> n * fac $ n - 1
```

```ts
// lambda syntax for functions
const add = (a: number, b: number): number => a + b

console.log(add(1, 2))
```

<style>
  .grid-cols-2 {
      grid-template-columns: 2fr 1fr;
  }
</style>

---

# Shiki Magic Move

unfortunately incompatible with the shiki transformers right now![^1]

````md magic-move
```js
console.log(`Step ${1}`)
```
```js
console.log(`Step ${1 + 1}`)
```
```ts
console.log(`Step ${3}` as string)
```
````

[^1]: that's why we get neither the copy code button nor any language names here 😢.

---
layout: center
class: "text-center"
---

# Learn More

[Documentation](https://sli.dev) / [GitHub Repo](https://github.com/slidevjs/slidev)

---
layout: cover
---

# Word Cloud

<word-cloud :list="[
'HTML',  
'Ember',  
'Sass',  
'FlexBox',  
'API',  
'VueJS',  
'Grid',  
'Rest',  
'JavaScript',  
'Animation',  
'React',  
'CSS',  
'Cache',  
'Less',  
'Svelte',  
'Angular',
'Spring Boot',
'Haskell',
'TDD',
'Monads',
'Applicatives',
'Mob Programming',
'Typescript'
]"/>

---

# V-Card with Repo Links

<v-card github-url="test" gitlab-url="test2"/>