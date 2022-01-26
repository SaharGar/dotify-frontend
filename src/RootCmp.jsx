import React from 'react';
import { Route, Switch } from 'react-router'
import { connect } from "react-redux";
// import routes from './routes'

import {loadStations} from './store/station.action'

import { Home } from "./pages/Home";
import { CreateStation } from "./pages/CreateStation";
import { Library } from "./pages/Library";
import { Search } from "./pages/Search";
import { LoginPage } from "./pages/LoginPage";
import { UserProfile } from "./pages/UserProfile";
import { StationDetails } from "./pages/StationDetails";
import { LikedSongs } from './pages/LikedSongs';
import { Header } from "./cmps/Header";
import { AudioPlayer } from "./cmps/AudioPlayer";
import { Navigation } from "./cmps/Navigation";
import { HomeScreenModal } from "./cmps/HomeScreenModal";

export class _RootCmp extends React.Component {


  state = {
    isFirstEntry: sessionStorage.getItem('isFirstEntry'),
    isAppLoaded: false
  }


  componentDidMount (){
    
    this.props.loadStations().then (() => {
      this.setState({isAppLoaded: true})
    })
  }


  componentDidUpdate(prevProps, prevState) {
    
  }
  

  render() {
    
    const {isFirstEntry, isAppLoaded} = this.state
    if (!isAppLoaded) return <h1>Loading...</h1>
    return (
      <div className="App main-container">
        <Header />
        <Navigation />
        {isFirstEntry !== 'notFirst' && <HomeScreenModal onToggleHomeModal={this.onToggleHomeModal} />}
        <main>
          <Switch>
            <Route component={UserProfile} path="/user/:id" />
            <Route component={StationDetails} path="/station/:id" />
            <Route component={LikedSongs} path="/likedSongs/:id"/>
            <Route component={LoginPage} path="/login" />
            <Route component={CreateStation} path="/newStation" />
            <Route component={Search} path="/search" />
            <Route component={Library} path="/library" />
            <Route component={Home} path="/" />
          </Switch>
        </main>
        <AudioPlayer />
      </div>
    );
  }
  }

  function mapStateToProps() {
    return {
    }
  }
  
  const mapDispatchToProps = {
    loadStations
  };
  
  export const RootCmp = connect(mapStateToProps, mapDispatchToProps)(_RootCmp);
