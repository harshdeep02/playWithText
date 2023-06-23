import React from 'react'

export default function Alert(props) {

    const upperCase = (word)=>{
        // const lower = word.toLowerCase();
        return word.charAt(0).toUpperCase() + word.slice(1)
    }
  return (
    <div style={{height: '40px'}}>
    {props.alert &&
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>{upperCase(props.alert.type)}</strong>: {props.alert.msg}
</div>}
</div>
  )
}
