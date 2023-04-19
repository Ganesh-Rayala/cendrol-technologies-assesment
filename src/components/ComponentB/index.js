function ComponentB(props) {
    let cendol = props.cendol
    let setCendol = props.setCendol
    let isTrue = props.isTrue
    let setIsTrue = props.setIsTrue
  
    const handleIncrement = () => {
      setCendol(cendol + 10);
    }
  
    const handleChange = () => {
      setIsTrue(!isTrue);
    }
    return (
      <div className='c'>
         <h1 className="count">{cendol}</h1>
        <button id="ch" style={{ backgroundColor: isTrue ? 'red' : 'blue' }} onClick={() => handleIncrement()}>Click to increase counter</button>
        <button id="cha" onClick={handleChange} style={{ backgroundColor: isTrue ? 'red' : 'blue' }}>
          Change color
        </button>
      </div>
    );
  }
  
  export default ComponentB;