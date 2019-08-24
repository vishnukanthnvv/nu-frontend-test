# NUTECH Frontend Test

- [Minimum requirements](#minimum-requirements)
- [Running the Application](#running-the-application)
- [Test description](#test-description)


## Minimum requirements

- [Node 6.9.1][nodejs]


## Running the Application

```shell
$ npm run dev
```

## Test description

It is required to implement a simple shopping cart.

It must have two important sections:

- An Item list showing the product catalog
- Basket list, having all the items which are going to be purchased by the user.

These are the business rules:

- Each catalog item must have an action button to `add item to cart`.

- Each cart item must have an action button to `remove item from cart`.


### Bonus points

- Use redux as state manager.
- Favor using map, filter, reduce, forEach.
- Favor using functional components in your application.

[nodejs]: https://nodejs.org/en/download/
