class RoomServices {
  constructor(roomServicesData) {
    this.roomServicesData = roomServicesData;
  }

  findAllOrders(date) {
    return this.roomServicesData.filter(roomService => roomService.date === date);
  }

  findAvailableSandwiches(date) {
    return this.roomServicesData.filter(roomService => roomService.date !== date);
  }

  filterSandwiches() {
    return this.roomServicesData.reduce((acc, roomService) => {
      if (!acc.includes(roomService.food)) {
        acc.push(roomService);
      }
      return acc;
    }, [])
  }
}

export default RoomServices;