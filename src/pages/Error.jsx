import MainNavigation from "../components/MainNavigation"

const ErrorPage = ()=>{
    return(
        <>
            <MainNavigation></MainNavigation>
            <main  className={`my-12 mx-auto text-center text-5xl `}>
                <h1>An Error Occured!</h1>
                <p className="text-3xl my-8">Could not find this page!</p>
            </main>
        </>
    )
}

export default ErrorPage