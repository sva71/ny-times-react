import style from './style.sass';

export const Item = ({published_date, section, title, abstract, url, multimedia}) => (
    <div className={style['item-box']}>
        <p className={style['item-section']}>{section}</p>
        <p className={style['item-title']}>{title}</p>
        { multimedia ?
            <img src={multimedia[2].url} alt="image" height={multimedia[2].height} width={multimedia[2].width} /> : <></> }
        <p className={style['item-abstract']}>{abstract}</p>
        <div className={style['item-footer']}>
            <p className={style['item-published']}>{published_date}</p>
            <a href={url} target="_blank">Read more...</a>
        </div>
    </div>
);