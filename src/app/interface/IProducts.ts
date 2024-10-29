/**
 * "id": "10",
    "name": "Mouse",
    "price": 50,
    "description": "A wireless mouse with ergonomic design.",
    "imageUrl": "https://via.placeholder.com/150?text=Mouse",
    "categoryId": "2",
    "available": true,
    "type": "type1"
 */
export interface IProducts {
    id?: string| number,
    name: string,
    price: number,
    description: string,
    imageUrl: string,
    categoryId: string,
    available: boolean,
    type: string
}
