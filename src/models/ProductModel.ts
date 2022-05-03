export default class ProductModel {
  imageUrl: string

  title: string

  price: number

  constructor(data: any) {
    this.imageUrl = data.imageUrl || data.image
    this.title = data.title
    this.price = data.price
  }

  static fromJson(data: any): ProductModel {
    return new ProductModel(data)
  }
}
