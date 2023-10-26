"use strict";

const shopModel = require("../model/shop.model");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const roleShop = {
  SHOP: "SHOP",
  WRITER: "WRITER",
  EDITOR: "EDITOR",
  ADMIN: "ADMIN",
};

class AccessService {
  static signUp = async ({ name, email, password }) => {
    try {
      // step 1: check email
      const holderEmail = await shopModel.findOne({ email }).lean();
      if (holderEmail) {
        return {
          code: "xxxx",
          message: "Shop already registed",
        };
      }
      const passwordHash = bcrypt.hash(password, 10);
      const newEmail = await shopModel.create({
        name,
        email,
        password: passwordHash,
        roles: [roleShop.SHOP],
      });
      if (newEmail) {
        //create private key, public key
        const { privateKey, publicKey } = crypto.generateKeyPairSync("rsa", {
          modulusLength: 4096,
        });
        console.log({ privateKey, publicKey }); // save to KeyStore Collection
      }
    } catch (error) {
      return {
        code: Error,
        message: error.message,
        status: "error",
      };
    }
  };
}
