import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { Divider } from "@mui/material";

const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
});

const Main = () => {
    return (
        <Paper
            sx={{
                borderRadius: "10px",
                p: 0,
                margin: "auto",
                maxWidth: 500,
                flexGrow: 1,
                backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "#1A2027" : "#17202D",
                color: "white",
            }}
        >
            <Grid container>
                <Grid
                    item
                    xs={6}
                    style={{
                        backgroundImage: `url(https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)`,
                    }}
                >
                    {/* <ButtonBase sx={{ width: 128, height: 128 }}>
                        <Img
                            alt="complex"
                            src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                        />
                    </ButtonBase> */}
                </Grid>
                <Grid item xs={6} sm container spacing={2}>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography
                                gutterBottom
                                variant="subtitle1"
                                component="div"
                            >
                                Shadow Warrior 3
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Action, FPS, Adventure, Shooter
                            </Typography>
                            <Divider
                                variant="middle"
                                light
                                style={{ backgroundColor: "lightblue" }}
                            />
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1" component="div">
                                $19.00
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default Main;