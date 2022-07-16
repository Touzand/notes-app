import React, {useState} from "react"
import NoNote from '../components/NoNotes'
import {useEffectOnce} from '../hooks/useEffectOnce'

const Statistics = () => {
const [data,setData] = useState(JSON.parse(localStorage.getItem('data')))
const [totalChart,setTotalChart] = useState(0)


let sum;
useEffectOnce(()=>{
sum = data.reduce((a,v) =>  a = a + v.content.length , 0 )
setTotalChart(sum)
})

  return(
    <main>
      {data.length === 0 ? (
        <NoNote>
          <h3>You dont have any notes :(</h3>
          <p>
           You can add some notes so i can show you some information here
          </p>
        </NoNote>
      ) : (
        <div className='statistics-panel'>
          <h2>Statistics</h2>
          <hr/>
          <div className="statistic-panel-numbers">
          <article className='statistic-card'>
            <span>Notes</span>
            <h4>{data.length}</h4>
          </article>
          <article className='statistic-card'>
            <span>Total characters</span>
            <h4>{totalChart}</h4>
          </article>
          <article className='statistic-card' style={{display:'none'}}>
            <span>//////////////</span>
            <h4>////////////////</h4>
          </article>
          </div>
        </div>
      )}
    </main>
    )
}

export default Statistics
