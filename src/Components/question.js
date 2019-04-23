import React from 'react';
import QuestinList from './questionList.js';

const Question =(props) => {    
    
    const style={
        minHeight: '90px'
    }
    if(props.qIsAnswer&&props.qIsRight){
        style.backgroundColor='green';
    }else if(props.qIsAnswer && !props.qIsRight){
        style.backgroundColor='red';
    }
  return (
    <div>
        <ul className="list-group">
            <li 
                className="list-group-item" 
                style={style}
                onClick={props.openDetails}
            >{props.qId}{' . ' }{props.qText}</li>
            <hr></hr>
            <div className="answer">
                {props.qChoices.map(q=>{
                    return <QuestinList
                                key={q}
                                List={q}
                                chackChanged={props.chackChanged}
                                qId={props.qId}
                                qIsAnswer={props.qIsAnswer}
                            />
                })}
            </div>
        </ul>
    </div>
  )
}

export default Question;


