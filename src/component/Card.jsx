/* eslint-disable react/prop-types */

function Card(props) {
    return (
        <div className={`max-w-[275px] w-full h-[375px] rounded-md grid grid-rows-4 shadow-lg ${props.cusStyle}`}>
            <div className='flex flex-col items-center justify-center row-span-3'>
                {<img className='py-3 ' src={props.img} alt="" />}
                <h3 className='py-3 text-VeryDarkBlue font-bold text-[20px]'>{props.browser}</h3>
                <p>{props.minVer}</p>
            </div>
            <div className=' border-t-4 border-dotted border-t-gray-200 flex justify-center items-center'>
            <a href={props.link}><button className='btn btn-purple py-3'>Add & Install Extension</button></a>
            </div>
        </div>
    )
}

export default Card