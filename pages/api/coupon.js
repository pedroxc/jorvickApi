function coupon(req, res) {
  const couponCode = req.body.text?.trim().toUpperCase(); // Remove espaços e converte para maiúsculo

  const validCoupons = {
    TESTEGABRIEL: 150,
    TESTEKAMILLY: 150,
  };

  if (validCoupons[couponCode] !== undefined) {
    res.json({ val: validCoupons[couponCode] });
  } else {
    res.status(400).json({ msg: "Invalid or missing coupon" });
  }
}

export default coupon;
