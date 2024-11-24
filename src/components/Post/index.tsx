import { useState, useEffect } from 'react';
import { Post } from '../../../types';
import { getPosts } from '../../../services/mockAPI';
import styles from './PostList.module.css';

const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        console.error('Failed to load posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  if (loading) return <div>Loading posts...</div>;

  return (
    <div className={styles.postList}>
      {posts.map(post => (
        <article key={post.id} className={styles.post}>
          <header className={styles.postHeader}>
            <img src={post.author.avatar} alt="" className={styles.authorAvatar} />
            <div>
              <h3>{post.author.name}</h3>
              <time>{new Date(post.createdAt).toLocaleDateString()}</time>
            </div>
          </header>
          <p className={styles.postContent}>{post.content}</p>
        </article>
      ))}
    </div>
  );
};

export default PostList;