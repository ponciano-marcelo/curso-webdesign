import React from 'react'

import Header from './Header'
import Main from './Main'
import Footer from './Footer'

import ImageGallery from 'react-image-gallery';

function App() {
    const images = [
        {
          original: 'https://picsum.photos/id/1018/1000/600/',
          thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1015/1000/600/',
          thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1019/1000/600/',
          thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
      ];

    return (
        <div>
            <Header />
            <ImageGallery items={images} autoPlay={true} showBullets={true} />;
            <Main />
            <Footer />
        </div> 
    );
}

export default App