---
title: "Using Vue.js in Rails"
description: Vue.js is awesome. I’m telling this after having used React for more than a year in production software. I have written about my experience creating React SPA here. If you haven’t tried Vue yet, I highly recommend giving it a try. The developer experience is at the center. In this guide, we will see how to add Vue to a Rails project. So let’s get rolling.
author: Ankit Singhaniya
topic: Tech
coverImg: abstract1.png
coverImgAlt: Cover image for the blog, "Best Online Form Builders 2022"
published: true
createdAt: "2022-10-01"
---

In this post, we are going to migrate our devise signup page to use Vue. I’ve chosen it after a lot of thought, as it will enable us to see a lot of power that Vue brings to the table. I’ll also use the Webpacker gem. This will allow me to use ES2015 syntax, Vue single file component and hot reloading. It’s ok if you don’t understand all of it. We will cover each topic in detail.

# What we will build

First let us see how the end result will look like. Here are a few screenshots.

The first time view

![Signup page with name, email and password field](/blog/using-vuejs-in-rails/vue-normal.png "Signup page with name, email and password field")

The client side validation

![Signup page with name, email and password field in red color showing validation](/blog/using-vuejs-in-rails/vue-validation.png "Signup page with name, email and password field in red color showing validation")

The server side errors and validation

![Signup page with server side errors](/blog/using-vuejs-in-rails/vue-errors.png "Signup page with server side errors")
