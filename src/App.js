import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ChatRoom from "./components/ChatRoom";
import ChatRoomsList from "./components/ChatRoomsList";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [rooms, setRooms] = useState([]);

  const createRoom = (newRoom) => {
    // to do : call BE to create a room
  };

  const deleteRoom = (id) => {
    // to do : call BE to delete a room
  };

  return (
    <div className="__main">
      <div className="main__chatbody">
        <center>
          <Routes>
            <Route
              path="/room/:roomSlug"
              element={<ChatRoom rooms={rooms} />}
            />
            <Route
              exact
              path="/"
              element={<ChatRoomsList rooms={createRoom()} />}
            />
          </Routes>
        </center>
      </div>
    </div>
  );
};

export default App;
