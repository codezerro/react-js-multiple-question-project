import React from 'react'

const QuestinList= (props) => { 
    //console.log(props.qIsAnswer);
    if(props.qIsAnswer){
        
    }
    return (
    <div>
    <ul className="float-left">
        <li> 
            <input type="checkbox"
                value={props.List} 
                onChange={props.chackChanged}
            />
            <span>{props.List}</span>
        </li>
    </ul>
    </div>
  )
}
export default QuestinList;