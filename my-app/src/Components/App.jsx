import React from "react";
import Card from "./Card";
import Avatar from "./Avatar";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="data:image/jpeg;base64,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" />
      <Card
        name="Beyonce"
        img="data:image/jpeg;base64,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"
        tel="+123 456 789"
        email="b@beyonce.com<"
      />
      <Card
        name="Johnwick"
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJLUN9G8Vp0USiGS9LMmhC9HIJAD8cE3OG4t1ZSsuqRWy1G8cPSdZIxPg&s=10"
        tel="+123 111 789"
        email="b@John.com<"
      />
      <Card
        name="Harrypotter"
        img="data:image/jpeg;base64,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"
        tel="+ 345 456 789"
        email="Harry@com"
      />
    </div>
  );
}

export default App;

/*
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> 
      */
