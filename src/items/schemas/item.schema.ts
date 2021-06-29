import * as mongoose from 'mongoose';

export const ItemSchema = new mongoose.Schema({
    category: String,
    items: Object,
    image: String
});
