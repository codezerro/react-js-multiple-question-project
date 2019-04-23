import React, { Component } from 'react';
import './App.css';
import Question from './Components/question';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      questionId:111,
      questions:[
        {
          id:1,
          questionText:"Who is Primeminister of Bangladesh",
          choices:['Shekh hasina','Jillu Rahman','Ziaur Rahman','Khaleda Zia'],
          answer:['Shekh hasina'],
          isAnswer:false,isWrong:false
        },
        {
          id:2,
          questionText:"Who is Primeminister of woganda",
          choices:['chan chan lue','Jillu Rahman','Ziaur Rahman','Khaleda Zia'],
          answer:['chan chan lue'],
          isAnswer:false,
          isRight:false
        },
        {
          id:3,
          questionText:"বাংলাদেশের কতগুলো জেলা আছে ? ",
          choices:['৬৭ টি','৬৬ টি','৬৪ টি','৬২ টি'],
          answer:['৬৪ টি'],
          isAnswer:false,isWrong:false
        },
      ],
      isStart:false,point:'',
    }
  }
  ///methods
  chackChangedHandler=(event,id,answer)=>{
    const fIndex=this.state.questions.findIndex(p=>{
      return p.id===id;
    })

    if(event.target.value===answer){
      const qu={
        ...this.state.questions[fIndex]
      }
      qu.isAnswer=true;
      qu.isRight=true;
      const ques=[...this.state.questions]
      ques[fIndex]=qu;
      console.log(qu.isAnswer);
      this.setState({
        questions:ques
      })
    }else{
      const qu={
        ...this.state.questions[fIndex]
      }
      qu.isAnswer=true;
      qu.isRight=false;
      const ques=[...this.state.questions]
      ques[fIndex]=qu;
      // console.log(qu.isAnswer);
      this.setState({
        questions:ques
      })
    }
    // console.log(this.state.questions[fIndex].isAnswer);
  }
  startExam=()=>{
    const st=this.state.isStart;
    this.setState({
      isStart:!st
    })
  }
  endExam=(qId)=>{
    if(this.state.questionId===qId){
      console.log('why this is fired?'); 
    }
  }
///methods end
  render() {
    let output=null,btnoutput=null;
    if(!this.state.isStart){
      btnoutput=(
        <div>
          <button 
            className="btn btn-outline-success" 
            style={{float:'',margin:'9px',minHeight:''}}
            onClick={this.startExam}
          >Start</button>
        </div>
      )
    }
    if(this.state.isStart){
      output=(
        <div>
          {this.state.questions.map(q=>{
            return <Question 
              key={q.id}
              qId={q.id}
              qText={q.questionText}
              qChoices={q.choices}
              qIsAnswer={q.isAnswer}
              qIsRight={q.isRight}
              chackChanged={event=>this.chackChangedHandler(event,q.id,q.answer[0])}
            />
          })}
          <div>
            <button 
              onClick={()=>this.endExam(this.state.questionId)}
              className="btn btn-danger"
            >End Exam</button>
          </div>
        </div>
      )
    }

    return (
      <div className="App container list-group-out">
        <div>
          <h5 style={{float:'left',padding:'5px',minHeight:'70px',margin:'9px'}}>Exam Name : MCQ</h5>
          {btnoutput}
          {output}
        </div>
      </div>
    );
  }
}

export default App;


