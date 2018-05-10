import React, { Component } from 'react';

export default class Realty extends Component {

    renderMiniImgs() {
        let imgs = [];
        let size = 1;
        while(size <= 6) {
            imgs.push(
                <img className="mr-2" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=150&h=80" alt="Generic placeholder" />
            );
            size++;
        }
        return imgs;
    }

    render() {
        return (
            <div className="container">
                <h1 className="mt-3">Nome Anúncio</h1>
                <div>
                    <img width="100%" height="450px" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card cap" />
                </div>
                <div className="mt-3 mb-5" align="center">
                    {this.renderMiniImgs()}
                </div>
            </div>
        );
    }

}