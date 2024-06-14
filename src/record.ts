type GreetingCard = {
  width: number;
  height: number;
  type: 'birthday' | 'wedding' | 'new_year';
};

type GroupedByTypeCards = Partial<{
  [index in GreetingCard['type']]: GreetingCard[];
}>;

type GroupedByTypeCardsRecord = Partial<
  Record<GreetingCard['type'], GreetingCard[]>
>;

const cardGroup: GroupedByTypeCards = {
  birthday: [{ width: 100, height: 100, type: 'birthday' }],
};

const cardGroupRecord: GroupedByTypeCardsRecord = {
  birthday: [{ width: 100, height: 100, type: 'birthday' }],
};

type GroupedCards = {
  [index: string]: GreetingCard[];
};

const customCardGroup: GroupedCards = {
  first: [{ width: 100, height: 100, type: 'birthday' }],
};

type GroupedCardsRecord = Record<string, GreetingCard[]>;

const customCardGroupRecord: GroupedCardsRecord = {
  first: [{ width: 100, height: 100, type: 'birthday' }],
};
