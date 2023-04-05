import React from "react";

const contacts = [
  {
    name: "Beyonce",
    img: "data:image/jpeg;base64,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",
    tel: "+123 456 789",
    email: "b@beyonce.com",
  },

  {
    name: "Johnwick",
    img: "https://encrypted-tbn0.gstatic.com/images?q:tbn:ANd9GcQJLUN9G8Vp0USiGS9LMmhC9HIJAD8cE3OG4t1ZSsuqRWy1G8cPSdZIxPg&s=10",
    tel: "+123 111 789",
    email: "b@John.com",
  },
  {
    name: "Harrypotter",
    img: "data:image/jpeg;base64,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",
    tel: "+ 345 456 789",
    email: "Harry@com",
  },
];

export default contacts;
