const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StockSchema = new Schema({
  tickerSymbol: { type: String, required: true, unique: true },
  sharesOwned: { type: Number, required: true, default: 0 },
  purchasePrice: { type: Number, required: true },
  purchaseDate: { type: Date, required: true },
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Stock", StockSchema);
