function coupon(req, res) {
  console.log(req.body.text);
  if (req.body.text === "TESTEGABRIEL") {
    res.json({
      val: "150",
    });
  }
}
export default coupon;
