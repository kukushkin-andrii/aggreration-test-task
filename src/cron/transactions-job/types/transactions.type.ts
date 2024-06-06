type MetaType = {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
};

export type ItemType = {
  id: string;
  userId: string;
  createdAt: string;
  type: string;
  amount: number;
};

export type TransactionsType = {
  meta: MetaType;
  items: ItemType[];
};
