import { Button, Card, CardActions, CardContent, Typography } from "@mui/material"

const Project = () => {
    return (
        <div className="container mx-auto py-8">
            <section className="mt-12">
                <h2 className="text-3xl font-bold mb-4"> Projelerim </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Card className="border p-4 rounded-lg shadow-md bg-white">
                        <CardContent>
                            <Typography variant="h5" component="div" className="text-2xl font-semibold mb-2"> Project-1 </Typography>
                            <Typography variant="body2" color="text.secondary" className="mb-4"> Açıklama-1. </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="outlined" color="primary" href="#"> Projeyi Görüntüle </Button>
                        </CardActions>
                    </Card>
                    <Card className="border p-4 rounded-lg shadow-md bg-white">
                        <CardContent>
                            <Typography variant="h5" component="div" className="text-2xl font-semibold mb-2"> Project-2 </Typography>
                            <Typography variant="body2" color="text.secondary" className="mb-4"> Açıklama-2. </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="outlined" color="primary" href="#"> Projeyi Görüntüle </Button>
                        </CardActions>
                    </Card>
                    <Card className="border p-4 rounded-lg shadow-md bg-white">
                        <CardContent>
                            <Typography variant="h5" component="div" className="text-2xl font-semibold mb-2"> Project-3 </Typography>
                            <Typography variant="body2" color="text.secondary" className="mb-4"> Açıklama-3. </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="outlined" color="primary" href="#"> Projeyi Görüntüle </Button>
                        </CardActions>
                    </Card>
                    <Card className="border p-4 rounded-lg shadow-md bg-white">
                        <CardContent>
                            <Typography variant="h5" component="div" className="text-2xl font-semibold mb-2"> Project-4 </Typography>
                            <Typography variant="body2" color="text.secondary" className="mb-4"> Açıklama-4. </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="outlined" color="primary" href="#"> Projeyi Görüntüle </Button>
                        </CardActions>
                    </Card>
                </div>
            </section>
        </div>
    )
}
export default Project;