import {useState, useEffect, useRef} from 'react';
import './page.css';
import Table from './table';
import {getAnswer,getArticles} from '../service'

const Page = ()=> {
    const [list, setList] = useState([]);
    const [article, setArticle] = useState({});
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    const fetchArticles = async ()=> {
        setList(await getArticles());
       // setList([{id:3232, name: 'guy', context: 'her we are boys at hackton'}])
    }
    const textref = useRef(null);
    useEffect(()=> {
        fetchArticles();
    },[])

    const sendQuestion = async () => {
        const result = await getAnswer(question);
        if(result) {
            setAnswer(result);
        }
    }

    const editArticle = (data)=> {
        setArticle(data);
        textref.current.value = data.context;
    }
    return (<><div className="main-page">
            <div clasName="left-page">
                <Table data={list} editArticle={editArticle}/>
            </div>
            <div clasName="right-page">
                <div className="name">Name: <input value={article.name}/></div>
                <div><textarea className="textarea" ref={textref} >{article.context}</textarea></div>
                <div className="name">Question: <input onChange={(event)=>setQuestion(event.target.value)} placeholder='Question...' value={question} />
                    <button onClick={sendQuestion} className="askbtn">Ask</button>
                </div>
                <div className="name">Answer: {answer}</div>
            </div>
        </div></>);
}
export default Page;