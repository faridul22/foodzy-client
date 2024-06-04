import { Link, useRouteError } from "react-router-dom";



const ErrorPage = () => {
    const { error, status } = useRouteError();

    return (
        <div className="container flex flex-col justify-center h-screen text-center py-32">
            <h1 className="text-8xl font-extrabold">Error{status || 404}</h1>
            <p className="text-5xl">{error?.message}</p>
            <button className="btn btn-accent my-5 w-[200px] mx-auto">
                <Link to="/">Go To Home</Link>
            </button>
        </div>
    );
};

export default ErrorPage;