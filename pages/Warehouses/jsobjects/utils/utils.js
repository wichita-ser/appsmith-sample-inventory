export default {
  getAllWarehouses: async () => {
    const warehouseData = await getProductWarehouse.run();
    return warehouseData.map(d => {
      return {
        Id: d.id,
        Name: d.label,
        Address: d.address,
        Country: d.country,
        State: d.state,
        City: d.city,
        Postcode: d.postal_code,
      }
    })
  }
}