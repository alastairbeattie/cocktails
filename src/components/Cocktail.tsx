import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './Cocktail.css';
import { CocktailSummary } from '../Api';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


type CocktailSummaryProps = {
    cocktail: CocktailSummary
}
export function CocktailSummaryItem(props:CocktailSummaryProps):JSX.Element {
    const sectionStyle = {
        backgroundImage: `url(${props.cocktail.strDrinkThumb})`,
        backgroundSize: "cover"
      };
    
    return <Card className="cocktail-card"  style={ sectionStyle }>
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {props.cocktail.strDrink}
            </Typography>
        </CardContent>
        {/* <img
            className="cocktail-card-thumb"
            src={props.cocktail.strDrinkThumb}
            title="Contemplative Reptile"
        /> */}
            <Button>More</Button>
    </Card>
}
export function Cocktail():JSX.Element {
    return <div>A Cocktail</div>
}

type CocktailListProps = {
    cocktails:CocktailSummary[]
}
export function CocktailList(props:CocktailListProps):JSX.Element {
    const list = props.cocktails.map( cocktail => {
        return <CocktailSummaryItem cocktail={cocktail} />
    })
    return <div>Cocktails
        <div className="cocktail-list">
            {list}
        </div>
        </div>
}