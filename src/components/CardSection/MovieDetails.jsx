import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { useState } from "react";
const MovieDetails = () => {
  const [movie, setmovie] = useState(null);

  return (
    <div className="flex items-center justify-center py-5">
      {movie && (
        <Card sx={{ maxWidth: 405 }}>
          <CardMedia />
          <img sx={{ height: 300 }} src={movie.Images} alt="" />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <h1>{movie.Title}</h1>
            </Typography>
            <div>
              <Typography variant="body2" color="text.secondary">
                <p>
                  <h3>Language</h3>
                  {movie.Language}
                </p>
              </Typography>
            </div>

            <Typography variant="body2" color="text.secondary">
              <p>{movie.Plot}</p>
            </Typography>
          </CardContent>
          <CardActions>
            <Rating name="read-only" value={movie.imdRatings} readOnly />
            <Button size="small">
              <h4>imdVotes {movie.ImdVotes}</h4>
            </Button>
          </CardActions>
        </Card>
      )}
    </div>
  );
};

export default MovieDetails;
