import chai from 'chai';
const expect = chai.expect;
import RoomServices from '../src/Room-services';

describe('Roomservices', () => {
  let roomServices;

  beforeEach(() => {
    roomServices = new RoomServices();
  });

  it('should be an instance of RoomServices', () => {
    expect(roomServices).to.be.an.instanceof(RoomServices);
  });

  it.skip('should find all orders for a specific date', () => {
    expect(roomServices.findAllOrders('2019/08/24').length).to.eql(3);
  });

  it.skip('should find all orders for a specific customer', () => {
    expect(roomServices.createReceiptForCustomer('Matilde Larson').length).to.eql(1);
  });

  it.skip('should find list of available food options and prices', () => {
    expect(roomServices.filterSandwiches().length).to.eql(19);
  })

});