import React from "react";
// import ToDo from "./ToDo";
import ContactCard from "./ContactCard";
function App() {
  return (
    // <div className="todo-list">
    //   <ToDo />
    //   <ToDo />
    //   <ToDo />
    //   <ToDo />
    // </div>
    // Cat cards App
    <div className="contacts">
      <ContactCard
        contact={{
          name: "Mr. Whiskerson",
          imgUrl: "http://placekitten.com/300/200",
          phone: "(212) 555-1234",
          email: "mr.whiskaz@catnap.meow"
        }}
      />

      <ContactCard
        contact={{
          name: "Fluffykins",
          imgUrl: "http://placekitten.com/400/200",
          phone: "(212) 555-2345",
          email: "fluff@me.com"
        }}
      />

      <ContactCard
        contact={{
          name: "Destroyer",
          imgUrl: "http://placekitten.com/400/300",
          phone: "(212) 555-3456",
          email: "ofworlds@yahoo.com"
        }}
      />

      <ContactCard
        contact={{
          name: "Felix",
          imgUrl: "http://placekitten.com/200/100",
          phone: "(212) 555-4567",
          email: "thecat@hotmail.com"
        }}
      />
    </div>
  );
}

export default App;
