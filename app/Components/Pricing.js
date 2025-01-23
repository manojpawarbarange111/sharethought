//create pricing cards starter pro enterprize 

const Pricing=()=>{
    return(
<div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
<div className="bg-base-300 rounded-lg">
    <div className="p-4">
        <h1 className="text-2xl font-bold">Starter</h1>
        <p>Great for small teams</p>
        <ul className=" list-inside space-y-4 my-4">
            <li > <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="text-green" className="size-4">
  <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
</svg>
5 Projects</li>
            <li>5 GB Storage</li>
            <li>Unlimited Users</li>
        </ul>
        <p className="text-3xl font-bold">$10</p>
        <button className="btn btn-primary">Get Started</button>
    </div>
</div>
<div className="bg-base-300 rounded-lg">  <div className="p-4">
        <h1 className="text-2xl font-bold">Pro</h1>
        <p>Great for small teams</p>
        <p className="text-3xl font-bold">$24</p>
        <button className="btn btn-primary">Get Started</button>
    </div></div>
<div className="bg-base-300 rounded-lg">  <div className="p-4">
        <h1 className="text-2xl font-bold">Enterprize</h1>
        <p>Great for small teams</p>
        <p className="text-3xl font-bold">$69</p>
        <button className="btn btn-primary">Get Started</button>
    </div></div>
</div>
    );
}
export default Pricing;