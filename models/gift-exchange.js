class GiftExchange {
  static async pairs() {
    const names = ["me", "you", "them", "us", "her", "him", "they", "y'all"];
    GiftExchange.pairs(names);
    // // ==> GiftExchange.pairs returns
    // [
    // ["they", "us"],
    // ["me", "her"],
    // ["y'all", "you"],
    // ["them", "him"],
    // ]
  }

  static async traditional() {
    const names = ["me", "you", "them", "us", "her", "him", "they", "y'all"];
    GiftExchange.traditional(names);
    //  GiftExchange.traditional ==> returns
    // [
    //   "they is giving a gift to us",
    //   "us is giving a gift to me",
    //   "me is giving a gift to her",
    //   "her is giving a gift to y'all",
    //   "y'all is giving a gift to you",
    //   "you is giving a gift to them",
    //   "them is giving a gift to him",
    //   "him is giving a gift to they",
    // ]
  }
}
module.exports = GiftExchange;
