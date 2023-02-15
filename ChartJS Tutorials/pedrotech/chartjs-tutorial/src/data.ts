export type UserDataType = {
  id: number;
  year: number;
  userGain: number;
  userLost: number;
};

export const UserData: UserDataType[] = [
  { id: 1, year: 2016, userGain: 30000, userLost: 82300 },
  { id: 2, year: 2017, userGain: 45778, userLost: 14800 },
  { id: 3, year: 2018, userGain: 38480, userLost: 34200 },
  { id: 4, year: 2019, userGain: 23932, userLost: 82400 },
  { id: 5, year: 2020, userGain: 64920, userLost: 29300 },
];
