

const Display = ({data}) => {
    console.log(data);
    const {name,img,price} = data
    return (
        <>
        
        <div className=" border-2 border-teal-700 flex flex-col items-center gap-4 p-5 rounded-xl">
        <h2 className=" text-xl font-bold">Bottle: {name}</h2>
        <img src={img} alt="" className=" w-[250px] rounded-lg" />
        <p className=" font-medium text-xl">Price: ${price}</p>
        <button className="bg-teal-500
         text-white font-medium text-2xl py-2 px-4 rounded-2xl border-none outline-none">Purchase</button>
        </div>
        </>
    );
};

export default Display;