export default {
  getSuppliers: async () => {
    const suppliers = await getCompany.run();

    return suppliers.map(s => {
      return {
        Id: s.id,
        Name: s.name,
        Email: s.email,
        Phone: s.phone,
        Address: s.address,
      }
    })
  }
}