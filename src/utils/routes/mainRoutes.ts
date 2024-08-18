import {RootStackParamList, RouteType} from '../../types/navigationType';
import QuestionScreen from './../../screens/main/Question/QuestionScreen';
export const mainRoutes: RouteType<keyof RootStackParamList>[] = [
  {
    name: 'Question',
    component: QuestionScreen,
  },
];
