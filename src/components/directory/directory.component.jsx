import React from 'react';

import './directory.styles.scss';

import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'hats',
                    imgURL: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1
                },
                {
                    title: 'jackets',
                    imgURL: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2
                },
                {
                    title: 'sneakers',
                    imgURL: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3
                },
                {
                    title: 'mens',
                    imgURL: 'https://i.ibb.co/GCCdy8t/mens.png',
                    size: 'large',
                    id: 4
                },
                {
                    title: 'womens',
                    imgURL: 'https://i.ibb.co/R70vBrQ/womens.png',
                    size: 'large',
                    id: 5
                }
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, title, imgURL, size}) => (
                        <MenuItem key={id} title={title} imageURL={imgURL} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;