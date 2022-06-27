import React,{useEffect,useState} from "react";

const UseEffectReturn = () => {
  const [term,setTerm] = useState('')
  useEffect(() => {
    console.log('12222')
    return () =>  {
      console.log('clear')
    }
  },[term])

  return (
  <div>
    哈哈哈
  <input type="text" value={term} onChange={(e) => setTerm(e.target.value)}/>
  {term}
  </div>
  )
}

export default UseEffectReturn