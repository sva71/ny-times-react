import {useSelector} from 'react-redux';

import {Item} from '../Item';

export const List = () => {

    const {news} = useSelector(store => store);

    return news.map((item, index) => <Item key={index} {...item} />);

}