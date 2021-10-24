import '../css/error.css'

const Error404 = () => {
    return (
        <div className="container">
            <h1 style={{margin: '33px'}}>404</h1>
            <h2>Page Not Found</h2>
            <p>The Page you are looking for doesn't exist or an other error occured. Go to <a href="">Home Page.</a></p>
        </div>
    )
}

export default Error404;