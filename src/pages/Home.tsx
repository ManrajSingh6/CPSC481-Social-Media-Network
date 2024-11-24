// Main home page with:
// - Post creation
// - Feed display
// - Basic layout structure
import { useState } from 'react';
import PostList from '../../components/Post/PostList';
import PostCreate from '../../components/Post/PostCreate';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.feed}>
        <PostCreate />
        <PostList />
      </div>
      <aside className={styles.sidebar}>
        <div className={styles.suggestions}>
          <h2>Suggested Connections</h2>
          {/* Suggestions component */}
        </div>
      </aside>
    </div>
  );
};

export default Home;