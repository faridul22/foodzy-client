

const HowServeCard = ({ data }) => {
    const { img_url, title, sub_title } = data
    return (
        <div className="hover:text-gray-700 rounded-2xl hover:shadow-xl  hover:bg-yellow-100">

            <div className="card pt-10">
                <figure className="">
                    <img width={300} src={img_url} alt="Shoes" className="rounded-xl h-[250px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <small>{sub_title}</small>
                </div>
            </div>
        </div>
    );
};

export default HowServeCard;