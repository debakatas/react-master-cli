import React, { Component } from 'react';
import up from '../img/up.svg';
import down from '../img/down.svg';
import like from '../img/like.svg';
import dislike from '../img/dislike.svg';

class Movie extends Component {
    state = {
        liked: '',
    };

    changeLike = (likeStatus) => {
        this.setState({ liked: likeStatus });
    };

    render() {
        const { name, score, description, year, cover } = this.props;

        return (
            <li>
                <figure>
                    <img
                        src={cover}
                        alt={`Cover of ${name} - ${year}`}
                        className="cover"
                    />
                    <div className="content">
                        <div className="title">
                            <h2>
                                {name} ({year})
                            </h2>
                            {this.state.liked === '' ? (
                                <>
                                    <button
                                        type="button"
                                        onClick={() => this.changeLike('like')}
                                    >
                                        <img src={up} alt="Vote up" />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            this.changeLike('dislike')
                                        }
                                    >
                                        <img src={down} alt="Vote down" />
                                    </button>
                                </>
                            ) : (
                                <img
                                    src={
                                        this.state.liked === 'like'
                                            ? like
                                            : dislike
                                    }
                                    alt="Like status"
                                />
                            )}
                        </div>
                        {score && (
                            <small>
                                IMDB <span>{score.toFixed(1)}/10</span>
                            </small>
                        )}
                        <figcaption>{description}</figcaption>
                    </div>
                </figure>
            </li>
        );
    }
}

export default Movie;
