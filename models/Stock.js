const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StockSchema = new Schema({
  name: { type: String, required: true },
  tickerSymbol: { type: String, required: true, unique: true },
  sharesOwned: { type: Number, required: true, default: 0 },
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Stock", StockSchema);
