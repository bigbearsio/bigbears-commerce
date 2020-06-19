# Schema

## Store

### Types
input StoreInput {
  title: String
  description: String
  cover?: String
  logo?: String
}

type StoreInfo {
  id: ID!
  title: String
  description: String
  cover?: String
  logo?: String
}

### Query
type Query {
  getAllStore(): StoreInfo[]
  getStore(id: ID!): StoreInfo
}

### Mutation
type Mutation {
  createStore(input: StoreInput): StoreInfo
  updateStore(id:ID!, input:StoreInput): StoreInfo
}

## Inventory

### Types
input ProductInput {
  title: String
  description: String
  image_url?: String
  additional_image_url?: String[]
  price: Float
  sale_price?: Float
  sale_preice_effective_date?: int
  cost_per_item?: Float
  is_charge_tax?: Float
  sku: String
  track_inventory_status?: Boolean
  sale_without_stock?: Boolean
  inventory?: Int
  condition?: String
  is_physical_good: Boolean
  weight?: Float
  country_of_origin?: String
  harmonize_code?: String
  has_variant?: Boolean
  product_type: Int
  brand: String
  return_policy?: String
}

input ProductInfo {
  id: ID!
  title: String
  description: String
  image_url?: String
  additional_image_url?: String[]
  price: Float
  sale_price?: Float
  sale_preice_effective_date?: int
  cost_per_item?: Float
  is_charge_tax?: Float
  sku: String
  track_inventory_status?: Boolean
  sale_without_stock?: Boolean
  inventory?: Int
  condition?: String
  is_physical_good: Boolean
  weight?: Float
  country_of_origin?: String
  harmonize_code?: String
  has_variant?: Boolean
  product_type: Int
  brand: String
  return_policy?: String
}

### Query
type Query {
  getAllProductsIDs(): int[]
  getAllProductsDetail(): ProductInfo[]
  getProductDetail(id: ID!): ProductInfo
}

### Mutation
type Mutation {
  createProduct(input: ProductInput): ProductInfo
  updateProduct(id:ID!, input:ProductInfo): ProductInfo
}