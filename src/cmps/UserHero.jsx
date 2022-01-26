import React from 'react';
import { EditUser } from './EditUser';
import { connect } from "react-redux";
import { updateUser } from '../store/user.action';


class _UserHero extends React.Component {

    state = {
        user: null,
        isEditShown: false,
    }

    componentDidMount() {
        this.setState({ user: this.props.user })
    }


    componentDidUpdate(prevProps, prevState) {
        if (prevProps.user !== this.props.user) {
            this.setState({ user: this.props.user })
        }
    }

    onEditProfile = () => {
        this.setState({ isEditShown: !this.state.isEditShown })
    }



    render() {
        const { user, isEditShown } = this.state
        if (!user) return <h1>Loading...</h1>
        const { imgUrl, username, backgroundColor } = user
        const transperent = 'rgb(0 0 0 / 0%)'
        return (
            <div className="hero" style={{backgroundImage: `linear-gradient(181deg, ${backgroundColor}, ${transperent})`}}>
                <div className="user-info flex align-center">
                    <div className="img-container" style={{backgroundImage: user.imgUrl ? `url(${imgUrl})` : `<i className="fas fa-user user-icon"></i>`}}>
                        <button className='edit-btn' onClick={this.onEditProfile}>Edit Profile</button>
                        
                    </div>
                    <div className="user-details">
                        <small>Profile</small>
                        <h1>{username}</h1>
                    </div>
                </div>
                {isEditShown && <EditUser user={user} onEditProfile={this.onEditProfile} updateUser={this.props.updateUser} />}
            </div>
        )
    }
}

function mapStateToProps({ }) {
    return {

    };
}

const mapDispatchToProps = {
    updateUser
};

export const UserHero = connect(mapStateToProps, mapDispatchToProps)(_UserHero);