import './spinner.css';

const Spinner = () => {
  return (
    <div className='grid place-items-center h-1/2'>
      <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Spinner