import chai from 'chai';
const expect = chai.expect;
import RoomServices from '../src/Room-services';
import roomServices from '../src/data/roomServices-data';

describe('Roomservices', () => {
  let roomservices;

  beforeEach(() => {
    roomservices = new RoomServices(roomServices);
  });

  it('should be an instance of RoomServices', () => {
    expect(roomservices).to.be.an.instanceof(RoomServices);
  });

  it('should find all orders for a specific date', () => {
    expect(roomservices.findAllOrders('2019/08/24').length).to.eql(3);
  });

  it('should find all sandwiches available on a specific date', () => {
    expect(roomservices.findAvailableSandwiches('2019/08/24').length).to.eql(15);
  });

  it('should find list of available food options and prices', () => {
    expect(roomservices.filterSandwiches().length).to.eql(18);
  });

});