const TWAnimation = () => {
  return (
    <div className=' flex flex-wrap justify-center items-center my-10 mx-0'>
      <div className='inline-block animate-spin ease duration-300 w-20 h-20 bg-red-400 m-10'></div>
      <div className='inline-block animate-spin ease duration-300 w-20 h-20 bg-yellow-400 m-10'></div>
      <div className='inline-block animate-spin ease duration-300 w-20 h-20 bg-green-400 m-10'></div>
      <div className='inline-block animate-ping ease duration-100 w-10 h-10 bg-teal-400 m-10'></div>
    </div>
  );
};

export default TWAnimation;
