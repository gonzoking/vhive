import {useState} from 'react';
import './table.css';
import Row from './row';

const Table = ({data,editArticle})=> {
    return (<>
        <div className="table">
            <div className="tr" >
                <div className="td">Name</div>
                <div className="td">Context</div>
                <div className='td'>Action</div>
            </div>
            {data && data.map((item)=> {
                return <Row key={item.id} data={item} editArticle={(data)=>editArticle(data)}/>
            })}
            
        </div>
    
    </>);
}

export default Table;