import React, { useState } from "react";
import ChatRoomItem from "./ChatRoomItem";
import CreateRoomModal from "./CreateRoomModal";
import { observer } from "mobx-react";
import roomsStore from "../stores/roomsStore";

function ChatRoomsList({ rooms }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  const roomsList = roomsStore.rooms.map((room) => {
    return <ChatRoomItem room={room} key={room.id} />;
  });
  return (
    <div className="main__chatlist">
      <button className="btn">
        <i className="fa fa-plus"></i>
        <span onClick={openModal}>New room</span>
        <CreateRoomModal isOpen={isOpen} closeModal={closeModal} />
      </button>
      <center>
        <div className="chatlist__heading">
          <h2>Chat rooms</h2>
        </div>
      </center>

      <div className="chatlist__items">{roomsList}</div>
    </div>
  );
}
export default observer(ChatRoomsList);
