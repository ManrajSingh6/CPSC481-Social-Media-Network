// Basic profile page structure
// - Display user profile information
// - Display user posts
// - Display user followers and following
// - Allow user to edit profile information
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUser } from '../../services/mockAPI';
import { User } from '../../types';
import styles from './Profile.module.css';

const Profile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const { userId } = useParams();

  useEffect(() => {
    const loadUser = async () => {
      try {
        const data = await getUser(userId || '1'); // Default to user 1 if no ID
        setUser(data);
      } catch (error) {
        console.error('Failed to load user:', error);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [userId]);

  if (loading) return <div>Loading profile...</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div className={styles.profile}>
      <div className={styles.header}>
        <img src={user.avatar} alt="" className={styles.avatar} />
        <h1>{user.name}</h1>
      </div>
      
      <div className={styles.content}>
        <div className={styles.stats}>
          <div>Posts: {user.posts?.length || 0}</div>
          <div>Following: {user.following?.length || 0}</div>
          <div>Followers: {user.followers?.length || 0}</div>
        </div>
        
        {/* User's posts will go here */}
      </div>
    </div>
  );
};

export default Profile;