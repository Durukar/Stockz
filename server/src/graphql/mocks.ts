const url = 'https://picsum.photos/800'

export const graphqlMocks = {
  Query: {
    products: () => ({
      edges: [
        {
          node: {
            id: 'prod-001',
            name: 'D50',
            type: 'Camera',
            status: 'Em estoque',
            quantity: 32,
            price: 4500.0,
          },
        },
        {
          node: {
            id: 'prod-002',
            name: 'Tripé Profissional',
            type: 'Acessório',
            status: 'Em estoque',
            quantity: 15,
            price: 850.0,
          },
        },
        {
          node: {
            id: 'prod-003',
            name: 'Lente 50mm',
            type: 'Lente',
            status: 'Baixo estoque',
            quantity: 5,
            price: 1200.0,
          },
        },
        {
          node: {
            id: 'prod-004',
            name: 'Flash Externo',
            type: 'Acessório',
            status: 'Em estoque',
            quantity: 20,
            price: 750.0,
          },
        },
        {
          node: {
            id: 'prod-005',
            name: 'Câmera DSLR Pro',
            type: 'Camera',
            status: 'Esgotado',
            quantity: 0,
            price: 6800.0,
          },
        },
        {
          node: {
            id: 'prod-006',
            name: 'Kit Iluminação',
            type: 'Equipamento',
            status: 'Em estoque',
            quantity: 8,
            price: 3200.0,
          },
        },
        ...Array.from({ length: 40 }),
      ],
    }),
  },
  Product: {
    url: () => url,
  },
}
