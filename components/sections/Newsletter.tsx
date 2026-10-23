export default function Newsletter() {
  return (
    <div className="bg-gray-100 p-8">
      <h3 className="text-xs font-bold uppercase tracking-widest mb-2">Newsletter</h3>
      <h4 className="text-2xl font-bold mb-6">Design News to<br />your inbox</h4>
      
      <form className="flex flex-col gap-3">
        <input 
          type="email" 
          placeholder="Email" 
          className="w-full bg-transparent border-b border-gray-400 py-2 text-sm focus:outline-none focus:border-black transition-colors"
        />
        <button 
          type="button" 
          className="bg-black text-white text-xs font-bold uppercase tracking-wider py-3 px-6 self-start hover:bg-gray-800 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
}