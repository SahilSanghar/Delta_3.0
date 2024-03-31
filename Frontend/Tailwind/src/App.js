import './App.css';

function App() {
  return (
    <div className='border-2 text-center m-auto mt-20 border-black w-7/12	h-3/4'>
      <h1 className='bg-blue-500 h-28 text-3xl text-slate-50 pt-8'>News you can Trust.</h1>
      <br/>
      <h2 className='font-bold text-xl'>Stay upto date with Latest!</h2>
      <p className='mb-2'>Subscribe to our newsletter for the news straight into your inbox</p>
      <input type='text' placeholder='you@example.com' className='bg-slate-200	h-12 mb-2 p-2 w-4/12 text-center rounded-xl'/>
      <br/>
      <button className='bg-blue-500 rounded-3xl text-slate-50 w-4/12 h-10'>Subscribe Now</button>
      <br/>
      <h4 className='mt-4'>We value your privacy</h4>
    </div>
  );
}

export default App;
