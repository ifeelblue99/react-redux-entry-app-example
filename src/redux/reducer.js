import { getHourMinuteSecond } from '../lib/lib';
let lastId = 0;

export default function reducer(
  state = [
    {
      id: 0,
      time: 'no time',
      description: 'Hii!',
    },
  ],
  action
) {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        {
          id: lastId++,
          time: getHourMinuteSecond(),
          description: action.payload.description,
        },
      ];
    case 'remove':
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
}
