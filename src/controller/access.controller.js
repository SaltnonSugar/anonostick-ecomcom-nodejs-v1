"use strict";

class AccessController {
  //sign up
  signUp = async (req, res, next) => {
    try {
      console.log(`[P]::signUp::`, req.body);
      // 200=OK; 201=Created
      return res.status(201).json({
        code: "2001", // code do team định nghĩa
        metadata: {
          userID: 1,
        },
      });
    } catch (error) {
      next(error);
    }
  };
}

//export class AccessController
module.exports = new AccessController();
