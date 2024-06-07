type Chars = 'thrifty' | 'tricky' | 'clever';
type Achievements = Chars[];

type LooseAge = string | number;

type PersonTypeOne = {
  name: string;
  age: LooseAge;
  achievements: Achievements;
};

interface PersonTypeTwo {
  name: string;
  age: string;
  country: string;
  isAdmin?: boolean;
}

interface PersonTypeOneRich extends PersonTypeOne {
  money: number;
}

type PersonTypeTwoRich = PersonTypeOne & {
  money: string;
};

const personOne: PersonTypeTwo = {
  name: 'Sylvia',
  age: '25',
  country: 'Gondoland',
  isAdmin: true,
};

const richMole: PersonTypeOneRich = {
  name: 'Jacob',
  age: '5',
  money: 4000,
  achievements: ['thrifty', 'tricky', 'clever'],
};

const someRichAdmin: PersonTypeTwoRich = {
  name: 'Mark',
  age: 50,
  money: '200000',
  achievements: ['clever'],
};
