export default {
  getProducts: async () => {
    const products = await getProducts.run();
    let filteredProducts = products;

    return filteredProducts.map(p => ({
      Id: p.id,
      Name: p.name,
      SalePrice: p.price,
      CostPrice: p.cost,
      Sku: p.sku,
      Category: p.category,
      LowStock: p.low_stock,
      Image: p.image,
      TotalStock: p.total_stock,
      VariationId: p.product_variant_id,
      Description: p.description
    }));
  },
}