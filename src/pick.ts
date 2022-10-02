interface State {
  userId: string;
  pageTitle: string;
  pageContents: string;
  recentFiles: string[];
}

type TopNavState = {
  [k in 'userId' | 'pageTitle' | 'pageContents']: State[k];
};

type TopNavState2 = Pick<State, 'userId' | 'pageTitle' | 'pageContents'>;

const untypedTopNavState = {
  userId: 'John Doe',
  pageTitle: 'Hello, Mapped Type',
  pageContents: 'Typescript is Awesome',
};

const topNavState: TopNavState = untypedTopNavState;
const topNavState2: TopNavState2 = untypedTopNavState;
