import React from 'react';
import './App.css';

import { getCocktailList, CocktailSummary } from './Api';

import Button from '@material-ui/core/Button';
import { CocktailList, CocktailSummaryItem } from './components/Cocktail';

type AppState = {
	cocktailList: CocktailSummary[],
	appState: "loading" | "error" | "normal"
}

type AppProps = {}
class App extends React.Component<AppProps, AppState> {
	constructor(props: {}) {
		super(props)
		this.state = {
			cocktailList:[],
			appState: "loading"
		};
	}

    getSummaryList = async () => {
    	let cocktails = await getCocktailList();
    	if (typeof cocktails === "string") {
    	    this.setState({appState: "error"});
    	} else {
    	    this.setState({
    	        cocktailList: cocktails,
    	        appState: "normal"
    	    });
    	}
      }
    componentDidMount() {
        this.getSummaryList();
    }

    render() {
        if (this.state.appState === "loading") {
            return <div>loading app</div>
        } else if (this.state.appState === "error") {
            return <div>Could not load data</div>
        } else if (this.state.appState === "normal") {
            return (
                <div className="App">
                    <CocktailList cocktails={this.state.cocktailList} />
                </div>
            );
        }
    }
}

export default App;
