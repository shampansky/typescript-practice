// create an object type with multiple fields. Make it nested
type MovieItem = {
  year: number;
  county: string;
  rating?: number;
  meta?: {
    keywords?: string;
    resolution: string;
  };
};

const movie1: MovieItem = {
  year: 2022,
  county: 'Russia',
};

// Make a new type base on this type with all fields required
type MovieFullItem = Required<MovieItem>;

const movie2: MovieFullItem = {
  year: 2022,
  county: 'Russia',
  rating: 8.0,
  meta: {
    resolution: 'HD',
  },
};

// Make a new type base on this type with one field required
type MovieRatingRequired = Required<Pick<MovieItem, 'rating'>> &
  Omit<MovieItem, 'rating'>;

const movie3: MovieRatingRequired = {
  year: 2022,
  county: 'Russia',
  rating: 7.5,
};

// Make a new type base on this type with all fields optional
type MovieShortItem = Partial<MovieItem>;

const movie4: MovieShortItem = {
  year: 2002,
};

// Make a new type base on this type with one field optional

type MovieYearOptional = Partial<Pick<MovieItem, 'year'>> &
  Omit<MovieItem, 'year'>;
const movie5: MovieYearOptional = {
  county: 'USA',
};

// Make RequiredPick type which accepts type and key as a generic/ Which makes key in type required
type RequiredPick<T, Key extends keyof T> = Required<Pick<T, Key>> &
  Omit<T, Key>;

const movie6: RequiredPick<MovieItem, 'rating'> = {
  county: 'Germany',
  rating: 6.8,
  year: 1998,
};

// Make PartialPick type which accepts type and key as a generic/ Which makes key in type optional
type PartialPick<T, Key extends keyof T> = Partial<Pick<T, Key>> & Omit<T, Key>;

const movie7: PartialPick<MovieItem, 'year'> = {
  county: 'Japan',
};
