import './styles.css';
import { ContextMenu } from './menu';
import {foo} from './modules/background.module'


const contextMenu = new ContextMenu('#menu', {
  data: [
    {
      id: '1',
      value: 'Green foursquare',
      func: foo,
    },
    {
      id: '2',
      value: 'Green foursquare',
      func: foo,
    },
    {
      id: '3',
      value: 'Green foursquare',
      func: foo,
    },
    {
      id: '4',
      value: 'Green foursquare',
      func: foo,
    },
    {
      id: '5',
      value: 'Green foursquare',
      func: foo,
    },
    {
      id: '6',
      value: 'Green foursquare',
      func: foo,
    },
  ],
});