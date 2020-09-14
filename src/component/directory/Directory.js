import React from 'react';

import MenuItem from '../../component/menu-item/MenuItem';

import './directory.styles.scss'

class Directory extends React.Component {
    constructor() {
        super()
        this.state = {
            sections : [
                {
                  title: 'hats',
                  imageUrl: 'https://cdn.shopify.com/s/files/1/2115/3093/files/Pacman_Symbol_All_Black_Streetstyle_Snapback_Baseball_Hat_Cap_1.jpg?v=1502868872',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.etsystatic.com/20096887/c/1500/1191/0/428/il/6ad3a5/1887899078/il_340x270.1887899078_3m7j.jpg',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
              ]        
        }
    }
    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({title, imageUrl, id, size}) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                    ))
                }
            </div>
        )
    }
}

export default Directory