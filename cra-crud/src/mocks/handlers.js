import { rest } from 'msw';

export const handlers = [
    rest.get(/product/i, (req, res, ctx) => {
        return res(ctx.json({"data": [
                {
			"id": "1000",
			"code": "f230fh0g3",
			"name": "Bamboo Watch",
			"description": "Product Description",
			"image": "bamboo-watch.jpg",
			"price": 65,
			"category": "Accessories",
			"quantity": 24,
			"inventoryStatus": "INSTOCK",
			"rating": 5
		},
		{
			"id": "1001",
			"code": "nvklal433",
			"name": "Black Watch",
			"description": "Product Description",
			"image": "black-watch.jpg",
			"price": 72,
			"category": "Accessories",
			"quantity": 61,
			"inventoryStatus": "INSTOCK",
			"rating": 4
		},		
        {
			"id": "1006",
			"code": "bib36pfvm",
			"name": "Chakra Bracelet",
			"description": "Product Description",
			"image": "chakra-bracelet.jpg",
			"price": 32,
			"category": "Accessories",
			"quantity": 5,
			"inventoryStatus": "LOWSTOCK",
			"rating": 3
		},
		{
			"id": "1007",
			"code": "mbvjkgip5",
			"name": "Galaxy Earrings",
			"description": "Product Description",
			"image": "galaxy-earrings.jpg",
			"price": 34,
			"category": "Accessories",
			"quantity": 23,
			"inventoryStatus": "INSTOCK",
			"rating": 5
		},
		{
			"id": "1008",
			"code": "vbb124btr",
			"name": "Game Controller",
			"description": "Product Description",
			"image": "game-controller.jpg",
			"price": 99,
			"category": "Electronics",
			"quantity": 2,
			"inventoryStatus": "LOWSTOCK",
			"rating": 4
		},
		{
			"id": "1009",
			"code": "cm230f032",
			"name": "Gaming Set",
			"description": "Product Description",
			"image": "gaming-set.jpg",
			"price": 299,
			"category": "Electronics",
			"quantity": 63,
			"inventoryStatus": "INSTOCK",
			"rating": 3
		},
		{
			"id": "1010",
			"code": "plb34234v",
			"name": "Gold Phone Case",
			"description": "Product Description",
			"image": "gold-phone-case.jpg",
			"price": 24,
			"category": "Accessories",
			"quantity": 0,
			"inventoryStatus": "OUTOFSTOCK",
			"rating": 4
		}
            ]})
        )
    })
]