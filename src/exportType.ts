// export type and const based on that type

export type UserPreferences = {
  userId: string;
  isAutoOpen: boolean;
  tabsCount: number;
};

export const mikePreferences: UserPreferences = {
  userId: 'mike01',
  isAutoOpen: false,
  tabsCount: 3,
};
