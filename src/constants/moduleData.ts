export const moduleData = {
  users: {
    label: "Users",
    data: [
      {
        id: 1,
        type: "admin",
        name: "John Doe",
        email: "john@example.com",
        status: "Active",
      },
      {
        id: 2,
        type: "employee",
        name: "Jane Smith",
        email: "jane@example.com",
        status: "Inactive",
      },
    ],
  },

  roles: {
    label: "Roles",
    data: [
      { id: 1, role: "Admin", permissions: 18, users: 3 },
      { id: 2, role: "Manager", permissions: 12, users: 5 },
    ],
  },

  products: {
    label: "Products",
    data: [
      {
        id: 1,
        name: "MacBook Pro",
        category: "Laptops",
        price: 2400,
        stock: 12,
      },
      {
        id: 2,
        name: "Sony Headphones",
        category: "Audio",
        price: 199,
        stock: 40,
      },
    ],
  },

  dashboard: {
    label: "Dashboard",
    data: [], // dashboard has no table data
  },
};
