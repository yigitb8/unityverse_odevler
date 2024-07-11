import { Button } from "@mui/material";

const Info = () => {
    return (

        <div className="container mx-auto mt-20 py-8 ">
            <section className="text-center ">
                <h1 className="text-5xl font-bold mb-6"> Kişisel Web Siteme Hoşgeldiniz. </h1>
                <p className="text-lg mb-6"> Merhaba Ben Yiğit, Web Frontend Developer olarak çalışıyorum. </p>
                <Button variant="contained" color="primary" href="/about"> Hakkımda daha fazlası için... </Button>
            </section>
        </div>
    )
}
export default Info;