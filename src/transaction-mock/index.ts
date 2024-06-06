const responseMock = {
  items: [
    {
      id: "41bbdf81-735c-4aea-beb3-3e5f433a30c5",
      userId: "074092",
      createdAt: "2023-03-16T12:33:11.000Z",
      type: "payout",
      amount: 30
    },
    {
      id: "41bbdf81-735c-4aea-beb3-3e5fasfsdfef",
      userId: "074092",
      createdAt: "2023-03-12T12:33:11.000Z",
      type: "spent",
      amount: 12
    },
    {
      id: "41bbdf81-735c-4aea-beb3-342jhj234nj234",
      userId: "074092",
      createdAt: "2023-03-15T12:33:11.000Z",
      type: "earned",
      amount: 1.2
    },
    {
      id: "41bbdf81-735c-4aea-beb3-3e5f433a30c6",
      userId: "074093",
      createdAt: "2023-03-16T12:33:11.000Z",
      type: "payout",
      amount: 5
    },
    {
      id: "41bbdf81-735c-4aea-beb3-3e5fasfsdfee",
      userId: "074093",
      createdAt: "2023-03-12T12:33:11.000Z",
      type: "spent",
      amount: 2
    },
    {
      id: "41bbdf81-735c-4aea-beb3-342jhj234nj235",
      userId: "074093",
      createdAt: "2023-03-15T12:33:11.000Z",
      type: "earned",
      amount: 10
    }
  ],
  meta: {
    totalItems: 6,
    itemCount: 6,
    itemsPerPage: 6,
    totalPages: 1,
    currentPage: 1
  }
};

export const getTransactions = () => {
  // With real implementation should be request for new transactions
  return responseMock;
};
