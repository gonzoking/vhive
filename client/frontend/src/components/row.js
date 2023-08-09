import './table.css';

const Row = ({data, editArticle})=> {
    return (
        <>
        <div className="tr">
            <div className="td">{data.name}</div>
            <div className="td" title={data.context}>{data.context}</div>
            <div className="td edit" onClick={()=> editArticle(data)}>Edit</div>
        </div>
        </>

    );
}
export default Row;