import {useSelector} from 'react-redux';

import style from './style.sass';

export const Alert = () => {

    const {error} = useSelector(store => store);

    return (
        <div className={style.alert}>
            Ошибка: {error}
        </div>
    )
}