import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class ItemsService {
  constructor(
    @InjectModel('Item') private readonly itemModel: Model<Item>
  ) {}

  async findAll(): Promise<Item[]> {
    return await this.itemModel.find();
  }

  async findOne(id: string): Promise<Item> {
    return await this.itemModel.findOne({ _id: id });
  }

  async create(item: Item): Promise<Item> {
    const newItem = new this.itemModel(item);
    return await newItem.save();
  }

  async delete(id: string): Promise<Item> {
    return await this.itemModel.findByIdAndRemove(id);
  }

  async update(id: string, item: Item): Promise<Item> {
    return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
  }
}


//mine
// @Injectable()
// export class ItemsService {

//   readonly itemsDatabase = [
//     {
//       id: "1",
//       category: "Ladies",
//       items: [
//         {
//           id: "1",
//           name: "Pink Leather Grogue Shoes",
//           description: "A versatile addition to your shoe collection, this stylish pink grogue shoes make the perfect match for your workwear or weekend wardrobes.",
//           price: 50,
//           qty: 7,
//           sizes: [{4: 5}, {5: 2}, {6: 1}, {7: 0}],
//           category: "ladies",
//           img: "https://images.unsplash.com/photo-1499013819532-e4ff41b00669?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
//         },
//         {
//           id: "2",
//           name: "Platform trainers",
//           description: "Sleek and clean style is combined with the light, flexible Skechers comfort that you know and love. The soft woven mesh fabric upper is imagined in a slip-on silhouette with sporty bungee lacing.",
//           price: 65,
//           qty: 4,
//           sizes: [{4: 0}, {5: 2}, {6: 1}, {7: 4}],
//           category: "ladies",
//           img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
//         },
//         {
//           id: "3",
//           name: "Heels",
//           description: "something about shoes",
//           price: 55,
//           qty: 4,
//           sizes: [{4: 5}, {5: 0}, {6: 1}, {7: 1}],
//           category: "ladies",
//           img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
//         },
//         {
//           id: "4",
//           name: "Slip ons",
//           description: "something about shoes",
//           price: 60,
//           qty: 4,
//           sizes: [{4: 0}, {5: 2}, {6: 1}, {7: 1}],
//           category: "ladies",
//           img: "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=700&q=80"
//         }
//       ]
//     },
//     {
//       id: "2",
//       category: "Men",
//       items: [
//         {
//           id: "1",
//           name: "Minty Oxford Shoes",
//           description: "This suede oxford shoes lend a formal note to your office dressing. Soft leather insole provides comfort with padded arch support and the soft pointed toe is neatly finished with a classic toe cap.",
//           price: 60,
//           qty: 0,
//           sizes: [{5: 5}, {6: 0}, {7: 1}, {8: 2}],
//           category: "men",
//           img: "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=700&q=80"
//         },
//         {
//           id: "2",
//           name: "Dawood Leather Derby Shoes",
//           description: "A traditional shape with modern finishes, Dawood is our gent's casual lace-up shoe retains all the elements of a classic style for your work to weekend dressing.",
//           price: 65,
//           qty: 4,
//           sizes: [{5: 0}, {6: 2}, {7: 1}, {8: 1}],
//           category: "men",
//           img: "https://images.unsplash.com/photo-1548764703-22c55cbd8210?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
//         }
//       ]
//     }
//   ];

//   async findAll(): Promise<Item[]> {
//     return await this.itemsDatabase;
//   }

//   async findOne(id: string): Promise<Item> {
//     for (var i=0; i < this.itemsDatabase.length; i++) {
//       if (this.itemsDatabase[i].id === id) {
//           return await this.itemsDatabase[i];
//       }
//     }
//   }

//   // async create(item: Item): Promise<Item> {
//   //   return await newItem.save();
//   // }

//   // async delete(id: string): Promise<Item> {
//   //   return await this.itemModel.findByIdAndRemove(id);
//   // }

//   // async update(id: string, item: Item): Promise<Item> {
//   //   return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
//   // }
// }