import {useSelector} from 'react-redux';
import style from './style.sass';

export const Bar = () => {

    const {loading} = useSelector(store => store);

    return (
        <div className={style.bar}>
            <div className={style.inner} style={{width: `${loading}%`}}/>
        </div>
    );

}