import axios from "axios";
import { makeAutoObservable } from "mobx";

class RoomsStore {
  rooms = [];
  constructor() {
    makeAutoObservable(this);
  }
  fetchRooms = async () => {
    try {
      const getRooms = await axios.get(
        "http://coded-task-axios-be.herokuapp.com/rooms"
      );
      this.rooms = getRooms.data;
    } catch (error) {}
  };
  handleCreateRoom = async (room) => {
    try {
      const addRoom = await axios.post(
        `https://coded-task-axios-be.herokuapp.com/rooms`,
        room
      );
      this.rooms = [...this.rooms, addRoom.data];
    } catch (error) {}
  };
  handleDeleteRoom = async (roomId) => {
    try {
      const deleteRoom = await axios.delete(
        `https://coded-task-axios-be.herokuapp.com/rooms/${roomId}`
      );
      this.rooms = this.rooms.filter((room) => room.id !== roomId);
    } catch (error) {}
  };

  handleUpdateRoom = async (room) => {
    try {
      const updateRoom = await axios.put(
        `https://coded-task-axios-be.herokuapp.com/rooms/${room.id}`,
        room
      );
      this.rooms.find((_room) => _room.id === room.id);
    } catch (error) {
      console.error(error);
    }
  };
}

const roomsStore = new RoomsStore();
roomsStore.fetchRooms();
export default roomsStore;
