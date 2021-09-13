export interface ItemInterface {
  item: {
    id: string;
    code: string;
    isComplex: boolean;
    name: string;
    calorieCount: string;
    imageUrl: string;
    isDineInOnly: boolean;
    isFavourite: boolean;
    isNew: boolean;
    isSuggested: boolean;
    isUnavailable: boolean;
    price: number;
    indicators: {
      iconName: string;
      tooltipText: string;
    }[];
  };
}

export interface MainInterface {
  main: {
    name: string;
    code: string;
    slug: string;
    icon: string;
    items?: any[];
    subCategories?: any[];
  };
}
