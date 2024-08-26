import React from 'react';
import Card from './Card.jsx';
import styles from '../styles/recentposts.module.css';

// Import your 3 images
import img1 from '../assets/image1.jpg';
import img2 from '../assets/image2.jpg';
import img3 from '../assets/image3.jpg';

const images = [img1, img2, img3];
const titles = ['Title 1', 'Title 2', 'Title 3'];

function RecentPosts() {
  //TODO: Fetch 3 most recent posts

  return (
    <div className={styles.container}>
      {images.map((image, i) => (
        <Card
          key={i}
          src={image}
          alt={`Image ${i + 1}`}
          title={titles[i]}
          style={{ width: '332px', aspectRatio: 1 }}
        />
      ))}
    </div>
  );
}

export default RecentPosts;
